import {Editor, ReactRenderer} from "@tiptap/react";
import {Range} from "@tiptap/core";
import SlashNode, {SlashNodeRef} from "../Node/SlashNode";
import tippy, {Instance, Props} from "tippy.js"
import Commands from "./commands";
// @ts-ignore
import {SuggestionKeyDownProps, SuggestionProps} from "@tiptap/suggestion/dist/packages/suggestion/src/suggestion";
import {Braces, Heading1, Heading2, Heading3, Heading4, Sheet, SquareCheck, SquareCheckBig} from "lucide-react";

const SlashItems = {
    items: () => {
        return [
            {
                title: 'Heading1',
                icon: <Heading1/>,
                command: ({editor, range}: { editor: Editor, range: Range }) => {
                    editor
                        ?.chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', {level: 1})
                        .run()
                },
            },
            {
                title: 'Heading2',
                icon: <Heading2/>,
                command: ({editor, range}: { editor: Editor, range: Range }) => {
                    editor
                        ?.chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', {level: 2})
                        .run()
                },
            },
            {
                title: 'Heading3',
                icon: <Heading3/>,
                command: ({editor, range}: { editor: Editor, range: Range }) => {
                    editor
                        ?.chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', {level: 3})
                        .run()
                },
            },
            {
                title: 'Heading4',
                icon: <Heading4/>,
                command: ({editor, range}: { editor: Editor, range: Range }) => {
                    editor
                        ?.chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', {level: 4})
                        .run()
                },
            },
            {
                title: 'CodeBlock',
                icon: <Braces/>,
                command: ({editor, range}: { editor: Editor, range: Range }) => {
                    editor
                        ?.chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('codeBlock')
                        .run()
                },
            },
            {
                title: 'Table',
                icon: <Sheet/>,
                command: ({editor, range}: { editor: Editor, range: Range }) => {
                    editor
                        ?.chain()
                        .focus()
                        .deleteRange(range)
                        .insertTable({rows: 3, cols: 2, withHeaderRow: true})
                        .run()
                },
            },
            {
                title: 'Task',
                icon: <SquareCheckBig/>,
                command: ({editor, range}: { editor: Editor, range: Range }) => {
                    editor
                        ?.chain()
                        .focus()
                        .deleteRange(range)
                        .toggleTaskList()
                        .run()
                },
            }

        ]
    },
    render: () => {
        let component: ReactRenderer<SlashNodeRef>;
        let popup: Instance<Props>[];

        return {
            onStart: (props: SuggestionProps) => {
                component = new ReactRenderer(SlashNode, {
                    props,
                    editor: props.editor,
                })

                if (!props.clientRect) {
                    return
                }

                popup = tippy('body', {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start',
                })
            },

            onUpdate(props: SuggestionProps) {
                component.updateProps(props)

                if (!props.clientRect) {
                    return
                }

                popup?.[0].setProps({
                    getReferenceClientRect: props.clientRect,
                })
            },

            onKeyDown(props: SuggestionKeyDownProps) {
                if (props.event.key === 'Escape') {
                    popup[0].hide()

                    return true
                }

                return component?.ref?.onKeyDown(props)
            },

            onExit() {
                popup?.[0].destroy()
                component?.destroy()
            },
        }
    },

}


const Slash = Commands("/").configure({
    suggestion: SlashItems
})

export default Slash;





