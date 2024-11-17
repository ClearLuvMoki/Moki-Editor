import {all, createLowlight} from 'lowlight'
import _CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import CodeBlockNode from "./block-node"
import {ReactNodeViewRenderer } from "@moki-editor/editor"

interface Props {
    HTMLAttributes?: Record<string, any>;
    languageClassPrefix?: string;
    defaultLanguage?: string;
}


const CodeBlockLowlight = (props?: Props) => {
    const lowlight = createLowlight(all)
    return _CodeBlockLowlight
        .extend({
            addNodeView() {
                return ReactNodeViewRenderer(CodeBlockNode)
            },
        })
        .configure({
            lowlight,
            HTMLAttributes: {
                class: 'moki-editor-code-block',
                ...(props?.HTMLAttributes)
            },
            languageClassPrefix: props?.languageClassPrefix || "language-",
            defaultLanguage: props?.defaultLanguage || "plaintext",
        })
}

export {
    CodeBlockLowlight
}
