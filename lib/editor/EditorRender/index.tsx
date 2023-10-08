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
    InlineCodeMenu,
    SubscriptMenu,
    SuperscriptMenu,
    TextAlignMenu,
    EmojiMenu,
    ListMenu,
    OrderListMenu,
    TableMenu,
    TaskMenu,
    HeadingMenu,
    FontFamilyMenu,
    HighlightMenu,
    TextColorMenu,
    BlockCodeMenu,
    RedoMenu,
    UndoMenu
} from "../../extensions"
import {ToolBarStyle} from "../../styles/ToolBarStyle.ts";

export type {Editor} from "@tiptap/core"

export interface EditorKit {
    extensions?: Array<AnyExtension | AnyExtension[]>;
    editable?: boolean;
    autofocus?: boolean;
    isToolBar?: boolean;
    onUpdate?: ((props: { editor: TipTapEditor, transaction: any }) => void) | undefined
    children?: React.ReactNode;
}

export interface EditorRenderProps extends EditorKit {
    content?: Content;
}


const EditorRender = forwardRef((props: EditorRenderProps, ref) => {
    const {
        content = null,
        editable = true,
        extensions,
        isToolBar = true,
        autofocus = true,
        onUpdate,
        children
    } = props;

    useImperativeHandle(ref, () => editor as TipTapEditor);

    const editor = useEditor(
        {
            content,
            editable,
            extensions: resolveEditorKit({extensions, isToolBar}),
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
            onUpdate(props) {
                onUpdate && onUpdate(props);
            }
        },
        []
    );


    return (
        <StyledEditor>
            {children || (editor && isToolBar && (
                <ToolBarStyle>
                    <UndoMenu editor={editor}/>
                    <RedoMenu editor={editor}/>
                    <HeadingMenu editor={editor}/>
                    <FontFamilyMenu editor={editor}/>
                    <BoldMenu editor={editor}/>
                    <ItalicMenu editor={editor}/>
                    <UnderlineMenu editor={editor}/>
                    <StrikeMenu editor={editor}/>
                    <BlockquoteMenu editor={editor}/>
                    <InlineCodeMenu editor={editor}/>
                    <SubscriptMenu editor={editor}/>
                    <SuperscriptMenu editor={editor}/>
                    <TextAlignMenu editor={editor}/>
                    <EmojiMenu editor={editor}/>
                    <ListMenu editor={editor}/>
                    <OrderListMenu editor={editor}/>
                    <TableMenu editor={editor}/>
                    <TaskMenu editor={editor}/>
                    <HighlightMenu editor={editor}/>
                    <TextColorMenu editor={editor}/>
                    <BlockCodeMenu editor={editor}/>
                </ToolBarStyle>
            ))}
            <EditorContent editor={editor}/>
        </StyledEditor>
    );
});

export default EditorRender;
