import BuiltInCodeBlock, { CodeBlockOptions } from '@tiptap/extension-code-block';
import {ReactNodeViewRenderer} from "@tiptap/react";
import {LowlightPlugin} from "@/plugin/lowlight";
import { createLowlight, all } from "lowlight"
import CodeBlockNode from "@/nodes/CodeBlockNode";
import {findParentNode} from "@tiptap/core";

const lowlight = createLowlight(all);

interface CodeBlockLowlightOptions extends CodeBlockOptions {
    lowlight: any;
    defaultLanguage: string | null | undefined;
    maxHighlightLineNumber?: number;
}

export const CodeBlock = BuiltInCodeBlock.extend<CodeBlockLowlightOptions>({
    name: 'codeBlock',
    draggable: true,

    addOptions() {
        return {
            ...this.parent?.(),
            lowlight: {},
            defaultLanguage: null,
            maxHighlightLineNumber: 200,
        };
    },

    addNodeView() {
        return ReactNodeViewRenderer(CodeBlockNode);
    },

    addKeyboardShortcuts() {
        return {
            ...this?.parent?.(),
            Enter: ({ editor }) => {
                const predicate = (node: any) =>
                    node.type === editor.view.state.schema.nodes.codeBlock;
                const node = findParentNode(predicate)(editor.state.selection);

                if (!node) return false;

                const { $from } = editor.state.selection;

                const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
                const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");

                if (isAtEnd && endsWithDoubleNewline) {
                    return editor
                        .chain()
                        .command(({ tr }) => {
                            tr.delete($from.pos - 2, $from.pos);

                            return true;
                        })
                        .exitCode()
                        .run();
                }

                return editor.commands.newlineInCode();
            }
        };
    },

    addProseMirrorPlugins() {
        return [
            ...(this.parent?.() || []),
            LowlightPlugin({
                name: this.name,
                lowlight: this.options.lowlight,
                defaultLanguage: this.options.defaultLanguage,
                maxHighlightLineNumber: this.options.maxHighlightLineNumber || 200,
            }),
        ];
    },
}).configure({
    lowlight,
    defaultLanguage: 'auto',
});