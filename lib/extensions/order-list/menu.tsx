import React, {useCallback} from 'react';
import {Button} from "../../components";
import {VscListOrdered} from "react-icons/vsc"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {OrderedList} from "./core"
import deepEqual from "deep-equal";

type OrderListMenuProps = {
    editor: Editor
}

export const OrderListMenu = React.memo(({editor}: OrderListMenuProps) => {
    const isActive = useActive(editor, OrderedList.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleOrderedList()
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
            <VscListOrdered/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

