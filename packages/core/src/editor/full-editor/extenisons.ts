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
    Blockquote
} from "../../extensions"

export const FullExtensions = [
    Document,
    Paragraph,
    Text,
    Placeholder.configure({
        includeChildren: false,
        showOnlyCurrent: false,
        placeholder: () => 'Write some for self...',
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
    Blockquote
]