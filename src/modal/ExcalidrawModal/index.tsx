import deepEqual from "deep-equal";
import { Editor } from "@tiptap/core";
import React, { memo, useCallback, useContext, useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { Excalidraw } from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles, ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { Context } from "../../editor/FullEditorRender/context";
import ExcalidrawExtension from "../../extensions/excalidraw"
import { findNodeByBlockId } from "../../utils/tools";

interface Props {
    editor: Editor | null;
}

const ExcalidrawModal = memo(({ editor }: Props) => {
    if (!editor) return;
    const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI | null>(null);
    const { excalidrawModalState, setExcalidrawModalState } = useContext(Context);
    const [data, setData] = useState<any>({
        elements: [],
        appState: { isLoading: false },
    });
    const outInData = excalidrawModalState?.data?.excalidrawData
    const blockId = excalidrawModalState?.data?.blockId;

    useEffect(() => {
        if (outInData && excalidrawAPI) {
            excalidrawAPI?.updateScene(outInData)
        }else {
            excalidrawAPI?.updateScene({
                elements: [],
                appState: { isLoading: false }
            })
        }
    }, [outInData, excalidrawAPI])

    const onChange = useCallback((elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => {
        setData({
            elements,
            appState,
            files
        });
    }, []);

    const onSave = useCallback(() => {
        let done = false;

        if (blockId) {
            const maybeNode = findNodeByBlockId(
                editor.state,
                ExcalidrawExtension.name,
                blockId
            );

            if (maybeNode) {
                editor.commands.command(({ tr }) => {
                    tr.setNodeMarkup(maybeNode.pos, undefined, {
                        ...maybeNode.node.attrs,
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
                .insertExcalidraw({ data: JSON.stringify(data) })
                .run();
        }
        onExit()
    }, [Excalidraw, editor, data, blockId]);

    const onExit = useCallback(() => {
        setExcalidrawModalState?.({
            open: false,
            data: null
        })
        setData({
            elements: [],
            appState: { isLoading: false },
        })
    }, [])

    return (
        <Modal
            size="full"
            classNames={{
                wrapper: "z-[99999]"
            }}
            isOpen={excalidrawModalState?.open}
            onClose={onExit}
        >
            <ModalContent>
                {(onClose) => (
                    <React.Fragment>
                        <ModalHeader className="flex flex-col gap-1">Excalidraw Modal</ModalHeader>
                        <ModalBody >
                            <Excalidraw
                                initialData={data}
                                onChange={onChange}
                                excalidrawAPI={setExcalidrawAPI}
                                UIOptions={{
                                    canvasActions: {
                                        export: false,
                                        loadScene: false,
                                        saveToActiveFile: false,
                                        toggleTheme: false,
                                        saveAsImage: false
                                    }
                                }}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={onSave}>
                                保存
                            </Button>
                        </ModalFooter>
                    </React.Fragment>
                )}
            </ModalContent>
        </Modal>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, { strict: true })
})

export default ExcalidrawModal;