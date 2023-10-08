import React, {useCallback} from 'react';
import deepEqual from "deep-equal";
import {Button} from "../../components";
import {BiRedo, BiUndo} from "react-icons/bi"
import {Editor} from "@tiptap/core";

interface RedoProps {
    editor: Editor
}

interface UndoProps {
    editor: Editor
}

export const RedoMenu = React.memo(({editor}: RedoProps) => {

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .redo()
                .run(),
        [editor]
    );


    return (
        <Button
            type={"normal"}
            onClick={() => {
                toggleActive();
            }}
        >
            <BiRedo/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});


export const UndoMenu = React.memo(({editor}: UndoProps) => {

    const toggleActive = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .undo()
                .run(),
        [editor]
    );

    return (
        <Button
            type={"normal"}
            onClick={() => {
                toggleActive();
            }}
        >
            <BiUndo/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});


