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
    FontFamily
} from "../../extensions"

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
    // OrderedList,
    // BulletList,
    Code,
    CodeBlock,
    History,
    Heading.configure({
        levels: [1, 2, 3, 4, 5],
    }),
    Highlight.configure({ multicolor: true }),
    TextStyle,
    Color,
    FontFamily
]