import React, {memo} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {Modal, ModalBody, ModalContent, ModalHeader, Button} from "@nextui-org/react";

interface Props {
    open: boolean;
    title?: React.ReactNode;
    children: React.ReactNode;
    onSubmit: () => void;
    onClose: () => void;
}

const BaseEditModal = memo((props: Props) => {
    const {open, title, children, onSubmit, onClose} = props;
    return (
        <Modal
            size="full"
            isOpen={open}
            hideCloseButton={true}
            portalContainer={document.getElementsByClassName("moki-full-editor-root")?.[0]}
            onClose={onClose}
        >
            <ModalContent>
                {() => (
                    <React.Fragment>
                        <ModalHeader className="flex justify-between items-center">
                            <span>{title}</span>
                            <div className="flex items-center gap-2">
                                <Button color="primary" onPress={onSubmit}>确定</Button>
                                <Button onPress={onClose}>取消</Button>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            {children}
                        </ModalBody>
                    </React.Fragment>
                )}
            </ModalContent>
        </Modal>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default BaseEditModal;
