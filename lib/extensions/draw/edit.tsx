import ReactDOM from "react-dom/client";
import {Draw} from "./core.ts";
import DrawModal from "./modal.tsx";
import React from "react";
import {Editor} from "@tiptap/core";
import {safeJSONParse} from "../../utils";


const ModalId = "Draw-Modal-Root";
export const handleDrawAction = (editor: Editor) => {
    const div = document.createElement("div");
    div.setAttribute("id", ModalId)
    editor.options.element.appendChild(div);
    const modalRoot = ReactDOM.createRoot(document.getElementById(ModalId) as HTMLElement)
    const attrs = editor.getAttributes(Draw.name);
    const data = safeJSONParse(attrs?.data || "{}");

    const blockId = attrs.blockId;
    modalRoot.render(
        <DrawModal
            data={data}
            editor={editor}
            blockId={blockId}
            onCancel={() => {
                modalRoot.unmount();
                editor.options.element.removeChild(div)
            }}
        />
    )
}
