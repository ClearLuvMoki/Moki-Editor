import React, {useCallback, useMemo} from 'react';
import deepEqual from "deep-equal";
import {Resizable, ResizeCallback} from 're-resizable';
import styled from "styled-components";
import {Editor} from "@tiptap/core";
import {throttle} from "../../utils";
import { NodeSelection } from "prosemirror-state";

interface ResizableBoxProps {
    editor: Editor;
    width: string | number;
    height: string | number;
    minHeight?: string | number;
    getPos: () => number;
    children: React.ReactNode;
    onResizeStop: ({width, height}: { width: string | number; height: string | number }) => void;
}

const StyledResizableBox = styled(Resizable)`
  transition: all .2s;
  z-index: 100;

  &:hover {
    border: 1px solid #0065ff;
  }
`

const ResizableBox = React.memo((
    {
        editor,
        width,
        height,
        minHeight,
        getPos,
        onResizeStop,
        children
    }: ResizableBoxProps) => {


    const onResize = useMemo(
        () =>
            throttle(() => {
                const {view, state} = editor;

                const tr = editor.state.tr;
                const $pos = state.doc.resolve(getPos());
                tr.setSelection(NodeSelection.near($pos));
                tr.setMeta("addToHistory", false);
                view.dispatch(tr);
            }, 100),
        [editor, getPos]
    );

    const resizeStop = useCallback<ResizeCallback>(
        (_, __, element) => {
            const width = element.style.width;
            const height = element.style.height;
            onResizeStop({width, height});
        },
        [onResizeStop]
    );


    return (
        <StyledResizableBox
            size={{
                width, height
            }}
            minHeight={minHeight}
            onResizeStop={resizeStop}
            maxWidth={"100%"}
            onResize={onResize}
        >
            {children}
        </StyledResizableBox>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default ResizableBox;
