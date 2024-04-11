import {EditorContent, useEditor} from '@tiptap/react'
import {
    Bold,
    Document,
    Italic,
    Paragraph,
    Text,
    Underline,
    Code,
    Strike,
    Subscript,
    Superscript,
    TextAlign,
    OrderedList,
    ListItem,
    BulletList
} from "../../extensions"
import {StyledContainer, StyledEditor} from "./styled"
import ToolBar from "../../compoents/ToolBar";
import GlobalContextProvider from "./context";


const FullEditorRender = () => {
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Bold,
            Italic,
            Underline,
            Code,
            Strike,
            Subscript,
            Superscript,
            TextAlign,
            OrderedList,
            BulletList,
            ListItem,
        ],
    })


    return <GlobalContextProvider
        editor={editor}
    >
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
