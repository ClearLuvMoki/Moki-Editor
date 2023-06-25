import React, {useCallback} from 'react';
import {Button} from "../../components";
import {BsCode} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import InlineCode from "./core"
import deepEqual from "deep-equal";

type InlineCodeProps = {
    editor: Editor
}

const InlineCodeMenu = React.memo(({editor}: InlineCodeProps) => {
    const isActive = useActive(editor, InlineCode.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleCode()
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
            <BsCode/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default InlineCodeMenu;
