import React, {useCallback, useState} from 'react';
import {Button} from "../../components";
import {ImTextColor} from "react-icons/im"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {TextColor} from "./core"
import deepEqual from "deep-equal";
import {Popover} from "@arco-design/web-react"
import {SketchPicker} from 'react-color';
import styled from "styled-components";
import ColorWrapper from "../../components/ColorWrapper";


type TextColorMenuProps = {
    editor: Editor
}

const NoStyleDiv = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  border: 1px solid transparent;
  transition: all .3s;
  border-radius: 4px;
  padding: 2px 4px;
  display: flex;

  &:hover {
    border: 1px solid #ccc;
    background-color: #e8e8e8;
  }
`

const StyleIcon = styled.span<{ color?: string }>`
  display: inline-flex;
  width: 18px;
  min-width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${props => props?.color || '#000'};
  position: relative;

  &:after {
    position: absolute;
    top: 8px;
    left: 0;
    display: block;
    width: 18px;
    height: 0;
    content: "";
    transform: rotate(45deg);
    border-bottom: 2px solid #ff5151;
  }
`

export const TextColorMenu = React.memo(({editor}: TextColorMenuProps) => {
    const isActive = useActive(editor, TextColor.name);
    const [color, setColor] = useState("#000")

    const toggleActive = useCallback(
        (color: string) => {
            setColor(color)
            editor.chain().focus().setColor(color).run()
        },
        [editor]
    );

    return (
        <Popover
            trigger={"click"}
            content={<div>
                <NoStyleDiv
                    onClick={() => {
                        setColor("#000");
                        editor.chain().focus().unsetColor().run();
                    }}
                >
                    <StyleIcon/>
                    <span style={{marginLeft: 10}}>无颜色</span>
                </NoStyleDiv>
                <SketchPicker
                    color={color}
                    styles={{
                        picker: {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            boxShadow: "none",
                            width: 200
                        },
                    }}
                    onChangeComplete={(color) => {
                        toggleActive(color?.hex)
                    }}
                />
            </div>}
        >
            <Button
                type={isActive ? "primary" : "normal"}
            >
                <ColorWrapper color={color}>
                    <ImTextColor/>
                </ColorWrapper>
            </Button>
        </Popover>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

