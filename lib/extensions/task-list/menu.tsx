import React, {useCallback} from 'react';
import {Button} from "../../components";
import {GoTasklist} from "react-icons/go"
import {useActive} from "../../hooks/useActive";
import {TaskList} from "./core"
import {Editor} from "@tiptap/core";
import deepEqual from "deep-equal";

type TaskMenuProps = {
    editor: Editor
}

export const TaskMenu = React.memo(({editor}: TaskMenuProps) => {
    const isActive = useActive(editor, TaskList.name);


    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleTaskList()
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
            <GoTasklist/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

