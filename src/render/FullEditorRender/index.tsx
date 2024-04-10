import { EditorContent, useEditor } from '@tiptap/react'
import { Document, Paragraph, Text } from "../../extensions"
import {StyledContainer} from "./styled"


const FullEditorRender = () => {
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
        ],
    })


    return <StyledContainer>
        <EditorContent
            editor={editor}
        />
        
    </StyledContainer>
}

export default FullEditorRender;
