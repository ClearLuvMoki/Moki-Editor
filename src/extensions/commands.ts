import {Extension, Range} from "@tiptap/core";
import {Suggestion} from "@tiptap/suggestion";
import {Editor} from "@tiptap/react";
// @ts-ignore
import {SuggestionProps} from "@tiptap/suggestion/dist/packages/suggestion/src/suggestion";


const Commands = (char: string) => {
    return Extension.create({
        name: 'commands',

        addOptions() {
            return {
                suggestion: {
                    char: char || "/",
                    command: ({editor, range, props}: { editor: Editor, range: Range, props: SuggestionProps }) => {
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
}

export default Commands;
