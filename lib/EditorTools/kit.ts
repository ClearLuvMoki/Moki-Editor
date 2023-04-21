import {AnyExtension, Extensions, Node} from "@tiptap/core";
import {HardBreak} from "@tiptap/extension-hard-break";
import {Bold, Focus, Paragraph, Text, Perf, TrailingNode} from "../EditorExtensions";

export interface EditorKit {
    schema: string;

    extensions: Array<AnyExtension | AnyExtension[]>;
}
export const resolveEditorKit = (props: EditorKit): Extensions | undefined => {
    const { schema, extensions } = props;

    const Doc = Node.create({
        name: "doc",
        topNode: true,
        content: schema
    });

    const runtimeExtensions = [
        Doc,
        Paragraph,
        Text,
        HardBreak,
        Focus,
        TrailingNode,
        Perf,
        ...extensions
    ];

    return runtimeExtensions as Extensions | undefined;
};