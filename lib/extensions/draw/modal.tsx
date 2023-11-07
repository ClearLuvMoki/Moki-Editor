import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import deepEqual from "deep-equal";
import {Modal, Space, Button} from "antd"
import {Excalidraw} from "@excalidraw/excalidraw";
import styled from "styled-components";
import {findNodeByBlockId} from "../../utils";
import {Editor} from "@tiptap/core";
import {Draw} from "./core.ts";
import {ExcalidrawAPIRefValue} from "@excalidraw/excalidraw/types/types";

interface DrawModalProps {
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

const DrawModal = React.memo((
    {
        editor,
        onCancel,
        blockId,
        data: outInData
    }: DrawModalProps
) => {
    const [drawApi, setDrawApi] = useState<ExcalidrawAPIRefValue | null>(null);
    const [data, setData] = useState<any>({});


    useEffect(() => {
        if (outInData) {
            drawApi?.readyPromise?.then(
                (api) => {
                    api.updateScene(outInData as any)
                }
            )
        }
    }, [outInData, drawApi]);


    const onChange = useCallback((elements: any) => {
        setData({
            elements,
            appState: {isLoading: false},
        })
    }, [])

    const onSave = () => {
        let done = false;
        if (blockId) {
            const drawViewNode = findNodeByBlockId(
                editor.state,
                Draw.name,
                blockId
            );

            if (drawViewNode) {
                editor.commands.command(({tr}) => {
                    tr.setNodeMarkup(drawViewNode.pos, undefined, {
                        ...drawViewNode.node.attrs,
                        data: JSON.stringify(data)
                    });
                    return true;
                });
                done = true;
            }
        }
        if (!done) {
            editor
                .chain()
                .focus()
                .insertDraw({data: JSON.stringify(data)})
                .run();
            onCancel && onCancel();
        }
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
            <Excalidraw
                ref={(api: ExcalidrawAPIRefValue) => setDrawApi(api)}
                UIOptions={{
                    canvasActions: {
                        saveAsImage: false,
                        saveToActiveFile: false,
                        export: false,
                        toggleTheme: false
                    }
                }}
                onChange={(elements) => {
                    if (JSON.stringify(elements) !== JSON.stringify(data?.elements)) {
                        onChange(elements)
                    }
                }}
            />
        </StyleModal>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default DrawModal;
