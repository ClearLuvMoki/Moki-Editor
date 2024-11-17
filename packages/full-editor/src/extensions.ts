import {Document} from "@moki-editor/document";
import {Text} from "@moki-editor/text";
import {Paragraph} from "@moki-editor/paragraph";
import {Bold} from "@moki-editor/bold";
import {Placeholder} from "@moki-editor/placeholder";
import {Italic} from "@moki-editor/italic";
import {Underline} from "@moki-editor/underline";
import {Strike} from "@moki-editor/strike";
import {Subscript} from "@moki-editor/subscript";
import {Superscript} from "@moki-editor/superscript";
import {BulletList} from "@moki-editor/bullet-list";
import {OrderedList,ListItem} from "@moki-editor/ordered-list";
import {Blockquote} from "@moki-editor/quote";
import {Code} from "@moki-editor/code";
import {CodeBlockLowlight} from "@moki-editor/code-block-lowlight";

export const FullExtensions = [
    Document,
    Text,
    Paragraph,
    Bold,
    Italic,
    Underline,
    Strike,
    Subscript,
    Superscript,
    ListItem,
    BulletList,
    OrderedList,
    Blockquote,
    Code,
    CodeBlockLowlight(),
    Placeholder.configure({
        includeChildren: false,
        showOnlyCurrent: false,
        placeholder: () => 'Write some for self...',
    })
]