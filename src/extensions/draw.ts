import {mergeAttributes, Node, ReactNodeViewRenderer} from '@tiptap/react'
import DrawNode from "../Node/DrawNode";


export default Node.create({
    name: 'draw',

    group: 'block',

    atom: true,

    addAttributes() {
        return {
            lines: {
                default: [],
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'div[data-type="paper"]',
            },
        ]
    },

    renderHTML({HTMLAttributes}) {
        return ['div', mergeAttributes(DrawNode, {'data-type': 'paper'})]
    },

    addNodeView() {
        return ReactNodeViewRenderer(DrawNode)
    },
})
