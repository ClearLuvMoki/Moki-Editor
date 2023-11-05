import React, {useCallback} from 'react';
import Button from "../../components/Button";
import {Editor, isNodeActive} from "@tiptap/core";
import {BsPaintBucket} from "react-icons/bs"
import deepEqual from "deep-equal";
import {DEFAULT_DRAW_DATA, Draw} from "./core.ts";

type DrawMenuProps = {
    editor: Editor
}

export const DrawMenu = React.memo(({editor}: DrawMenuProps) => {
    const isInDraw = isNodeActive(editor.state, Draw.name);


    const handleAction = useCallback(
        () =>
            editor
                .chain()
                .insertDraw({data: DEFAULT_DRAW_DATA})
                .run(),
        [editor]
    );

    return (
        <Button
            onClick={() => {
                handleAction()
            }}
        >
            <BsPaintBucket size={20}/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

