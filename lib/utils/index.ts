import {EditorState} from "prosemirror-state";
import {Node, Fragment, Slice} from "prosemirror-model";
import {Editor} from '@tiptap/core';
import {
    // @ts-ignore
    __serializeForClipboard
} from "prosemirror-view";
import copy from "./copy-to-clipboard.ts"

function escapeRegExp(str: string) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

export const safeJSONParse = (str: string, defaultValue = {}) => {
    if (typeof str === 'object') return str;

    try {
        return JSON.parse(str);
    } catch (e) {
        return defaultValue;
    }
};

export const safeJSONStringify = (obj: any, defaultValue = '{}') => {
    try {
        return JSON.stringify(obj);
    } catch (e) {
        return defaultValue;
    }
};

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

export const copyNode = (editor: Editor, extensionName: string) => {
    let targetNode: Node | null = null;

    const {state} = editor;
    const $pos = state.selection.$anchor;
    // @ts-ignore
    const currentNode = state.selection.node;


    if (currentNode && currentNode.type.name === extensionName) {
        targetNode = currentNode;
    } else {
        if ($pos.depth) {
            for (let d = $pos.depth; d > 0; d--) {
                const node = $pos.node(d);
                if (node.type.name === extensionName) {
                    targetNode = node;
                }
            }
        }
    }

    if (targetNode) {
        const slice = new Slice(Fragment.fromArray([targetNode]), 0, 0);
        const {dom, text} = __serializeForClipboard(editor.view, slice);

        const data = [{format: "text/html", text: dom.innerHTML}];

        data.push({text: safeJSONStringify(targetNode.toJSON()), format: 'text/node'})

        if (text) {
            data.push({format: "text/plain", text});
        }

        copy(data)
    }
};

export const deleteNode = (editor: Editor, extensionName: string) => {
    const {state} = editor;
    const $pos = state.selection.$anchor;
    let done = false;

    if ($pos.depth) {
        for (let d = $pos.depth; d > 0; d--) {
            const node = $pos.node(d);
            if (node.type.name === extensionName) {
                // @ts-ignore
                if (editor.dispatchTransaction)
                    // @ts-ignore
                    editor.dispatchTransaction(
                        state.tr.delete($pos.before(d), $pos.after(d)).scrollIntoView()
                    );
                done = true;
            }
        }
    } else {
        // @ts-ignore
        const node = state.selection.node;
        if (node && node.type.name === extensionName) {
            editor
                .chain()
                .deleteSelection()
                .run();
            done = true;
        }
    }

    if (!done) {
        const pos = $pos.pos;

        if (pos) {
            const node = state.tr.doc.nodeAt(pos);

            if (node && node.type.name === extensionName) {
                // @ts-ignore
                if (editor.dispatchTransaction)
                    // @ts-ignore
                    editor.dispatchTransaction(state.tr.delete(pos, pos + node.nodeSize));
                done = true;
            }
        }
    }

    return done;
};


