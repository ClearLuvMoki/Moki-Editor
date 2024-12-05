import React, {memo} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose} from '@/components/dialog'
import {Button} from "@/components/button";

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
        <Dialog
            open={open}
            onOpenChange={(open) => !open && onClose()}
        >
            <DialogContent
                className="max-w-screen h-screen flex flex-col"
                autoFocus={false}
                closeIcon={<div className="flex gap-2 items-center">
                    <Button onClick={onSubmit}>确定</Button>
                    <Button variant="secondary" onClick={onClose}>取消</Button>
                </div>}
            >
                <DialogHeader
                    className="flex justify-between items-center h-[20px]"
                >
                    <DialogTitle>{title}</DialogTitle>
                    <DialogClose autoFocus={false}/>
                </DialogHeader>
                <div className="flex flex-1">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default BaseEditModal;
