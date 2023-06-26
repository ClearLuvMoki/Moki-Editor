import {AnyExtension} from "@tiptap/core";

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
} from "../../../extensions"

export interface EditorKit {
    extensions?: Array<AnyExtension | AnyExtension[]>;
    isToolBar?: boolean
}

export const resolveEditorKit = (props: EditorKit) => {
    const {extensions = [], isToolBar} = props;

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
    ]

    return [
        Document,
        Heading,
        Paragraph,
        Text,
        HardBreak,
        Focus,
        ...(extensions || [])?.flat()
    ].concat(isToolBar ? BaseExtensions : []);
};
