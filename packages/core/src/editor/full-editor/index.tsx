import "../../styles/full-editor.css"
import React, {memo} from 'react';
import {useEditor, EditorContent} from "@tiptap/react"
import {isEqualReact} from "@react-hookz/deep-equal";
import {FullEditorProps} from "../../modals/types/full-editor";
import {FullExtensions} from "./extenisons";
import clsx from "clsx"
import Toolbar from "./toolbar";
import GlobalContextProvider from "./context";

const FullEditor = memo((props: FullEditorProps) => {
    const {classNames, styles} = props;
    const editor = useEditor({
        extensions: FullExtensions
    })
    return (
        <GlobalContextProvider
            editor={editor}
        >
            <div
                className={clsx("moki-full-editor-root", classNames?.root)}
            >
                <Toolbar/>
                <EditorContent
                    editor={editor}
                    className={clsx("moki-full-editor", " w-1/2 max-w-7/12 h-[calc(100%-50px)] m-auto p-8", classNames?.editor)}
                />

            </div>
        </GlobalContextProvider>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default FullEditor;
