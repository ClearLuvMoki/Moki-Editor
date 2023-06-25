import {useEditor, EditorContent} from '@tiptap/react'
import {forwardRef, useImperativeHandle} from "react";
import {Content, AnyExtension, Editor as TipTapEditor} from "@tiptap/core";
import {resolveEditorKit} from "./base-kit";
import { StyledEditor } from "../../styles"

export interface EditorKit {
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
    autofocus?: boolean;
}

export interface EditorRenderProps extends EditorKit {
    content?: Content;
}



const EditorRender = forwardRef((props: EditorRenderProps, ref) => {
    const {content, schema, extensions, autofocus = true} = props;

    useImperativeHandle(ref, () => editor as TipTapEditor);

    const editor = useEditor(
        {
            content,
            extensions: resolveEditorKit({schema, extensions}),
            editorProps: {
                attributes: {
                    class: "moki-editor",
                    spellcheck: "false",
                },
            },
            autofocus,
            onCreate(props) {
                props?.editor?.view?.focus();
            },
        },
        []
    );


    return (
        <StyledEditor>
            <EditorContent editor={editor}/>
        </StyledEditor>
    );
});

export default EditorRender;
