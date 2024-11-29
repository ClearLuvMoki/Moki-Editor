import {Editor} from "@tiptap/react";
import {useEffect} from "react";
import {useToggle} from "ahooks";

export const useActive = (editor: Editor | null, ...args) => {
    const [active, {toggle}] = useToggle(false);

    useEffect(() => {
        if (!editor) return;
        const listener = () => {
            // @ts-ignore
            toggle(editor.isActive.apply(editor, args));
        };

        editor.on('selectionUpdate', listener);
        editor.on('transaction', listener);

        return () => {
            editor.off('selectionUpdate', listener);
            editor.off('transaction', listener);
        };
    }, [editor, args, toggle]);

    return active;
};