import React, {useEffect, useRef, useState} from 'react';
import {NodeViewWrapper} from "@tiptap/react";
import {ExportOpts} from "@excalidraw/excalidraw/types/types";
import {Button, Image, Spinner} from "@nextui-org/react";
import {DraftingCompass, ZoomIn, ZoomOut} from "lucide-react";
import {clamp, svgToDataURI} from "../utils/svg-to-url";

const ExcalidrawNode = (
    {
        node,
    }) => {
    const exportToSvgRef = useRef<
        | ((
        arg: Omit<ExportOpts, "getDimensions"> & {
            exportPadding?: number | undefined;
        }
    ) => Promise<SVGSVGElement>)
        | null
    >(null);
    const {data, width, height} = node.attrs;
    const [svg, setSvg] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [zoom, setZoom] = useState(0.25);


    useEffect(() => {
        import("@excalidraw/excalidraw")
            .then(res => {
                // @ts-ignore
                exportToSvgRef.current = res.exportToSvg;
            })
            .catch(setError)
            .finally(() => setLoading(false));
    }, [setLoading, data]);

    useEffect(() => {
        const setContent = async () => {
            if (loading || error || !data) return;

            // @ts-ignore
            const svg: SVGElement = await exportToSvgRef.current(data);
            svg.setAttribute("display", "block");
            setSvg(svgToDataURI(svg?.outerHTML));
        };

        setContent();
    }, [data, loading, error]);


    const onZoom = (type: "in" | "out") => {
        setZoom(currentZoom => {
            const nextZoom = clamp(
                type === "out" ? currentZoom - 0.15 : currentZoom + 0.15,
                0.1,
                2
            );
            return nextZoom;
        });
    }

    return (
        <NodeViewWrapper>
            <div
                style={{
                    width,
                    height
                }}
                className="relative w-full max-w-full border-1 border-zinc-300 rounded-xl overflow-hidden my-2 flex items-center justify-center"
            >
                <div
                    className="absolute top-4 left-4 px-2 py-1 rounded-xl bg-yellow-500 flex items-center justify-center gap-2 text-white z-20">
                    <DraftingCompass size={18}/>
                    <span className="text-small">Excalidraw</span>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-1 z-20">
                    <Button isIconOnly size="sm" onPress={() => onZoom("out")}><ZoomOut/></Button>
                    <Button isIconOnly size="sm" onPress={() => onZoom("in")}><ZoomIn/></Button>
                </div>
                {loading && <Spinner color="default"/>}
                {!loading && !error && (
                    <div
                        style={{
                            zIndex: 0,
                            height: "auto",
                            minHeight: 200,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: `scale(${zoom})`,
                            transition: `transform ease-in-out .2s`
                        }}>
                        {svg ? <Image src={svg} className="w-full h-auto"/> : null}
                    </div>
                )}
            </div>
        </NodeViewWrapper>
    );
};

export default ExcalidrawNode;
