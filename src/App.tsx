import {useState} from 'react'
import {
    EditorRender,
    Editor,
} from "../lib"
import {content} from "./content.ts";


function App() {
    const [editor, setEditor] = useState<Editor>();

    return (
        <EditorRender
            ref={setEditor}
            content={content}
        >
        </EditorRender>
    )
}

export default App
