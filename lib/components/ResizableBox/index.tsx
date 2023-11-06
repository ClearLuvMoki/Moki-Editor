import React from 'react';
import deepEqual from "deep-equal";
import {Resizable} from 're-resizable';

interface ResizableBoxProps {
    children: React.ReactNode;
}

const ResizableBox = React.memo(({children}: ResizableBoxProps) => {
    return (
        <Resizable>
            {children}
        </Resizable>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default ResizableBox;
