import React, {useCallback} from 'react';
import Button from "../../components/Button";
import {Editor, isNodeActive} from "@tiptap/core";
import deepEqual from "deep-equal";
import {Flow} from "./core.ts";
import {handleDrawAction} from "./edit.tsx";
import {TiFlowMerge} from "react-icons/ti";

type FlowMenuProps = {
    editor: Editor
}


export const FlowMenu = React.memo(({editor}: FlowMenuProps) => {


    return (
        <Button
            onClick={() => {
                handleDrawAction(editor)
            }}
        >
            <TiFlowMerge size={20}/>
        </Button>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

