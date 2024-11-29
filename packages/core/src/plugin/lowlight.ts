import {Plugin, PluginKey} from '@tiptap/pm/state';
import {findChildren, isFunction} from "@tiptap/core";
import {Node as ProsemirrorNode} from '@tiptap/pm/model';
import {Decoration, DecorationSet} from '@tiptap/pm/view';

function getHighlightNodes(result: any) {
    return result.value || result.children || [];
}

function parseNodes(nodes: any[], className: string[] = []): { text: string; classes: string[] }[] {
    return nodes
        .map((node) => {
            const classes = [...className, ...(node.properties ? node.properties.className : [])];

            if (node.children) {
                return parseNodes(node.children, classes);
            }

            return {
                text: node.value,
                classes,
            };
        })
        .flat();
}

function getDecorations(
    {
        doc,
        name,
        lowlight,
        defaultLanguage,
        maxHighlightLineNumber,
    }: {
        doc: ProsemirrorNode;
        name: string;
        lowlight: any;
        defaultLanguage: string | null | undefined;
        maxHighlightLineNumber: number;
    }) {
    const decorations: Decoration[] = [];

    findChildren(doc, (node) => node.type.name === name)
        .filter((block) => {
            return block.node.textContent.split('\n').length <= maxHighlightLineNumber;
        })
        .forEach((block) => {
            let from = block.pos + 1;
            const language = block.node.attrs.language || defaultLanguage;
            const languages = lowlight.listLanguages();
            const nodes =
                language && languages.includes(language)
                    ? getHighlightNodes(lowlight.highlight(language, block.node.textContent))
                    : getHighlightNodes(lowlight.highlightAuto(block.node.textContent));

            parseNodes(nodes).forEach((node) => {
                const to = from + node.text.length;

                if (node.classes.length) {
                    const decoration = Decoration.inline(from, to, {
                        class: node.classes.join(' '),
                    });

                    decorations.push(decoration);
                }

                from = to;
            });
        });

    return DecorationSet.create(doc, decorations);
}

export function LowlightPlugin(
    {
        name,
        lowlight,
        defaultLanguage,
        maxHighlightLineNumber,
    }: {
        name: string;
        lowlight: any;
        defaultLanguage: string | null | undefined;
        maxHighlightLineNumber: number;
    }) {
    if (!['highlight', 'highlightAuto', 'listLanguages'].every((api) => isFunction(lowlight[api]))) {
        throw Error('You should provide an instance of lowlight to use the code-block-lowlight extension');
    }

    const lowlightPlugin: Plugin<any> = new Plugin({
        key: new PluginKey('lowlight'),

        state: {
            init: (_, {doc}) =>
                getDecorations({
                    doc,
                    name,
                    lowlight,
                    defaultLanguage,
                    maxHighlightLineNumber,
                }),
            apply: (transaction, decorationSet, oldState, newState) => {
                const oldNodeName = oldState.selection.$head.parent.type.name;
                const newNodeName = newState.selection.$head.parent.type.name;
                const oldNodes = findChildren(oldState.doc, (node) => node.type.name === name);
                const newNodes = findChildren(newState.doc, (node) => node.type.name === name);

                if (
                    transaction.docChanged &&
                    // Apply decorations if:
                    // selection includes named node,
                    ([oldNodeName, newNodeName].includes(name) ||
                        // OR transaction adds/removes named node,
                        newNodes.length !== oldNodes.length ||
                        // OR transaction has changes that completely encapsulte a node
                        // (for example, a transaction that affects the entire document).
                        // Such transactions can happen during collab syncing via y-prosemirror, for example.
                        transaction.steps.some((step: any) => {
                            // @ts-ignore
                            return (
                                step.from !== undefined &&
                                // @ts-ignore
                                step.to !== undefined &&
                                oldNodes.some((node) => {
                                    // @ts-ignore
                                    return (
                                        node.pos >= step.from &&
                                        // @ts-ignore
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
                        maxHighlightLineNumber,
                    });
                }

                return decorationSet.map(transaction.mapping, transaction.doc);
            },
        },

        props: {
            decorations(state) {
                return lowlightPlugin.getState(state);
            },
        },
    });

    return lowlightPlugin;
}