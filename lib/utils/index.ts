import {EditorState} from "prosemirror-state";
import {Node} from "prosemirror-model";

function escapeRegExp(str: string) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

export function svgToDataURI(svg: string) {
    if (!svg) return "";

    let encoded = svg.replace(/\s+/g, " ");
    encoded = replaceAll(encoded, "%", "%25");
    encoded = replaceAll(encoded, "> <", "><");
    encoded = replaceAll(encoded, "; }", ";}");
    encoded = replaceAll(encoded, "<", "%3c");
    encoded = replaceAll(encoded, ">", "%3e");
    encoded = replaceAll(encoded, '"', "'");
    encoded = replaceAll(encoded, "#", "%23");
    encoded = replaceAll(encoded, "{", "%7b");
    encoded = replaceAll(encoded, "}", "%7d");
    encoded = replaceAll(encoded, "|", "%7c");
    encoded = replaceAll(encoded, "^", "%5e");
    encoded = replaceAll(encoded, "`", "%60");
    encoded = replaceAll(encoded, "@", "%40");

    const uri = `data:image/svg+xml;charset=UTF-8,${encoded}`;

    return uri;
}


export const findNodeByBlockId = (
    state: EditorState,
    nodeType: string,
    blockId: string
): { node: Node; pos: number } | null => {
    let target: Node | null = null;
    let pos = -1;

    state.doc.nodesBetween(0, state.doc.content.size, (node, p) => {
        if (node.type.name === nodeType) {
            if (node.attrs.blockId === blockId) {
                target = node;
                pos = p;
                return true;
            }

            return false;
        } else {
            return false;
        }
    });

    return target ? {node: target, pos} : null;
};

export function throttle(fn: any, wait: number) {
    let inThrottle = false
    return (...args: any) => {
        // @ts-ignore
        const context = this
        if (!inThrottle) {
            inThrottle = true
            fn.apply(context, args)
            setTimeout(() => {
                inThrottle = false
            }, wait)
        }
    }
}

