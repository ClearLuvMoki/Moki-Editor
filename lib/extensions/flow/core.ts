import {isNodeEmpty, mergeAttributes, Node, nodeInputRule} from "@tiptap/core";
import {NodeSelection} from "prosemirror-state";
import {ReactNodeViewRenderer} from "@tiptap/react";
import FlowView from "./view.tsx";


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        MokiFlow: {
            insertFlow: (attrs?: any) => ReturnType;
        };
    }
}

export const Flow = Node.create({
    name: "MokiFlow",
    group: "block",
    selectable: true,
    atom: true,
    draggable: true,
    inline: false,
    priority: 300,

    addAttributes() {
        return {
            width: {
                default: "100%"
            },
            height: {
                default: 240
            },
            data: {
                default: []
            }
        };
    },

    addOptions() {
        return {
            HTMLAttributes: {
                class: "moki-flow"
            }
        };
    },

    parseHTML() {
        return [
            {
                tag: "div[class=moki-flow]"
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
            insertFlow: (attrs: any) => ({tr, commands, chain, state}: any) => {
                attrs = attrs || {};
                attrs.data = attrs.data || [];

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
        return ReactNodeViewRenderer(FlowView);
    },

    addInputRules() {
        return [
            nodeInputRule({
                find: /^\$mokidraw\$$/,
                type: this.type,
                getAttributes: () => {
                    return {width: "100%"};
                }
            })
        ];
    }

})
