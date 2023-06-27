import {useState} from 'react'
import {
    EditorRender,
    Editor,
} from "../lib"
import {content} from "./content.ts";


function App() {
    const [editor, setEditor] = useState<Editor | null>(null);


    return (
        <EditorRender
            ref={setEditor}
            content={content}
        />
    )
}

export default App
