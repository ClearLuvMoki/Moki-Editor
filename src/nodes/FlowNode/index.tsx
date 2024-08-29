import { cn } from "@nextui-org/react";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react"
import deepEqual from "deep-equal"
import { memo, useState } from "react"

const FlowNode = memo(({ node }: NodeViewProps) => {
    const { width, align, svg } = node.attrs;
    const [zoom, setZoom] = useState(0.40);
    
    const wrapperClassName = cn(
        align === 'left' ? 'ml-0' : 'ml-auto',
        align === 'right' ? 'mr-0' : 'mr-auto',
        align === 'center' && 'mx-auto',
    )

    return (
        <NodeViewWrapper>
            <div
                style={{
                    width
                }}
                className={cn("max-w-full aspect-[3/1] overflow-hidden border-1.5 border-zinc-300 rounded-lg", wrapperClassName)}
            >
                <div
                    style={{
                        height: "100%",
                        maxHeight: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: `scale(${zoom})`,
                        transition: `transform ease-in-out .2s`
                    }}>
                    {svg ? <img src={svg} /> : null}
                </div>
            </div>
        </NodeViewWrapper>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, { strict: true })
})
export default FlowNode;