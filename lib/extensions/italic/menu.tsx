import React, {useCallback} from 'react';
import {Button} from "../../components";
import {BsTypeItalic} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {Italic} from "./core"
import deepEqual from "deep-equal";

type ItalicMenuProps = {
    editor: Editor
}

export const ItalicMenu = React.memo(({editor}: ItalicMenuProps) => {
    const isActive = useActive(editor, Italic.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleItalic()
                .run(),
        [editor]
    );

    return (
        <Button
            type={isActive ? "primary" : "normal"}
            onClick={() => {
                toggleActive();
            }}
        >
            <BsTypeItalic/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

