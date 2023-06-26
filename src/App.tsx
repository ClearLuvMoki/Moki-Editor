import {useState} from 'react'
import {
    EditorRender,
    Editor,
} from "../lib"

function App() {
    const [editor, setEditor] = useState<Editor | null>(null);

    return (
        <EditorRender
            ref={setEditor}
        />
    )
}

export default App
