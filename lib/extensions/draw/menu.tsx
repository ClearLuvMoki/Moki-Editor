import React, {useCallback} from 'react';
import Button from "../../components/Button";
import {Editor, isNodeActive} from "@tiptap/core";
import {BsPaintBucket} from "react-icons/bs"
import deepEqual from "deep-equal";
import {Draw} from "./core.ts";
import {handleDrawAction} from "./edit.tsx";

type DrawMenuProps = {
    editor: Editor
}


export const DrawMenu = React.memo(({editor}: DrawMenuProps) => {
    const isInDraw = isNodeActive(editor.state, Draw.name);


    return (
        <Button
            onClick={() => {
                handleDrawAction(editor)
            }}
        >
            <BsPaintBucket size={20}/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

