import React, {useCallback} from 'react';
import Button from "../../components/Button";
import {Editor, isNodeActive} from "@tiptap/core";
import {BsPaintBucket} from "react-icons/bs"
import deepEqual from "deep-equal";
import {Draw} from "./core.ts";
import ReactDOM from "react-dom/client";
import DrawModal from "./modal.tsx";

type DrawMenuProps = {
    editor: Editor
}

const ModalId = "Draw-Modal-Root";


export const DrawMenu = React.memo(({editor}: DrawMenuProps) => {
    const isInDraw = isNodeActive(editor.state, Draw.name);


    const handleAction = () => {
        const div = document.createElement("div");
        div.setAttribute("id", ModalId)
        editor.options.element.appendChild(div);
        const modalRoot = ReactDOM.createRoot(document.getElementById(ModalId) as HTMLElement)
        const attrs = editor.getAttributes(Draw.name);
        const blockId = attrs.blockId;
        modalRoot.render(
            <DrawModal
                editor={editor}
                blockId={blockId}
                onCancel={() => {
                    modalRoot.unmount();
                    editor.options.element.removeChild(div)
                }}
            />
        )
    }


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

