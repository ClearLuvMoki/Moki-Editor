import type {Node} from "@tiptap/pm/model"


export const isNodeEmpty = (node: Node) => {
    if (node.isAtom && !node.isTextblock) return false;

    return node.type.name === "paragraph" && node.nodeSize === 2;
};