import {CodeBlockLowlight as _Code} from '@tiptap/extension-code-block-lowlight'
import {ReactNodeViewRenderer} from "@tiptap/react";
import {createLowlight, all} from 'lowlight'
import CodeBlockNode from "../nodes/CodeBlockNode";

const lowlight = createLowlight(all);


const CodeBlockLowlight = _Code
    .extend({
        addNodeView() {
            return ReactNodeViewRenderer(CodeBlockNode)
        },
    })
    .configure({
        lowlight,
        defaultLanguage: 'plaintext',
    });

export default CodeBlockLowlight;
