import {useState} from 'react'
import {EditorRender} from "../lib/editor"

function App() {
    const [editor, setEditor] = useState<null>(null);

    return (
        <>
            <EditorRender
                ref={setEditor}
                schema="block+"
                content={{}}
                extensions={[]}
            />
        </>
    )
}

export default App
