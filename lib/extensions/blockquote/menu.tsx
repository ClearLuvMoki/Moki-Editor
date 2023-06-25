import React, {useCallback} from 'react';
import {Button} from "../../components";
import {BsBlockquoteLeft} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import Blockquote from "./core"
import deepEqual from "deep-equal";

type BlockquoteMenuProps = {
    editor: Editor
}

const BlockquoteMenu = React.memo(({editor}: BlockquoteMenuProps) => {
    const isActive = useActive(editor, Blockquote.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleBlockquote()
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
            <BsBlockquoteLeft/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default BlockquoteMenu;
