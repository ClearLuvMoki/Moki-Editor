import BuiltInCodeBlock, {
    CodeBlockOptions
} from "@tiptap/extension-code-block";
import {ReactNodeViewRenderer} from "@tiptap/react";
import {BlockCodeView} from "./view.tsx";
import {LowlightPlugin} from "./lowlight-plugin.ts";


interface CodeBlockLowlightOptions extends CodeBlockOptions {
    lowlight: any;
    defaultLanguage: string | null | undefined;
    maxTextLength?: number
}


export const BlockCode = BuiltInCodeBlock.extend<CodeBlockLowlightOptions>({


    addOptions() {
        return {
            ...this.parent?.(),
            lowlight: {},
            defaultLanguage: null,
            maxTextLength: 10000
        };
    },

    addProseMirrorPlugins() {
        return [
            ...(this.parent?.() || []),
            LowlightPlugin({
                name: this.name,
                lowlight: this.options.lowlight,
                defaultLanguage: this.options.defaultLanguage,
                maxTextLength: this.options.maxTextLength || 10000,
            })
        ];
    },


    addNodeView() {
        return ReactNodeViewRenderer(BlockCodeView);
    },
})