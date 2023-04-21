import {
    BoldMenu, Bold,
    ItalicMenu, Italic,
    UnderlineStaticMenu, Underline,
    StrikethroughMenu, Strike,
    BlockquoteMenu, Blockquote
} from "../lib/EditorExtensions";
import type { Editor } from "../lib/EditorRender"
import EditorRender from "../lib/EditorRender";
import React, {useState} from "react";
import "../lib/Styles/index.less"

function App() {
    const [editor, setEditor] = useState<Editor | null>(null);

  return (
    <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "50px",  width: "100%", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 5px 10px -5px #ccc"}}>
            {
                editor && (
                    <React.Fragment>
                        <BoldMenu editor={editor}/>
                        <ItalicMenu editor={editor}/>
                        <UnderlineStaticMenu editor={editor}/>
                        <StrikethroughMenu editor={editor}/>
                        <BlockquoteMenu editor={editor}/>
                    </React.Fragment>
                )
            }
        </div>
        <EditorRender
            ref={setEditor}
            schema="block+"
            extensions={[
                Bold,
                Italic,
                Underline,
                Strike,
                Blockquote
            ]}
        />
    </div>
  )
}

export default App
