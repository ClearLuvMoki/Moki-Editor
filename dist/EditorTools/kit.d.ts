import { AnyExtension, Extensions } from "@tiptap/core";
export interface EditorKit {
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
}
export declare const resolveEditorKit: (props: EditorKit) => Extensions | undefined;
