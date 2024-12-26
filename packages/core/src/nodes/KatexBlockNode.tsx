import "katex/dist/katex.min.css";
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import katex from "katex";

const KatexBlockNode = ({node, updateAttributes, selected}: any) => {
    const [isShowMath, setIsShowMath] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const text = node?.attrs?.text || "";

    console.log(selected, 'selected')


    // useEffect(() => {
    //     isShowMath && text && katex.render(text, containerRef.current as HTMLInputElement);
    // }, [isShowMath]);
    const renderMath = useCallback((content: string) => {
        try {
            if (containerRef?.current)
                katex.render(content, containerRef.current, {
                    globalGroup: true,
                    throwOnError: false
                });
        } catch (e) {
            console.warn(e);
        }
    }, []);

    return (
        <NodeViewWrapper
            style={{
                display: "inline-block"
            }}
        >
            {selected && <NodeViewContent />}
            {!selected && (
                <div
                    ref={containerRef}
                    className="inline-block rounded cursor-pointer transition px-1 outline-none focus:bg-zinc-200 hover:bg-zinc-200"
                >
                    1212
                </div>
            )}
        </NodeViewWrapper>
    );
};

export default KatexBlockNode;
