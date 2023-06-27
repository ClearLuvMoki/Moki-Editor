import React, {useCallback, useState} from 'react';
import {Button} from "../../components";
import {LuHighlighter} from "react-icons/lu"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {Highlight} from "./core"
import deepEqual from "deep-equal";
import {Popover} from "@arco-design/web-react"
import {SketchPicker} from 'react-color';
import styled from "styled-components";
import ColorWrapper from "../../components/ColorWrapper";


type HighlightMenuProps = {
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
  background-color: ${props => props?.color || '#fff'};
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

export const HighlightMenu = React.memo(({editor}: HighlightMenuProps) => {
    const isActive = useActive(editor, Highlight.name);
    const [color, setColor] = useState("#fff")

    const toggleActive = useCallback(
        (color: string) => {
            setColor(color)
            editor.chain().focus().toggleHighlight({color: color}).run()
        },
        [editor]
    );

    return (
        <Popover
            trigger={"click"}
            content={<div>
                <NoStyleDiv
                    onClick={() => {
                        setColor("#fff");
                        editor.chain().focus().unsetHighlight().run();
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
                    <LuHighlighter/>
                </ColorWrapper>
            </Button>
        </Popover>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

