// @ts-nocheck
import {AnyExtension} from "@tiptap/core";
import {lowlight} from 'lowlight/lib/core'

import {Focus} from "../../../extensions/focus";
import {Paragraph} from "../../../extensions/paragraph";
import {Text} from "../../../extensions/text";
import {HardBreak} from "../../../extensions/hard-break";
import {Document, Heading} from "../../../extensions";

import {
    Bold,
    Italic,
    Underline,
    Strike,
    Blockquote,
    InlineCode,
    Subscript,
    Superscript,
    TextAlign,
    BulletList,
    ListItem,
    OrderedList,
    Placeholder,
    Table,
    TableHeader,
    TableRow,
    TableCell,
    TaskList,
    TaskItem,
    TextStyle,
    FontFamily,
    Highlight,
    TextColor,
    Gapcursor,
    BlockCode,
    History,
    createSlashExtension,
    Draw,
} from "../../../extensions"
import {SlashCommands} from "./slash-commands.tsx";

export interface EditorKit {
    extensions?: Array<AnyExtension | AnyExtension[]>;
    isToolBar?: boolean
}

const placeholders = [
    '输入 / 唤起更多',
    // '使用 markdown 语法进行输入',
];

export const resolveEditorKit = (props: EditorKit) => {
    const {extensions, isToolBar} = props;

    const BaseExtensions = [
        Bold,
        Italic,
        Underline,
        Strike,
        Blockquote,
        InlineCode,
        Subscript,
        Superscript,
        TextAlign,
        BulletList,
        ListItem,
        OrderedList,
        Placeholder.configure({
            showOnlyCurrent: false,
            placeholder: () => {
                return placeholders[~~(Math.random() * placeholders.length)];
            },
            includeChildren: true
        }),
        Table,
        TableHeader,
        TableRow,
        TableCell,
        TaskList,
        TaskItem.configure({
            nested: true,
        }),
        FontFamily,
        Highlight.configure({
            multicolor: true,
        }),
        TextColor,
        BlockCode.configure({
            lowlight,
        }),
        History,
        createSlashExtension({
            char: "/",
            items: SlashCommands
        }),
        Draw
    ]

    return [
        Document,
        Heading,
        Paragraph,
        Text,
        HardBreak,
        Focus,
        TextStyle,
        Gapcursor,
        ...(extensions || [])?.flat()
    ].concat(isToolBar ? BaseExtensions : []);
};
