import React, {useCallback} from 'react';
import {Button} from "@arco-design/web-react";
import {BsSubscript} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import Subscript from "./core"
import deepEqual from "deep-equal";

type SubscriptMenuProps = {
    editor: Editor
}

const SubscriptMenu = React.memo(({editor}: SubscriptMenuProps) => {
    const isActive = useActive(editor, Subscript.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleSubscript()
                .run(),
        [editor]
    );

    return (
        <Button
            type={isActive ? "primary" : "outline"}
            onClick={() => {
                toggleActive();
            }}
        >
            <BsSubscript/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default SubscriptMenu;
