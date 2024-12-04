import React, {createContext} from "react";
import type {Editor} from "@tiptap/react";
import {UploadParamsType} from "../../domains/types/upload";
import {SetState} from "ahooks/lib/useSetState";
import {AppState, BinaryFiles} from "@excalidraw/excalidraw/types/types";
import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types";

interface Props {
    children: React.ReactNode;
}

export interface ExcalidrawModalState {
    open: boolean;
    data: {
        blockId: string;
        excalidrawData: {
            elements: readonly ExcalidrawElement[],
            appState?: AppState,
            files?: BinaryFiles,
        }
    }
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
    onUploadFile?: (params: UploadParamsType) => Promise<string>;
    excalidrawModalState: ExcalidrawModalState;
    setExcalidrawModalState: SetState<ExcalidrawModalState>;
    // flowModalState: FlowModalState | null;
    // setFlowModalState: React.Dispatch<FlowModalState> | null;
    // mindModalState: MindModalState | null;
    // setMindModalState: React.Dispatch<MindModalState> | null;
}

// @ts-ignore
export const Context = createContext<ContextState>(null);

const GlobalContextProvider = (
    {
        editor,
        onUploadFile,
        excalidrawModalState,
        setExcalidrawModalState,
        children
    }: ContextState & Props) => {

    return <Context.Provider
        value={{
            editor,
            excalidrawModalState,
            setExcalidrawModalState,
            onUploadFile
        }}
    >
        {children}
    </Context.Provider>
}

export default GlobalContextProvider;