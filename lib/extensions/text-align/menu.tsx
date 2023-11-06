import React, {useCallback} from 'react';
import {Popover, Space} from "antd";
import {Button} from "../../components"
import {BiAlignLeft, BiAlignMiddle, BiAlignRight} from "react-icons/bi"
import {Editor} from "@tiptap/core";
import styled from "styled-components";

type SuperscriptMenuProps = {
    editor: Editor
}

const StyledPopover = styled(Popover)`
  .arco-popover-content {
    padding: 4px;
  }
`

export const TextAlignMenu = ({editor}: SuperscriptMenuProps) => {
    const isAlignCenter = editor.isActive({textAlign: 'center'})
    const isAlignRight = editor.isActive({textAlign: 'right'});
    const isAlignLeft = editor.isActive({textAlign: 'left'});

    const toggleActive = useCallback(
        (align: string) =>
            editor
                .chain()
                .focus()
                .setTextAlign(align)
                .run(),
        [editor]
    );

    const $Icon = React.useMemo(() => {
        if (isAlignCenter) {
            return <BiAlignMiddle/>
        } else if (isAlignRight) {
            return <BiAlignRight/>
        } else {
            return <BiAlignLeft/>
        }
    }, [isAlignCenter, isAlignRight, isAlignLeft])

    return (
        <StyledPopover
            content={<Space>
                <Button
                    active={isAlignLeft}
                    onClick={() => {
                        toggleActive("left")
                    }}
                ><BiAlignLeft/></Button>
                <Button
                    active={isAlignCenter}
                    onClick={() => {
                        toggleActive("center")
                    }}
                ><BiAlignMiddle/></Button>
                <Button
                    active={isAlignRight}
                    onClick={() => {
                        toggleActive("right")
                    }}
                ><BiAlignRight/></Button>
            </Space>}
        >
            <div style={{display: "inline-flex", justifyContent: 'center', alignItems: "center"}}>
                <Button
                    active={isAlignRight || isAlignCenter}
                >
                    {$Icon}
                </Button>
            </div>
        </StyledPopover>
    );
};

