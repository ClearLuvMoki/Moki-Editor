import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface FullEditorProps {
    classNames?: {
        root?: string;
        toolbar?: string;
        editor?: string;
    };
    styles?: {
        root?: React.CSSProperties;
        toolbar?: React.CSSProperties;
        editor?: React.CSSProperties;
    }
}

declare const FullEditor: React.MemoExoticComponent<(props: FullEditorProps) => react_jsx_runtime.JSX.Element>;

export { FullEditor };
