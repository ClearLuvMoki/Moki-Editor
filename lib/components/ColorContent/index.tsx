import React from 'react';
import deepEqual from "deep-equal";
import styled from "styled-components";
import {Colors} from "./constant"

const StyleContainer = styled.div`
  width: 250px;
  height: 200px;
  user-select: none;
`
const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: background-color .2s;

  &:hover {
    background-color: rgba(46, 50, 56, .1);
  }
`

const StyledColorWrapper = styled.div<{ color?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background-color: ${props => props.color || "#fff"};
  position: relative;
  border: 1px solid rgba(28, 31, 35, .2);
  transition: all .2s;
  cursor: pointer;

  &:hover {
    scale: .9;
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
`

interface ColorContent {
    defaultColor?: string;
    onColorChange?: (color: string) => void;
}

const ColorContent = React.memo(({defaultColor = "#000", onColorChange}: ColorContent) => {
    return (
        <StyleContainer>
            <StyledContent>
                {
                    Colors.map(color => (
                        <StyledColorWrapper
                            color={color}
                            key={color}
                            onClick={() => {
                                onColorChange && onColorChange(color)
                            }}
                        />
                    ))
                }
            </StyledContent>
            <StyledFooter
                onClick={() => {
                    onColorChange && onColorChange(defaultColor)
                }}
            >
                <span>恢复默认</span>
            </StyledFooter>
        </StyleContainer>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default ColorContent;
