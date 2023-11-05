import {NodeViewWrapper, NodeViewProps} from "@tiptap/react";
import deepEqual from "deep-equal";
import styled from "styled-components";
import React from "react";
import {Excalidraw} from "@excalidraw/excalidraw";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 200px;
  border: 2px solid rgb(222, 224, 227);
  border-radius: 4px;
`


const DrawView = React.memo(() => {
    return (
        <NodeViewWrapper>
            <StyledContainer
            >
                <Excalidraw/>
            </StyledContainer>
        </NodeViewWrapper>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
})

export default DrawView;
