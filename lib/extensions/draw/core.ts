import {isNodeEmpty, mergeAttributes, Node, nodeInputRule} from "@tiptap/core";
import {NodeSelection} from "prosemirror-state";
import {ReactNodeViewRenderer} from "@tiptap/react";
import DrawView from "./view.tsx";

export const DEFAULT_DRAW_DATA = JSON.stringify({elements: []});

export interface IExcalidrawAttrs {
    showPickerOnCreate?: boolean;
    width?: number | string;
    height?: number;
    data?: string;
}

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        MokiDraw: {
            insertDraw: (attrs?: IExcalidrawAttrs) => ReturnType;
        };
    }
}


export const Draw = Node.create({
    name: "MokiDraw",
    group: "block",
    selectable: true,
    atom: true,
    draggable: true,
    inline: false,


    addAttributes() {
        return {
            showPickerOnCreate: {
                default: false
            },
            width: {
                default: "100%"
            },
            height: {
                default: 240
            },
            data: {
                default: DEFAULT_DRAW_DATA
            }
        };
    },

    addOptions() {
        return {
            HTMLAttributes: {
                class: "moki-draw"
            }
        };
    },

    parseHTML() {
        return [
            {
                tag: "div[class=moki-draw]"
            }
        ];
    },

    renderHTML({HTMLAttributes}) {
        return [
            "div",
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
        ];
    },

    addCommands() {
        return {
            insertDraw: (attrs: any) => ({tr, commands, chain, state}: any) => {
                attrs = attrs || {};
                attrs.data = attrs.data || DEFAULT_DRAW_DATA;

                attrs = attrs || {};

                // @ts-ignore
                if (tr.selection?.node?.type?.name == this.name) {
                    return commands.updateAttributes(this.name, attrs);
                }

                const {selection} = state;
                const currentNode = selection.$head.node(selection.$head.depth);
                const isEmpty = currentNode ? isNodeEmpty(currentNode) : true;
                const insertPos = !isEmpty
                    ? state.tr.selection.from + 1
                    : state.tr.selection.from - 1;

                return chain()
                    .command(({tr, dispatch, state}: any) => {
                        if (dispatch) {
                            tr.insert(
                                insertPos,
                                state.schema.nodes[this.name].create(attrs)
                            ).setSelection(NodeSelection.create(tr.doc, insertPos));

                            dispatch(tr);
                        }

                        return true;
                    })
                    .run();
            }
        }
    },

    addNodeView() {
        return ReactNodeViewRenderer(DrawView);
    },

    addInputRules() {
        return [
            nodeInputRule({
                find: /^\$excalidraw\$$/,
                type: this.type,
                getAttributes: () => {
                    return {width: "100%"};
                }
            })
        ];
    }
});

