import React, {createContext} from "react";
import {Editor} from "@tiptap/react";


interface Props {
    children: React.ReactNode;
}

interface ContextState {
    editor: Editor | null;
}

export const Context = createContext<ContextState>({
    editor: null
});

const GlobalContextProvider = ({editor, children}: ContextState & Props) => {
    return <Context.Provider
        value={{
            editor
        }}
    >
        {children}
    </Context.Provider>
}

export default GlobalContextProvider;
