import { Editor } from "@tiptap/react";
import { EditorState, } from "@tiptap/pm/state"
import { Node as PMNode } from "@tiptap/pm/model"

export const jsonToStr = (json: Record<string, unknown>) => {
    try {
        return JSON.stringify(json);
    } catch (e) {
        return JSON.stringify({});
    }
};


export const isDarkColor = (hexColor: string) => {
    if (!hexColor) return false;
    if (hexColor.startsWith('#')) {
        hexColor = hexColor.slice(1);
    }

    if (hexColor.length === 3) {
        hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
    }

    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 125;
}

export const getRenderContainer = (editor: Editor, nodeType: string) => {
    const {
        view,
        state: {
            selection: { from },
        },
    } = editor

    const elements = document.querySelectorAll('.has-focus')
    const elementCount = elements.length
    const innermostNode = elements[elementCount - 1]
    const element = innermostNode

    if (
        (element && element.getAttribute('data-type') && element.getAttribute('data-type') === nodeType) ||
        (element && element.classList && element.classList.contains(nodeType))
    ) {
        return element
    }

    const node = view.domAtPos(from).node as HTMLElement
    let container: HTMLElement | null = node

    if (!container.tagName) {
        container = node.parentElement
    }

    while (
        container &&
        !(container.getAttribute('data-type') && container.getAttribute('data-type') === nodeType) &&
        !container.classList.contains(nodeType)
    ) {
        container = container.parentElement
    }

    return container
}

const escapeRegExp = (str: string) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

const replaceAll = (str: string, find: string, replace: string) => {
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}


export const svgToDataURI = (svg: string) => {
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
): { node: PMNode; pos: number } | null => {
    let target: PMNode | null = null;
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

    return target ? { node: target, pos } : null;
};

export const nodeAttrsToDataset = (node: PMNode) => {
    const { attrs } = node;

    return Object.keys(attrs).reduce((accu, key) => {
        const value = attrs[key];

        if (value == null) {
            return accu;
        }

        let encodeValue = '';

        if (typeof value === 'object') {
            encodeValue = jsonToStr(value);
        } else {
            encodeValue = value;
        }

        accu[key] = encodeValue;

        return accu;
    }, Object.create(null));
};

export const getDatasetAttribute =
    (attribute: string, transformToJSON = false) =>
        (element: HTMLElement) => {
            const dataKey = attribute.startsWith('data-') ? attribute : `data-${attribute}`;
            let value = decodeURIComponent(element.getAttribute(dataKey) as any);

            if (value == null || (typeof value === 'string' && value === 'null')) {
                try {
                    const html = element.outerHTML;
                    // eslint-disable-next-line no-useless-escape
                    const texts = html.match(/(.|\s)+?\="(.|\s)+?"/gi);
                    if (texts && texts.length) {
                        const params = texts
                            .map((str) => str.trim())
                            .reduce((accu: any, item) => {
                                const i = item.indexOf('=');
                                const arr = [item.slice(0, i), item.slice(i + 1).slice(1, -1)];
                                accu[arr[0]] = arr[1];
                                return accu;
                            }, {});

                        value = (params[attribute.toLowerCase()] || '').replaceAll('&quot;', '"');
                    }
                } catch (e: any) {
                    console.error('解析 element 失败！', e.message, element);
                }
            }

            if (transformToJSON) {
                try {
                    return JSON.parse(value);
                } catch (e) {
                    return {};
                }
            }

            if (value.includes('%') || value.includes('auto')) {
                return value;
            }

            const toNumber = parseInt(value);
            return toNumber !== toNumber ? value : toNumber; // 避免 NaN
        };