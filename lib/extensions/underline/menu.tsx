import React, {useCallback} from 'react';
import {Button} from "../../components";
import {BsTypeUnderline} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {Underline} from "./core"
import deepEqual from "deep-equal";

type UnderlineMenuProps = {
    editor: Editor
}

export const UnderlineMenu = React.memo(({editor}: UnderlineMenuProps) => {
    const isActive = useActive(editor, Underline.name);

    const toggleItalic = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleUnderline()
                .run(),
        [editor]
    );

    return (
        <Button
            type={isActive ? "primary" : "normal"}
            onClick={() => {
                toggleItalic();
            }}
        >
            <BsTypeUnderline/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

