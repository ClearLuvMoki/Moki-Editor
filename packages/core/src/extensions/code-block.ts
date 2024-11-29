import BuiltInCodeBlock, { CodeBlockOptions } from '@tiptap/extension-code-block';
import {ReactNodeViewRenderer} from "@tiptap/react";
import {LowlightPlugin} from "../plugin/lowlight";
import { createLowlight, all } from "lowlight"
import CodeBlockNode from "../nodes/CodeBlockNode";

const lowlight = createLowlight(all);

interface CodeBlockLowlightOptions extends CodeBlockOptions {
    lowlight: any;
    defaultLanguage: string | null | undefined;
    maxHighlightLineNumber?: number;
}

export const CodeBlock = BuiltInCodeBlock.extend<CodeBlockLowlightOptions>({
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