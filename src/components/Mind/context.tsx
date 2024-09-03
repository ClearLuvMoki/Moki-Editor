import React, { createContext } from "react";
import MindMap from "simple-mind-map";

interface ContextState {
    mindMapRef: React.MutableRefObject<MindMap | null>;
}

export const Context = createContext<ContextState | null>(null);

export const Provider = ({ children, mindMapRef }: ContextState & { children: React.ReactNode }) => {
    return (
        <Context.Provider
            value={{
                mindMapRef,
            }}
        >
            {children}
        </Context.Provider>
    )
}