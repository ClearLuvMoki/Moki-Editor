import { v4 as uuid } from 'uuid'
import { Node as NodeType, Position } from '@xyflow/react';


export interface EdgeType {
    type: "straight" | "step" | "smoothstep" | "bezier" | "floating";
    source: string;
    target: string;
    id: string;
    label: string;
}

export const onCreateNode = (sourceId?: string, position?: { top: number, left: number }): {
    edge: EdgeType | null,
    node: NodeType
} => {
    console.log(position?.top, 'position?.top')
    const nodeId = uuid();
    const edgeId = uuid();
    let edge: EdgeType | null = null;
    if (sourceId) {
        edge = {
            id: edgeId,
            source: sourceId,
            target: nodeId,
            label: "",
            type: "floating"
        }
    }
    let node: NodeType = {
        id: nodeId,
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        position: {
            x: (position?.left || 0) + 20 || 20,
            y: position?.top || 0,
        },
        data: { label: `子节点` },
        style: { border: "2px solid #777", color: "#000", backgroundColor: "rgb(239, 238, 246)", padding: 2 }
    }

    return {
        node,
        edge
    }
}