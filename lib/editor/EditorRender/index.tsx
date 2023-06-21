import {useEditor, EditorContent} from '@tiptap/react'
import {forwardRef, useImperativeHandle} from "react";
import {Content, AnyExtension, Editor} from "@tiptap/core";
import {resolveEditorKit} from "./base-kit";

export interface EditorKit {
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
}

export interface EditorRenderProps extends EditorKit {
    content?: Content;
}

const EditorRender = forwardRef((props: EditorRenderProps, ref) => {
    const {content, schema, extensions} = props;

    useImperativeHandle(ref, () => editor as Editor);

    const editor = useEditor(
        {
            content,
            extensions: resolveEditorKit({schema, extensions}),
            editorProps: {
                attributes: {
                    class: "moki-editor",
                    spellcheck: "false",
                    suppressContentEditableWarning: "true"
                },
            },
            onCreate(props) {
                props.editor.view.focus();
            },
        },
        []
    );


    return (
        <EditorContent editor={editor}/>
    );
});

export default EditorRender;
