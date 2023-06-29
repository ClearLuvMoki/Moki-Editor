import {findChildren} from "@tiptap/core";
import {Node as ProsemirrorNode} from "prosemirror-model";
import {Plugin, PluginKey} from "prosemirror-state";
import {Decoration, DecorationSet} from "prosemirror-view";

function parseNodes(
    nodes: any[],
    className: string[] = []
): { text: string; classes: string[] }[] {
    return nodes
        .map(node => {
            const classes = [
                ...className,
                ...(node.properties ? node.properties.className : [])
            ];

            if (node.children) {
                return parseNodes(node.children, classes);
            }

            return {
                text: node.value,
                classes
            };
        })
        .flat();
}

function getHighlightNodes(result: any) {
    // `.value` for lowlight v1, `.children` for lowlight v2
    return result.value || result.children || [];
}

function getDecorations(
    {
        doc,
        name,
        lowlight,
        defaultLanguage,
        maxTextLength
    }: {
        doc: ProsemirrorNode;
        name: string;
        lowlight: any;
        defaultLanguage: string | null | undefined;
        maxTextLength: number,
    }) {
    const decorations: Decoration[] = [];

    findChildren(doc, node => node.type.name === name).forEach(block => {
        if (block.node.nodeSize <= maxTextLength) {
            let from = block.pos + 1;
            const language = block.node.attrs.language || defaultLanguage;
            const languages = lowlight.listLanguages();
            const nodes =
                language && languages.includes(language)
                    ? getHighlightNodes(
                        lowlight.highlight(language, block.node.textContent)
                    )
                    : getHighlightNodes(lowlight.highlightAuto(block.node.textContent));

            parseNodes(nodes).forEach(node => {
                const to = from + node.text.length;

                if (node.classes.length) {
                    const decoration = Decoration.inline(from, to, {
                        class: node.classes.join(" ")
                    });

                    decorations.push(decoration);
                }

                from = to;
            });
        }
    });

    return DecorationSet.create(doc, decorations);
}

function isFunction(param: any) {
    return typeof param === "function";
}

export function LowlightPlugin(
    {
        name,
        lowlight,
        defaultLanguage,
        maxTextLength
    }: {
        name: string;
        lowlight: any;
        defaultLanguage: string | null | undefined;
        maxTextLength: number
    }) {
    if (
        !["highlight", "highlightAuto", "listLanguages"].every(api =>
            isFunction(lowlight[api])
        )
    ) {
        throw Error(
            "You should provide an instance of lowlight to use the code-block-lowlight extension"
        );
    }

    const lowlightPlugin: Plugin<any> = new Plugin({
        key: new PluginKey("lowlight"),

        state: {
            init: (_, {doc}) =>
                getDecorations({
                    doc,
                    name,
                    lowlight,
                    defaultLanguage,
                    maxTextLength
                }),
            apply: (transaction, decorationSet, oldState, newState) => {
                const oldNodeName = oldState.selection.$head.parent.type.name;
                const newNodeName = newState.selection.$head.parent.type.name;
                const oldNodes = findChildren(
                    oldState.doc,
                    node => node.type.name === name
                );
                const newNodes = findChildren(
                    newState.doc,
                    node => node.type.name === name
                );

                if (
                    transaction.docChanged &&
                    ([oldNodeName, newNodeName].includes(name) ||
                        newNodes.length !== oldNodes.length ||
                        transaction.steps.some((step: any) => {
                            return (
                                step.from !== undefined &&
                                step.to !== undefined &&
                                oldNodes.some(node => {
                                    return (
                                        node.pos >= step.from &&
                                        node.pos + node.node.nodeSize <= step.to
                                    );
                                })
                            );
                        }))
                ) {
                    return getDecorations({
                        doc: transaction.doc,
                        name,
                        lowlight,
                        defaultLanguage,
                        maxTextLength
                    });
                }

                return decorationSet.map(transaction.mapping, transaction.doc);
            }
        },

        props: {
            decorations(state) {
                return lowlightPlugin.getState(state);
            }
        }
    });

    return lowlightPlugin;
}
