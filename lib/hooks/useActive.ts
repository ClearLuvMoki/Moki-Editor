import {useEffect, useState} from "react";
import {Editor} from "@tiptap/core";


export const useActive = (editor: Editor, name: string,) => {
    const [active, toggleActive] = useState(false);

    useEffect(() => {
        const listener = () => {
            const selection = editor.state.selection;
            toggleActive(editor.isActive(name));
        };

        editor.on('selectionUpdate', listener);
        editor.on('transaction', listener);

        return () => {
            editor.off('selectionUpdate', listener);
            editor.off('transaction', listener);
        };
    }, [editor, name, toggleActive]);

    return active;
};