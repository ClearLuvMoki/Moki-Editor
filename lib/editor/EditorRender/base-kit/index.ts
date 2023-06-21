import {AnyExtension, Node} from "@tiptap/core";

import {Focus} from "../../../extensions/focus";
import {Paragraph} from "../../../extensions/paragraph";
import {Text} from "../../../extensions/text";
import {HardBreak} from "../../../extensions/hard-break";

export interface EditorKit {
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
}

export const resolveEditorKit = (props: EditorKit) => {
    const {schema, extensions} = props;

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
        ...(extensions || [])?.flat()
    ];

    return runtimeExtensions;
};
