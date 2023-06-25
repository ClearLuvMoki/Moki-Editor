import "../../i18n"
import {useEditor, EditorContent} from '@tiptap/react'
import React, {forwardRef, useImperativeHandle} from "react";
import {Content, AnyExtension, Editor as TipTapEditor} from "@tiptap/core";
import {resolveEditorKit} from "./base-kit";
import {StyledEditor} from "../../styles"
import {
    BoldMenu,
    ItalicMenu,
    UnderlineMenu,
    StrikeMenu,
    BlockquoteMenu,
    InLineCodeMenu,
    SubscriptMenu,
    SuperscriptMenu,
    TextAlignMenu,
    EmojiMenu,
    ListMenu
} from "../../extensions/index"

export interface EditorKit {
    schema: string;
    extensions: Array<AnyExtension | AnyExtension[]>;
    autofocus?: boolean;
    children?: React.ReactNode;
}

export interface EditorRenderProps extends EditorKit {
    content?: Content;
}


const EditorRender = forwardRef((props: EditorRenderProps, ref) => {
    const {content, schema, extensions, autofocus = true, children} = props;

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
            {children || (editor && (
                <div>
                    <BoldMenu editor={editor}/>
                    <ItalicMenu editor={editor}/>
                    <UnderlineMenu editor={editor}/>
                    <StrikeMenu editor={editor}/>
                    <BlockquoteMenu editor={editor}/>
                    <InLineCodeMenu editor={editor}/>
                    <SubscriptMenu editor={editor}/>
                    <SuperscriptMenu editor={editor}/>
                    <TextAlignMenu editor={editor}/>
                    <EmojiMenu editor={editor}/>
                    <ListMenu editor={editor}/>
                </div>
            ))}
            <EditorContent editor={editor}/>
        </StyledEditor>
    );
});

export default EditorRender;
