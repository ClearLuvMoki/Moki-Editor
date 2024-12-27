import React, {useEffect, useRef} from 'react';
import {NodeViewProps, NodeViewWrapper} from "@tiptap/react";
import {NodeSelection} from "@tiptap/pm/state";

const IframeNode = (
    {
        editor,
        node,
        updateAttributes,
        getPos,
    }: NodeViewProps) => {
    const timerRef = useRef<number>(-1);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const {url, width, height} = node.attrs;


    useEffect(() => {
        const handler = () => {
            const isActive = document.activeElement === iframeRef.current;

            if (isActive) {
                editor.view.dispatch(
                    editor.state.tr.setSelection(
                        NodeSelection.create(editor.state.doc, getPos())
                    )
                );
            }

            timerRef.current = requestIdleCallback(handler);
        };

        timerRef.current = requestIdleCallback(handler);

        return () => {
            cancelIdleCallback(timerRef.current);
        };
    }, [editor, getPos]);

    return (
        <NodeViewWrapper>
            <div
                style={{
                    width: `${width}%`,
                    height: `${height}px`

                }}
                className="flex justify-center items-center overflow-hidden rounded border border-zinc-500">
                {url ? (
                    <iframe ref={iframeRef} src={url} className="outline-none border-0 w-full h-full"/>
                ) : (
                    <div className="flex justify-center items-center text-zinc-500">
                        <span>No url</span>
                    </div>
                )}
            </div>
        </NodeViewWrapper>
    );
};

export default IframeNode;
