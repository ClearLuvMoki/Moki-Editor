import React, {useCallback} from 'react';
import deepEqual from "deep-equal";
import {Resizable, ResizeCallback} from 're-resizable';

interface ResizableBoxProps {
    width: string | number;
    height: string | number;
    children: React.ReactNode;
    onResizeStop: ({width, height}: { width: string | number; height: string | number }) => void;
}

const ResizableBox = React.memo(({width, height, onResizeStop, children}: ResizableBoxProps) => {


    const resizeStop = useCallback<ResizeCallback>(
        (_, __, element) => {
            const width = parseInt(element.style.width);
            const height = parseInt(element.style.height);
            onResizeStop({width, height});
        },
        [onResizeStop]
    );


    return (
        <Resizable
            size={{
                width, height
            }}
            onResizeStop={resizeStop}
        >
            {children}
        </Resizable>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default ResizableBox;
