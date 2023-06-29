import React, {useCallback} from 'react';
import {Button} from "../../components";
import {BiCodeCurly} from "react-icons/bi"
import type {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {BlockCode} from "./core"
import deepEqual from "deep-equal";

type BlockCodeMenuProps = {
    editor: Editor
}

export const BlockCodeMenu = React.memo(({editor}: BlockCodeMenuProps) => {
    const isActive = useActive(editor, BlockCode.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleCodeBlock()
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
            <BiCodeCurly/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

