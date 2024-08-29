import deepEqual from "deep-equal";
import { Editor } from "@tiptap/core";
import React, { memo, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { Context } from "../../editor/FullEditorRender/context";
import { findNodeByBlockId } from "../../utils/tools";
import FlowExtensions from "../../extensions/flow"

interface Props {
    editor: Editor | null;
}

const FlowModal = memo(({ editor }: Props) => {
    if (!editor) return;
    const { flowModalState, setFlowModalState } = useContext(Context);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const xmlRef = useRef("");
    const blockId = flowModalState?.data?.blockId;

    const onSave = useCallback(() => {
        postMessage({
            action: "export",
            format: "svg",
            xml: xmlRef.current,
            spinKey: "export"
        });
    }, [])

    const onExit = useCallback(() => {
        setFlowModalState?.({
            open: false,
            data: {
                blockId: "",
                flowData: ""
            }
        })
    }, [])

    const postMessage = useCallback((msg: any) => {
        if (!iframeRef.current) return;
        iframeRef.current?.contentWindow?.postMessage(JSON.stringify(msg), "*");
    }, []);

    useEffect(() => {
        const initializeEditor = () => {
            postMessage({
                action: "load",
                autosave: 1,
                modified: "unsavedChanges",
                xml: flowModalState?.data?.flowData
            });
        };

        const handleMessage = (msg: any) => {
            if (msg.origin !== "https://embed.diagrams.net") return;
            const data = JSON.parse(msg.data || "{}")

            if (data.event == "init") {
                initializeEditor();
            } else if (data.event == "autosave") {
                xmlRef.current = data.xml;
            } else if (data.event == "export") {
                let done = false;

                if (blockId) {
                    const maybeNode = findNodeByBlockId(editor.state, FlowExtensions.name, blockId);

                    if (maybeNode) {
                        editor.commands.command(({ tr }) => {
                            tr.setNodeMarkup(maybeNode.pos, undefined, {
                                ...maybeNode.node.attrs,
                                svg: data.data,
                                xml: xmlRef.current
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
                        .insertFlow({ svg: data.data, xml: xmlRef.current })
                        .run();
                }
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [blockId, flowModalState?.data?.flowData]);

    return (
        <Modal
            size="full"
            classNames={{
                wrapper: "z-[99999]"
            }}
            isOpen={flowModalState?.open}
            onClose={onExit}
        >
            <ModalContent>
                {() => (
                    <React.Fragment>
                        <ModalHeader className="flex flex-col gap-1">Excalidraw Modal</ModalHeader>
                        <ModalBody className="px-0">
                            <iframe
                                className="flex-1"
                                ref={iframeRef}
                                src="https://embed.diagrams.net/?proto=json&spin=1&ui=atalas&libraries=1&noSaveBtn=1&saveAndExit=0&noExitBtn=1"
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

export default FlowModal;