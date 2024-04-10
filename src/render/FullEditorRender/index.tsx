import {EditorContent, useEditor} from '@tiptap/react'
import {Bold, Document, Paragraph, Text} from "../../extensions"
import {StyledContainer, StyledEditor} from "./styled"
import ToolBar from "../../compoents/ToolBar";


const FullEditorRender = () => {
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Bold
        ],
    })


    return <GlobalContextProvider>
        <StyledContainer>
            <ToolBar/>
            <StyledEditor>
                <EditorContent
                    editor={editor}
                />
            </StyledEditor>
        </StyledContainer>
    </GlobalContextProvider>
}

export default FullEditorRender;
