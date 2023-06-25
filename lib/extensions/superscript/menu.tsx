import React, {useCallback} from 'react';
import {Button} from "../../components";
import {BsSuperscript} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import Superscript from "./core"
import deepEqual from "deep-equal";

type SuperscriptMenuProps = {
    editor: Editor
}

const SuperscriptMenu = React.memo(({editor}: SuperscriptMenuProps) => {
    const isActive = useActive(editor, Superscript.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleSuperscript()
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
            <BsSuperscript/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default SuperscriptMenu;
