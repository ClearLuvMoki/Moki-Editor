import React from 'react';
import type { Content, Editor } from "@tiptap/core";
import { AnyExtension } from "@tiptap/core";
import "./index.less";
export interface EditorRenderProps {
    content?: Content;
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
}
declare const EditorRender: React.ForwardRefExoticComponent<EditorRenderProps & {
    children?: React.ReactNode;
} & React.RefAttributes<Editor | null>>;
export type { Editor };
export default EditorRender;
