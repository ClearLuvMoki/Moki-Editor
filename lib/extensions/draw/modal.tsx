import React from 'react';
import deepEqual from "deep-equal";
import {Modal} from "@arco-design/web-react"
import {Excalidraw} from "@excalidraw/excalidraw";

const DrawModal = React.memo(() => {
    return (
        <Modal
            style={{
                width: 500,
                height: 500
            }}
        >
            <Excalidraw/>
        </Modal>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default DrawModal;
