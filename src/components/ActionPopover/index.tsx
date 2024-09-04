import React, {useContext} from 'react';
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {Context} from "../../editor/FullEditorRender/context";

interface Props {
    action: React.ReactNode;
    popover: React.ReactNode;
}

const ActionPopover = ({action, popover}: Props) => {
    const {editor} = useContext(Context)
    return (
        <Popover
            placement="bottom"
            showArrow={true}
            onOpenChange={(isOpen) => {
            }}
            onClose={() => {
                setTimeout(() => {
                    editor?.chain()?.focus()?.run()
                }, 300)
            }}
        >
            <PopoverTrigger>
                {action}
            </PopoverTrigger>
            <PopoverContent style={{padding: 0}}>
                {popover}
            </PopoverContent>
        </Popover>
    );
};

export default ActionPopover;
