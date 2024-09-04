
import { mergeAttributes, Node, nodeInputRule } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import MindNode from '../nodes/MindNode';
import { getDatasetAttribute, nodeAttrsToDataset } from '../utils/tools';

const DEFAULT_MIND_DATA = {
    "layout": "logicalStructure",
    "root": {
        "data": {
            "text": "中心节点",
            "expand": true,
            "isActive": false,
            "uid": "39758818-5504-4692-940a-22c3f03be264"
        },
        "children": []
    },
    "theme": {
        "template": "default",
        "config": {}
    },
    "view": {
        "transform": {
            "scaleX": 1,
            "scaleY": 1,
            "shear": 0,
            "rotate": 0,
            "translateX": 0,
            "translateY": 0,
            "originX": 0,
            "originY": 0,
            "a": 1,
            "b": 0,
            "c": 0,
            "d": 1,
            "e": 0,
            "f": 0
        },
        "state": {
            "scale": 1,
            "x": 0,
            "y": 0,
            "sx": 0,
            "sy": 0
        }
    }
}

export interface IMindAttrs {
    defaultShowPicker?: boolean;
    width?: number | string;
    height?: number;
    data?: Record<string, unknown>;
    template?: string;
    theme?: string;
    zoom?: number;
}

interface IMindOptions {
    HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mind: {
            setMind: (attrs?: IMindAttrs) => ReturnType;
            setMindBlockAlign: (align: 'left' | 'center' | 'right') => ReturnType
            setMindBlockWidth: (width: number) => ReturnType
        };
    }
}

const Mind = Node.create<IMindOptions>({
    name: 'mind',
    group: 'block',
    selectable: true,
    atom: true,
    draggable: true,
    inline: false,

    addAttributes() {
        return {
            defaultShowPicker: {
                default: false,
            },
            width: {
                default: '100%',
                parseHTML: getDatasetAttribute('width'),
            },
            height: {
                default: 240,
                parseHTML: getDatasetAttribute('height'),
            },
            data: {
                default: DEFAULT_MIND_DATA,
                parseHTML: getDatasetAttribute('data', true),
            },
            align: {
                default: 'center',
                parseHTML: element => element.getAttribute('data-align'),
                renderHTML: attributes => ({
                    'data-align': attributes.align,
                }),
            },
        };
    },

    addOptions() {
        return {
            HTMLAttributes: {
                class: 'mind',
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: 'div[class=mind]',
            },
        ];
    },

    renderHTML({ HTMLAttributes, node }) {
        return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, nodeAttrsToDataset(node))];
    },

    addCommands() {
        return {
            setMind:
                (options) =>
                    ({ tr, commands, chain, editor }) => {
                        options = options || {};
                        options.data = options.data || DEFAULT_MIND_DATA;

                        // @ts-ignore
                        if (tr.selection?.node?.type?.name == this.name) {
                            return commands.updateAttributes(this.name, options);
                        }

                        const { selection } = editor.state;

                        return chain()
                            .insertContent({
                                type: this.name,
                                attrs: options,
                            })
                            .run();
                    },
            setMindBlockAlign:
                align =>
                    ({ commands }) =>
                        commands.updateAttributes('mind', { align }),
            setMindBlockWidth:
                width =>
                    ({ commands }) =>
                        commands.updateAttributes('mind', { width: `${Math.max(0, Math.min(100, width))}%` }),
        };
    },

    addNodeView() {
        return ReactNodeViewRenderer(MindNode);
    },

    addInputRules() {
        return [
            nodeInputRule({
                find: /^\$mind\$$/,
                type: this.type,
                getAttributes: () => {
                    return { width: '100%', defaultShowPicker: true };
                },
            }),
        ];
    },
});

export default Mind;
