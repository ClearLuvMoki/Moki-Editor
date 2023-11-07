import ReactDOM from "react-dom/client";
import {Flow} from "./core.ts";
import React from "react";
import {Editor} from "@tiptap/core";
import {safeJSONParse} from "../../utils";
import FlowModal from "./modal.tsx";


const ModalId = "Flow-Modal-Root";
export const handleDrawAction = (editor: Editor) => {
    const div = document.createElement("div");
    div.setAttribute("id", ModalId)
    editor.options.element.appendChild(div);
    const modalRoot = ReactDOM.createRoot(document.getElementById(ModalId) as HTMLElement)
    const attrs = editor.getAttributes(Flow.name);
    const data = safeJSONParse(attrs?.data || "[]");

    const blockId = attrs.blockId;
    modalRoot.render(
        <FlowModal
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
