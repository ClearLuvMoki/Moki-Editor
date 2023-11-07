import {NodeViewWrapper, NodeViewProps} from "@tiptap/react";
import deepEqual from "deep-equal";
import styled from "styled-components";
import React, {useCallback, useEffect, useState} from "react";
import {exportToSvg} from "@excalidraw/excalidraw";
import {svgToDataURI} from "../../utils";
import ResizableBox from "../../components/ResizableBox";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border: 3px solid rgb(222, 224, 227);
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`


const DrawView = React.memo((
    {
        editor,
        getPos,
        node,
        updateAttributes
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

    const onResize = useCallback((size: { width: string | number; height: string | number }) => {
        updateAttributes({width: size.width, height: size.height});
    }, [updateAttributes])


    return (
        <NodeViewWrapper>
            <ResizableBox
                width={width}
                height={height}
                getPos={getPos}
                editor={editor}
                onResizeStop={(size) => {
                    onResize(size)
                }}
                minHeight={206}
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
