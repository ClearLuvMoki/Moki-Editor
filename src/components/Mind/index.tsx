import React, { forwardRef, memo, useCallback, useImperativeHandle } from "react";
import { useEffect, useRef, useState } from "react";
import MindMap from "simple-mind-map";
import { useSetState } from "ahooks"
import ContextMenu, { ContextMenuClickType, ContextMenuProps } from "./components/ContextMenu";
import { Provider } from "./context";
import Toolbar from "./components/toolbar";
import deepEqual from "deep-equal";

// @ts-ignore
import Export from 'simple-mind-map/src/plugins/Export.js'

MindMap.usePlugin(Export);

interface Props {
    data?: any;
    readonly?: boolean;
    style?: React.CSSProperties;
}

type ExportType = "png" | "svg" | "json"
export interface MindMapRefHandleType {
    export: (type: ExportType) => Promise<string>;
    setFullData: (data: any) => void;
}

const Mind = memo(forwardRef<MindMapRefHandleType, Props>(({ data, readonly, style }, ref) => {
    const mindRef = useRef<MindMap | null>(null);
    const containerRef = useRef<HTMLDivElement>(null)
    const [currentNode, setCurrentNode] = useState(null)
    const [theme, setTheme] = useState("")
    const [layout, setLayout] = useState("")
    const [historyState, setHistortState] = useSetState({
        isCanBackward: false,
        isCanForward: false
    })
    const [menu, setMenu] = useState<ContextMenuProps | null>(null)

    useEffect(() => {
        // @ts-ignore
        mindRef.current = new MindMap({
            el: containerRef.current!,
            enableFreeDrag: true,
            readonly: readonly || false,
        });
        mindRef.current.on('node_contextmenu', (e: any, node: any) => {
            setCurrentNode(node)
            setMenu({
                id: node.uid,
                top: e.clientY + 10,
                left: e.clientX + 10,
            })
        })
        mindRef.current?.on('back_forward', (index: number, len: number) => {
            setHistortState({
                isCanBackward: index <= 0,
                isCanForward: index >= len - 1
            })
        })
        if (data) {
            mindRef?.current?.setFullData(data);
        }
        mindRef.current.on('node_click', hide)
        mindRef.current.on('draw_click', hide)
        mindRef.current.on('expand_btn_click', hide)
        setTheme(mindRef.current?.getTheme())
        setLayout(mindRef.current?.getLayout())
    }, [readonly])

    const hide = () => {
        setMenu(null);
        setCurrentNode(null)
    }

    const handleClickMenuActions = useCallback((type: ContextMenuClickType) => {
        switch (type) {
            case "add-child-node":
                mindRef?.current?.execCommand('INSERT_CHILD_NODE')
                break;
            default:
                break;
        }
        hide();
    }, [mindRef?.current])

    useImperativeHandle(ref, () => ({
        export(type: ExportType) {
            // @ts-ignore
            return mindRef?.current?.doExport?.[type]();
        },
        setFullData(data: any) {
            return mindRef?.current?.setFullData(data);
        }
    }))

    return (
        <Provider
            mindMapRef={mindRef}
            historyState={historyState}
            theme={theme}
            layout={layout}
            setLayout={setLayout}
            setTheme={setTheme}
            setHistortState={setHistortState}
        >
            {!readonly && (<Toolbar />)}
            <div ref={containerRef} className="w-full h-full" style={style} />
            {menu && (<ContextMenu
                {...menu}
                onClick={handleClickMenuActions}
            />)}
        </Provider>
    )
}), (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, { strict: true })
})

export default Mind;