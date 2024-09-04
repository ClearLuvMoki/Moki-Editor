import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { NodeSelection } from "@tiptap/pm/state";
import { Node as PMNode } from "@tiptap/pm/model";
import ExcalidrawNode from "../nodes/ExcalidrawNode";

export const DEFAULT_EXCALIDRAW_DATA = JSON.stringify({ elements: [] });

export interface IExcalidrawAttrs {
  showPickerOnCreate?: boolean;
  width?: number | string;
  height?: number;
  data?: string;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    excalidraw: {
      insertExcalidraw: (attrs?: IExcalidrawAttrs) => ReturnType;
      setExcalidrawBlockAlign: (align: 'left' | 'center' | 'right') => ReturnType
      setExcalidrawBlockWidth: (width: number) => ReturnType
    };
  }
}

const isNodeEmpty = (node: PMNode) => {
  if (node.isAtom && !node.isTextblock) return false;

  return node.type.name === "paragraph" && node.nodeSize === 2;
};


const Excalidraw = Node.create({
  name: "excalidraw",
  group: "block",
  // selectable: true,
  // atom: true,
  // draggable: true,
  // inline: true,
  defining: true,
  isolating: true,

  addAttributes() {
    return {
      showPickerOnCreate: {
        default: false
      },
      width: {
        default: '100%',
        parseHTML: element => element.getAttribute('data-width'),
        renderHTML: attributes => ({
          'data-width': attributes.width,
        }),
      },
      height: {
        default: 240
      },
      data: {
        default: DEFAULT_EXCALIDRAW_DATA
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
        class: "excalidraw"
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[class=excalidraw]"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ];
  },

  addCommands() {
    return {
      insertExcalidraw: attrs => ({ tr, commands, chain, state }) => {
        attrs = attrs || {};
        attrs.data = attrs.data || DEFAULT_EXCALIDRAW_DATA;

        attrs = attrs || {};

        // @ts-ignore
        if (tr.selection?.node?.type?.name == this.name) {
          return commands.updateAttributes(this.name, attrs);
        }

        const { selection } = state;
        const currentNode = selection.$head.node(selection.$head.depth);
        const isEmpty = currentNode ? isNodeEmpty(currentNode) : true;
        const insertPos = !isEmpty
          ? state.tr.selection.from + 1
          : state.tr.selection.from - 1;

        return chain()
          .command(({ tr, dispatch, state }) => {
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
      },
      setExcalidrawBlockAlign:
        align =>
          ({ commands }) =>
            commands.updateAttributes('excalidraw', { align }),

      setExcalidrawBlockWidth:
        width =>
          ({ commands }) =>
            commands.updateAttributes('excalidraw', { width: `${Math.max(0, Math.min(100, width))}%` }),
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(ExcalidrawNode);
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /^\$excalidraw\$$/,
        type: this.type,
        getAttributes: () => {
          return { width: "100%" };
        }
      })
    ];
  }
});

export default Excalidraw;
