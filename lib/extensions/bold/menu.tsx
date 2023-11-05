import React, {useCallback} from 'react';
import {Button} from "../../components";
import {BsTypeBold} from "react-icons/bs"
import type {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {Bold} from "./core"
import deepEqual from "deep-equal";

type BoldMenuProps = {
    editor: Editor
}

export const BoldMenu = React.memo(({editor}: BoldMenuProps) => {
    const isActive = useActive(editor, Bold.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleBold()
                .run(),
        [editor]
    );

    return (
        <Button
            active={isActive}
            onClick={() => {
                toggleActive();
            }}
        >
            <BsTypeBold/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

