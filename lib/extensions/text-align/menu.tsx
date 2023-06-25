import React, {useCallback} from 'react';
import {Button, Popover, Space} from "@arco-design/web-react";
import {BiAlignLeft, BiAlignMiddle, BiAlignRight} from "react-icons/bi"
import {Editor} from "@tiptap/core";

type SuperscriptMenuProps = {
    editor: Editor
}

const SuperscriptMenu = ({editor}: SuperscriptMenuProps) => {

    const toggleActive = useCallback(
        (align: string) =>
            editor
                .chain()
                .focus()
                .setTextAlign(align)
                .run(),
        [editor]
    );

    return (
        <Popover
            trigger='click'
            content={<Space>
                <Button
                    type={editor.isActive({textAlign: 'left'}) ? "primary" : "outline"}
                    onClick={() => {
                        toggleActive("left")
                    }}
                ><BiAlignLeft/></Button>
                <Button
                    type={editor.isActive({textAlign: 'center'}) ? "primary" : "outline"}
                    onClick={() => {
                        toggleActive("center")
                    }}
                ><BiAlignMiddle/></Button>
                <Button
                    type={editor.isActive({textAlign: 'right'}) ? "primary" : "outline"}
                    onClick={() => {
                        toggleActive("right")
                    }}
                ><BiAlignRight/></Button>
            </Space>}
        >
            <Button
                type={"outline"}
            >
                <BiAlignMiddle/>
            </Button>
        </Popover>
    );
};

export default SuperscriptMenu;
