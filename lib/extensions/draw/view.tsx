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
import {Draw} from "./core.ts";
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
                <Popover
                    overlayInnerStyle={{
                        padding: 2
                    }}
                    content={
                        <Space>
                            <Button
                                style={{width: 20, height: 20}}
                                onClick={() => {
                                    handleDrawAction(editor)
                                }}
                            >
                                <AiOutlineEdit/>
                            </Button>
                            <Button
                                style={{width: 20, height: 20}}
                                onClick={() => {
                                    copyNode(editor, Draw.name)
                                }}
                            >
                                <FiCopy/>
                            </Button>
                            <Divider type={"vertical"} style={{margin: "0px 1px"}}/>
                            <Button
                                style={{width: 20, height: 20}}
                                onClick={() => {
                                    deleteNode(editor, Draw.name)
                                }}
                            >
                                <AiOutlineDelete/>
                            </Button>
                        </Space>
                    }
                >
                    <StyledContainer
                    >
                        <img src={svg}/>
                    </StyledContainer>
                </Popover>
            </ResizableBox>
        </NodeViewWrapper>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
})

export default DrawView;
