import {NodeViewWrapper, NodeViewProps} from "@tiptap/react";
import deepEqual from "deep-equal";
import styled from "styled-components";
import React, {useCallback, useEffect, useState} from "react";
import {exportToSvg} from "@excalidraw/excalidraw";
import {copyNode, deleteNode, svgToDataURI} from "../../utils";
import ResizableBox from "../../components/ResizableBox";
import {Divider, Popover, Space} from "antd";
import {Button} from "../../components";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import {FiCopy} from "react-icons/fi";
import {Flow} from "./core.ts";
import {handleDrawAction} from "./edit.tsx";

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


const FlowView = React.memo((
    {
        editor,
        getPos,
        node,
        updateAttributes
    }: NodeViewProps) => {
    const {data, width, height} = node.attrs;
    const [svg, setSvg] = useState<any>(null);


    return (
        <NodeViewWrapper>
            <span>222222</span>
        </NodeViewWrapper>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
})

export default FlowView;
