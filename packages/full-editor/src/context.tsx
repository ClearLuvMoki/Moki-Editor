import React, { createContext } from "react";
import type { Editor } from "@moki-editor/editor";


interface Props {
    children: React.ReactNode;
}

export interface ExcalidrawModalState {
    open: boolean;
    data: {
        blockId: string;
        excalidrawData: null
    } | null
}

export interface FlowModalState {
    open: boolean;
    data: {
        blockId: string;
        flowData: string
    } | null
}


export interface MindModalState {
    open: boolean;
    data: {
        blockId: string;
        mindData: string
    } | null
}

interface ContextState {
    editor: Editor | null;
    excalidrawModalState: ExcalidrawModalState | null;
    setExcalidrawModalState: React.Dispatch<ExcalidrawModalState> | null;
    flowModalState: FlowModalState | null;
    setFlowModalState: React.Dispatch<FlowModalState> | null;
    mindModalState: MindModalState | null;
    setMindModalState: React.Dispatch<MindModalState> | null;
}

// @ts-ignore
export const Context = createContext<ContextState>(null);

const GlobalContextProvider = ({ editor, excalidrawModalState, setExcalidrawModalState, flowModalState, setFlowModalState, mindModalState, setMindModalState, children }: ContextState & Props) => {

    return <Context.Provider
        value={{
            editor,
            excalidrawModalState,
            setExcalidrawModalState,
            flowModalState,
            setFlowModalState,
            mindModalState,
            setMindModalState
        }}
    >
        {children}
    </Context.Provider>
}

export default GlobalContextProvider;