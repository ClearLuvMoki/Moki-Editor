import {useState} from 'react'
import {EditorRender, Editor} from "../lib"
import {
    Bold,
    Italic,
    Underline,
    Strike,
    Blockquote,
    InlineCode,
    Subscript,
    Superscript,
    TextAlign,
    BulletList,
    ListItem,
} from "../lib/extensions"

function App() {
    const [editor, setEditor] = useState<Editor | null>(null);

    return (
        <EditorRender
            ref={setEditor}
            extensions={[
                Bold,
                Italic,
                Underline,
                Strike,
                Blockquote,
                InlineCode,
                Subscript,
                Superscript,
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
                ListItem,
                BulletList,
            ]}
        />
    )
}

export default App
