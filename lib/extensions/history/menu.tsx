import React, {useCallback} from 'react';
import {Button} from "../../components";
import {BiRedo, BiUndo} from "react-icons/bi"
import {Editor} from "@tiptap/core";

interface RedoProps {
    editor: Editor
}

interface UndoProps {
    editor: Editor
}

export const RedoMenu = ({editor}: RedoProps) => {
    const disabled = !editor.can().redo()

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
            disabled={!editor.can().redo()}
            type={"normal"}
            onClick={() => {
                if (disabled) return;
                toggleActive();
            }}
        >
            <BiRedo/>
        </Button>
    );
}


export const UndoMenu = ({editor}: UndoProps) => {
    const disabled = !editor.can().undo()

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
            disabled={disabled}
            type={"normal"}
            onClick={() => {
                if (disabled) return;
                toggleActive();
            }}
        >
            <BiUndo/>
        </Button>
    );
}


