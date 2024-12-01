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
    FontFamily,
    createSlash
} from "../../extensions"
import {SlashMenuItem} from "../../extensions/slash";
import {Heading1, Heading2, Heading3, Heading4, Braces} from "lucide-react";

const Commands: SlashMenuItem[] = [
    {
        divider: true,
        title: "标题"
    },
    {
        icon: <Heading1/>,
        text: "标题一",
        slash: "/h1",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleHeading({level: 1})
                .run()
    },
    {
        icon: <Heading2/>,
        text: "标题二",
        slash: "/h2",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleHeading({level: 2})
                .run()
    },

    {
        icon: <Heading3/>,
        text: "标题三",
        slash: "/h3",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleHeading({level: 3})
                .run()
    },

    {
        icon: <Heading4/>,
        text: "标题四",
        slash: "/h4",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleHeading({level: 4})
                .run()
    },
    {
        divider: true,
        title: "插入"
    },
    {
        icon: <Braces />,
        text: "代码块",
        slash: "/codeBlock",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleCodeBlock()
                .run()
    },

]

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
    Highlight.configure({multicolor: true}),
    TextStyle,
    Color,
    FontFamily,
    createSlash('slash-/', {
        char: '/',
        pluginKey: "slash-/",
        items: Commands
    }),
]