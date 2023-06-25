import {AnyExtension, Node} from "@tiptap/core";

import {Focus} from "../../../extensions/focus";
import {Paragraph} from "../../../extensions/paragraph";
import {Text} from "../../../extensions/text";
import {HardBreak} from "../../../extensions/hard-break";
import {Document, Heading} from "../../../extensions";

export interface EditorKit {
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
}

export const resolveEditorKit = (props: EditorKit) => {
    const {schema, extensions} = props;

    return [
        Document,
        Heading,
        Paragraph,
        Text,
        HardBreak,
        Focus,
        ...(extensions || [])?.flat()
    ];
};
