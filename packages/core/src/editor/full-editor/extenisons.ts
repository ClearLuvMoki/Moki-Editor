import {
    Document,
    Paragraph,
    Text,
    Placeholder,
    Bold,
    Italic,
    Underline,
    Strike,
    Subscript,
    Superscript,
    ListItem,
    OrderedList,
    BulletList,
    Code,
    CodeBlock,
    Blockquote,
    History,
    Heading,
    Highlight,
    TextStyle,
    Color,
    FontFamily,
    ImageBlock,
    ImageUpload,
    Focus,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    Gapcursor,
    Column,
    Columns,
    HorizontalRule,
    Excalidraw,
    HardBreak,
    createSlash
} from "../../extensions"
import {Commands} from "./commands";



export const FullExtensions = [
    Document,
    Paragraph,
    Text,
    Blockquote,
    Placeholder.configure({
        includeChildren: false,
        showOnlyCurrent: false,
        placeholder: ({node}) => {
            if (["codeBlock"].includes(node.type.name)) {
                return ""
            }
            return 'Write some for self...'
        },
    }),
    Bold,
    Italic,
    Underline,
    Strike,
    Subscript,
    Superscript,
    Code,
    CodeBlock,
    History,
    Heading.configure({
        levels: [1, 2, 3, 4, 5],
    }),
    Highlight.configure({multicolor: true}),
    TextStyle,
    Color,
    FontFamily,
    createSlash('slash-/', {
        char: '/',
        pluginKey: "slash-/",
        items: Commands
    }),
    ImageBlock,
    ImageUpload,
    Focus.configure({
        className: 'has-focus',
        mode: 'all',
    }),
    Table,
    TableHeader,
    TableRow,
    TableCell,
    Gapcursor,
    ListItem.configure({

    }),
    OrderedList.configure({
        HTMLAttributes: {
            class: 'moki-editor-order-list',
        }
    }),
    BulletList.configure({
        HTMLAttributes: {
            class: 'moki-editor-bullet-list',
        }
    }),
    Column,
    Columns,
    HorizontalRule,
    Excalidraw,
    HardBreak
]