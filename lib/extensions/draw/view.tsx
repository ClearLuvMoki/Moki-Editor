import {NodeViewWrapper, NodeViewProps} from "@tiptap/react";
import deepEqual from "deep-equal";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {exportToSvg} from "@excalidraw/excalidraw";
import {svgToDataURI} from "../../utils";
import ResizableBox from "../../components/ResizableBox";

const StyledContainer = styled.div`
  width: 100%;
  height: 200px;
  min-height: 200px;
  border: 2px solid rgb(222, 224, 227);
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
  }
`


const DrawView = React.memo((
    {
        node,
    }: NodeViewProps) => {
    const {data, width, height} = node.attrs;
    const [svg, setSvg] = useState<any>(null);


    useEffect(() => {
        if (!data) return;
        exportToSvg(JSON.parse(data))
            .then((svgElement) => {
                svgElement.setAttribute("display", "block")
                setSvg(svgToDataURI(svgElement.outerHTML))
            })
    }, [data]);


    return (
        <NodeViewWrapper>
            <ResizableBox
                width={width}
                height={height}
                onResizeStop={() => {
                    
                }}
            >
                <StyledContainer
                >
                    <img src={svg}/>
                </StyledContainer>
            </ResizableBox>
        </NodeViewWrapper>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
})

export default DrawView;
