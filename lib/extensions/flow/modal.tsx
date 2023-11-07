import 'reactflow/dist/style.css';
import React, {useCallback, useState} from 'react';
import deepEqual from "deep-equal";
import {Modal, Space, Button} from "antd"
import styled from "styled-components";
import {findNodeByBlockId} from "../../utils";
import {Editor} from "@tiptap/core";
import {Flow} from "./core.ts";
import ReactFlow, {addEdge, SelectionMode, useEdgesState, useNodesState, Background, Controls, MiniMap } from 'reactflow';

interface FlowModalProps {
    editor: Editor;
    blockId: string;
    data: {
        elements: unknown[];
        appState: { isLoading: false };
    } | null;
    onCancel: () => void;
}

const StyleModal = styled(Modal)`
  width: 100vw !important;
  max-width: 100vw !important;
  height: 100vh !important;
  margin: 0 !important;
  top: 0 !important;
  padding: 0;

  .ant-modal-content {
    width: 100%;
    height: 100%;
  }

  .ant-modal-body {
    height: calc(100% - 25px - 45px);
  }

  .layer-ui__wrapper__top-right {
    display: none;
  }
`

const initialNodes = [
    {
        id: '1',
        data: {label: 'Node 1'},
        position: {x: 150, y: 0},
    },
    {
        id: '2',
        data: {label: 'Node 2'},
        position: {x: 0, y: 150},
    },
    {
        id: '3',
        data: {label: 'Node 3'},
        position: {x: 300, y: 150},
    },
];

const initialEdges = [
    {id: 'e1-2', source: '1', target: '2'},
    {id: 'e1-3', source: '1', target: '3'},
];

const panOnDrag = [1, 2];
const FlowModal = React.memo((
    {
        editor,
        onCancel,
        blockId,
        data: outInData
    }: FlowModalProps
) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const [data, setData] = useState<any>({});


    const onChange = useCallback((elements: any) => {

    }, [])

    const onSave = () => {

    }

    return (
        <StyleModal
            title='绘图'
            open={true}
            destroyOnClose={true}
            onCancel={() => {
                onCancel && onCancel()
            }}
            footer={<Space>
                <Button
                    onClick={() => {
                        onCancel && onCancel()
                    }}
                >退出</Button>
                <Button
                    type='primary'
                    onClick={() => {
                        onSave()
                    }}
                >保存并退出</Button>
            </Space>}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                panOnScroll
                selectionOnDrag
                panOnDrag={panOnDrag}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                selectionMode={SelectionMode.Partial}
            >
                <Background/>
                <Controls/>
                <MiniMap />
            </ReactFlow>
        </StyleModal>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default FlowModal;
