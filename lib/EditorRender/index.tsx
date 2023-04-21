import React, {forwardRef, useImperativeHandle} from 'react';
import {useEditor, EditorContent} from "@tiptap/react";
import type { Content, Editor } from "@tiptap/core";
import { AnyExtension } from "@tiptap/core";
import {resolveEditorKit} from "../EditorTools";
import "./index.less"


export interface EditorRenderProps {
    content?: Content;
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
}


const EditorRender = forwardRef<
    Editor | null,
    React.PropsWithChildren<EditorRenderProps>
>((
    props, ref
) => {
    const { content, schema, extensions } = props;
    useImperativeHandle(ref, () => editor as Editor);

    const editor = useEditor(
        {
            content,
            extensions: resolveEditorKit({ schema, extensions }),
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
            onUpdate(props) {
            }
        },
        []
    );

    return (
        <div className={"EditorRenderContainer"}>
            <div className={"EditorRenderContainer_Content"}>
                <EditorContent editor={editor}/>
            </div>
        </div>
    );
});

export type { Editor };

export default EditorRender;