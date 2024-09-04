import deepEqual from "deep-equal";
import { Editor } from "@tiptap/core";
import React, { memo, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { Context } from "../../editor/FullEditorRender/context";
import MindExtensions from "../../extensions/mind"
import Mind, { MindMapRefHandleType } from "../../components/Mind";
import { findNodeByBlockId } from "../../utils/tools";

interface Props {
    editor: Editor | null;
}

const MindModal = memo(({ editor }: Props) => {
    if (!editor) return;
    const { mindModalState, setMindModalState } = useContext(Context);
    const mindMapRef = useRef<MindMapRefHandleType>(null);
    const [saveLoading, setSaveLoading] = useState(false);

    const blockId = mindModalState?.data?.blockId;
    const outInData = mindModalState?.data?.mindData


    const onSave = useCallback(() => {
        setSaveLoading(true)
        mindMapRef.current?.export("json")
            .then((res) => {
                const json = atob(res?.replace("data:application/octet-stream;base64,", ""))
                const jsonString = decodeURIComponent(escape(json));
                editor
                    .chain()
                    .focus()
                    .setMind({ data: JSON.parse(jsonString || "{}") })
                    .run();
            })
            .finally(() => setSaveLoading(false))

    }, [])

    const onExit = useCallback(() => {
        setMindModalState?.({
            open: false,
            data: {
                mindData: "",
                blockId: ""
            }
        })
    }, [])

    return (
        <Modal
            size="full"
            classNames={{
                wrapper: "z-[99999]"
            }}
            isOpen={mindModalState?.open}
            onClose={onExit}
        >
            <ModalContent>
                {() => (
                    <React.Fragment>
                        <ModalHeader className="flex flex-col gap-1">Mind Modal</ModalHeader>
                        <ModalBody className="px-0">
                            <Mind ref={mindMapRef} data={outInData} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={onSave} isLoading={saveLoading}>
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

export default MindModal;