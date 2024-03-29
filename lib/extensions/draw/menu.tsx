import React from 'react';
import Button from "../../components/Button";
import {Editor} from "@tiptap/core";
import {BsPaintBucket} from "react-icons/bs"
import deepEqual from "deep-equal";
import {handleDrawAction} from "./edit.tsx";

type DrawMenuProps = {
    editor: Editor
}


export const DrawMenu = React.memo(({editor}: DrawMenuProps) => {


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

