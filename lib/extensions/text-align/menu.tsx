import React, {useCallback} from 'react';
import {Popover, Space} from "@arco-design/web-react";
import {Button} from "../../components"
import {BiAlignLeft, BiAlignMiddle, BiAlignRight} from "react-icons/bi"
import {Editor} from "@tiptap/core";

type SuperscriptMenuProps = {
    editor: Editor
}

export const TextAlignMenu = ({editor}: SuperscriptMenuProps) => {

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
                    type={editor.isActive({textAlign: 'left'}) ? "primary" : "normal"}
                    onClick={() => {
                        toggleActive("left")
                    }}
                ><BiAlignLeft/></Button>
                <Button
                    type={editor.isActive({textAlign: 'center'}) ? "primary" : "normal"}
                    onClick={() => {
                        toggleActive("center")
                    }}
                ><BiAlignMiddle/></Button>
                <Button
                    type={editor.isActive({textAlign: 'right'}) ? "primary" : "normal"}
                    onClick={() => {
                        toggleActive("right")
                    }}
                ><BiAlignRight/></Button>
            </Space>}
        >
            <Button
                type={"normal"}
            >
                <BiAlignMiddle/>
            </Button>
        </Popover>
    );
};

