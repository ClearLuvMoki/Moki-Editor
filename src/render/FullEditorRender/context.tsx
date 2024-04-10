import React, {createContext} from "react";
import {Editor} from "@tiptap/react";


interface Props {
    children: React.ReactNode;
}

interface ContextState {
    editor: Editor;
}

const Context = createContext<ContextState>(null);

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
