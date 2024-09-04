import { memo, useEffect, useRef, useState } from "react"
import { cn } from "@nextui-org/react";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react"
import deepEqual from "deep-equal"
import { useSize } from "ahooks";
import Mind, { MindMapRefHandleType } from "../../components/Mind";

const MindNode = memo(({ node }: NodeViewProps) => {
    const { width, align, data } = node.attrs;
    const [loading, setLoading] = useState(true);
    const wrapperRef = useRef<HTMLDivElement>(null)
    const mindRef = useRef<MindMapRefHandleType>(null)
    const size = useSize(wrapperRef)

    console.log(data, "node data")

    useEffect(() => {
        size?.height && setLoading(false)
    }, [size?.height])

    useEffect(() => {
        data && mindRef.current?.setFullData(data)
    }, [data, mindRef.current])

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
                ref={wrapperRef}
                className={cn("max-w-full aspect-[3/1] overflow-hidden border-1.5 border-zinc-300 rounded-lg", wrapperClassName)}
            >
                {
                    !loading && (
                        <Mind
                            ref={mindRef}
                            readonly={true}
                            data={data}
                        />
                    )
                }
            </div>
        </NodeViewWrapper>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, { strict: true })
})
export default MindNode;