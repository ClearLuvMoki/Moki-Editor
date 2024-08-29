import { NodeViewProps, NodeViewWrapper } from "@tiptap/react"
import deepEqual from "deep-equal"
import { memo, useEffect, useRef, useState } from "react"
import type { ExportOpts } from "@excalidraw/excalidraw/types/types";
import { svgToDataURI } from "../../utils/tools";
import { cn } from "@nextui-org/react";

const ExcalidrawNode = memo(({ node }: NodeViewProps) => {
    const { data, width, align } = node.attrs;
    const exportToSvgRef = useRef<
        | ((
            arg: Omit<ExportOpts, "getDimensions"> & {
                exportPadding?: number | undefined;
            }
        ) => Promise<SVGSVGElement>)
        | null
    >(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, toggleLoading] = useState(true);
    const [zoom, setZoom] = useState(0.40);
    const [svg, setSvg] = useState<string | null>(null);

    const wrapperClassName = cn(
        align === 'left' ? 'ml-0' : 'ml-auto',
        align === 'right' ? 'mr-0' : 'mr-auto',
        align === 'center' && 'mx-auto',
      )

    useEffect(() => {
        import("@excalidraw/excalidraw")
            .then(res => {
                // @ts-ignore
                exportToSvgRef.current = res.exportToSvg;
            })
            .catch(setError)
            .finally(() => toggleLoading(false));
    }, [toggleLoading, data]);


    useEffect(() => {
        const setContent = async () => {
            if (loading || error || !data) return;

            // @ts-ignore
            const svg: SVGElement = await exportToSvgRef.current(JSON.parse(data));
            svg.setAttribute("display", "block");
            setSvg(svgToDataURI(svg?.outerHTML));
        };

        setContent();
    }, [data, loading, error]);

    return (
        <NodeViewWrapper>
            <div
                style={{
                    width
                }}
                className={cn("max-w-full aspect-[3/1] overflow-hidden border-1.5 border-zinc-300 rounded-lg", wrapperClassName)}
            >
                {!loading && !error && (
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
                )}
            </div>
        </NodeViewWrapper>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, { strict: true })
})

export default ExcalidrawNode;