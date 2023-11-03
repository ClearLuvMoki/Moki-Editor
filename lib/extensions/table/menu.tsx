import React, {useCallback} from 'react';
import {Button} from "../../components";
import {CiViewTable} from "react-icons/ci"
import {Editor} from "@tiptap/core";
import deepEqual from "deep-equal";

type TableMenuProps = {
    editor: Editor
}

export const TableMenu = React.memo(({editor}: TableMenuProps) => {

    const toggleActive = useCallback(
        () => {
            editor
                .chain()
                .focus()
                .insertTable({rows: 3, cols: 3, withHeaderRow: true})
                .run();
        },
        [editor]
    );

    return (
        <Button
            onClick={() => {
                toggleActive();
            }}
        >
            <CiViewTable/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

