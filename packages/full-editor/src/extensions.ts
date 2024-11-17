import { Bold } from "@moki-editor/bold";
import { BulletList } from "@moki-editor/bullet-list";
import { Code } from "@moki-editor/code";
import { CodeBlockLowlight } from "@moki-editor/code-block-lowlight";
import { Document } from "@moki-editor/document";
import { Italic } from "@moki-editor/italic";
import { ListItem, OrderedList } from "@moki-editor/ordered-list";
import { Paragraph } from "@moki-editor/paragraph";
import { Placeholder } from "@moki-editor/placeholder";
import { Blockquote } from "@moki-editor/quote";
import { Strike } from "@moki-editor/strike";
import { Subscript } from "@moki-editor/subscript";
import { Superscript } from "@moki-editor/superscript";
import { Text } from "@moki-editor/text";
import { Underline } from "@moki-editor/underline";

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
    placeholder: () => "Write some for self...",
  }),
];
