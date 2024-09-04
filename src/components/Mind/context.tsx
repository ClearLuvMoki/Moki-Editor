import { SetState } from "ahooks/lib/useSetState";
import React, { createContext } from "react";
import MindMap from "simple-mind-map";

interface ContextState {
    mindMapRef: React.MutableRefObject<MindMap | null>;
    theme: string;
    layout: string;
    historyState: {
        isCanBackward: boolean;
        isCanForward: boolean;
    }
    setLayout: React.Dispatch<string>;
    setTheme: React.Dispatch<string>;
    setHistortState: SetState<{
        isCanBackward: boolean;
        isCanForward: boolean;
    }>
}

// @ts-ignore
export const Context = createContext<ContextState>(undefined);

export const Provider = ({ children, mindMapRef, historyState, setHistortState, theme, setTheme, layout, setLayout }: ContextState & { children: React.ReactNode }) => {
    return (
        <Context.Provider
            value={{
                mindMapRef,
                historyState,
                theme,
                layout,
                setHistortState,
                setTheme,
                setLayout
            }}
        >
            {children}
        </Context.Provider>
    )
}