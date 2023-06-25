import React, {useCallback} from 'react';
import {Button} from "@arco-design/web-react";
import {BsListUl} from "react-icons/bs"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {BulletList} from "./core"
import deepEqual from "deep-equal";

type ListMenuProps = {
    editor: Editor
}

const ListMenu = React.memo(({editor}: ListMenuProps) => {
    const isActive = useActive(editor, BulletList.name);

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleBulletList()
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
            <BsListUl/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default ListMenu;
