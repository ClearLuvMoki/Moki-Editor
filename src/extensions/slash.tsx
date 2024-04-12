import {Extension} from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'
import {ReactRenderer} from "@tiptap/react";
import SlashNode from "../Node/SlashNode";
import tippy from "tippy.js"

const SlashItems = {
    items: ({query}) => {
        return [
            {
                title: 'H1',
                command: ({editor, range}: any) => {
                    editor
                        ?.chain()
                        .focus()
                        .deleteRange(range)
                        .setNode('heading', {level: 1})
                        .run()
                },
            },
        ]
    },
    render: () => {
        let component
        let popup

        return {
            onStart: props => {
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

            onUpdate(props) {
                component.updateProps(props)

                if (!props.clientRect) {
                    return
                }

                popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                })
            },

            onKeyDown(props) {
                if (props.event.key === 'Escape') {
                    popup[0].hide()

                    return true
                }

                return component.ref?.onKeyDown(props)
            },

            onExit() {
                popup?.[0].destroy()
                component?.destroy()
            },
        }
    },

}


const Slash = Extension.create({
    name: 'commands',

    addOptions() {
        return {
            suggestion: {
                char: '/',
                command: ({editor, range, props}: any) => {
                    props.command({editor, range})
                },
            },
        }
    },

    addProseMirrorPlugins() {
        return [
            Suggestion({
                editor: this.editor,
                ...this.options.suggestion,
            }),
        ]
    },
})

export default Slash.configure({
    suggestion: SlashItems
});

