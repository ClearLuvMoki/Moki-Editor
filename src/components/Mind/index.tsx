import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import MindMap from "simple-mind-map";
import ContextMenu, { ContextMenuClickType, ContextMenuProps } from "./components/ContextMenu";
import { Provider } from "./context";

const Mind = () => {
    const mindRef = useRef<MindMap | null>(null);
    const containerRef = useRef<HTMLDivElement>(null)
    const [currentNode, setCurrentNode] = useState(null)
    const [menu, setMenu] = useState<ContextMenuProps | null>(null)

    useEffect(() => {
        // @ts-ignore
        mindRef.current = new MindMap({
            el: containerRef.current!,
            enableFreeDrag: true,
            data: {
                "data": {
                    "text": "中心节点"
                },
                "children": []
            }
        });
        mindRef.current.on('node_contextmenu', (e, node) => {
            setCurrentNode(node)
            setMenu({
                id: node.uid,
                top: e.clientY + 10,
                left: e.clientX + 10,
            })
        })
        mindRef.current.on('node_click', hide)
        mindRef.current.on('draw_click', hide)
        mindRef.current.on('expand_btn_click', hide)
    }, [])

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

    return (
        <Provider
            mindMapRef={mindRef}
        >
            <div ref={containerRef} className="w-full h-full" />
            {menu && (<ContextMenu
                {...menu}
                onClick={handleClickMenuActions}
            />)}
        </Provider>
    )
}

export default Mind;