import {useState} from 'react'
import {EditorRender} from "../lib/editor"
import {
    Bold,
    Italic,
    Underline,
    Strike,
    Blockquote,
    InLineCode,
    Subscript,
    Superscript,
    TextAlign,
    BulletList,
    ListItem,
} from "../lib/extensions"

function App() {
    const [editor, setEditor] = useState<null>(null);

    return (
        <>
            <EditorRender
                ref={setEditor}
                schema="block+"
                content={{}}
                extensions={[Bold, Italic, Underline, Strike, Blockquote, InLineCode, Subscript, Superscript,
                    TextAlign.configure({
                        types: ['heading', 'paragraph'],
                    }),
                    ListItem,
                    BulletList,
                ]}
            />
        </>
    )
}

export default App
