import "../../styles/full-editor.css"
import 'mac-scrollbar/dist/mac-scrollbar.css';
import React, {memo, useEffect} from 'react';
import {useEditor, EditorContent} from "@tiptap/react"
import {isEqualReact} from "@react-hookz/deep-equal";
import clsx from "clsx"
import {FullEditorProps} from "../../modals/types/full-editor";
import {FullExtensions} from "./extenisons";
import Toolbar from "./toolbar";
import GlobalContextProvider from "./context";

const FullEditor = memo((props: FullEditorProps) => {
    const {classNames, styles} = props;
    const editor = useEditor({
        extensions: FullExtensions,
        autofocus: props?.autofocus,
        onUpdate: (editor) => {
            const text = editor.editor.getText();
            const json = editor.editor.getJSON();
            const html = editor.editor.getHTML();
            const isEmpty = !text && html === "<p></p>"
            props?.onUpdate?.({json, text, html, isEmpty})
        }
    }, [props?.autofocus])

    useEffect(() => {
        props?.content && editor && editor.commands.setContent(props?.content)
    }, [props?.content, editor])


    return (
            <GlobalContextProvider
                editor={editor}
            >
                <div
                    className={clsx("moki-full-editor-root", classNames?.root)}
                    style={styles?.root}
                >
                    <Toolbar
                        className={classNames?.toolbar}
                        style={styles?.toolbar}
                    />
                    <EditorContent
                        editor={editor}
                        className={clsx("moki-full-editor", " w-1/2 max-w-7/12 h-[calc(100%-50px)] m-auto p-8", classNames?.editor)}
                        style={styles?.editor}
                    />
                </div>
            </GlobalContextProvider>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default FullEditor;
