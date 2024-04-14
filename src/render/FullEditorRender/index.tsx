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
    BulletList,
    TextStyle,
    Color,
    Highlight,
    Heading,
    Blockquote,
    History,
    CodeBlockLowlight,
    Placeholder,
    Slash,
    TableRow,
    Table,
    TableHeader,
    TableCell,
    Gapursor,
    TaskList,
    TaskItem,
    ListKeymap,
} from "../../extensions"
import {StyledContainer, StyledEditor} from "./styled"
import ToolBar from "../../compoents/ToolBar";
import GlobalContextProvider from "./context";


const FullEditorRender = () => {
    const editor = useEditor({
        extensions: [
            Document,
            Heading,
            Paragraph,
            Text,
            TextStyle,
            Bold,
            Italic,
            Underline,
            Code,
            Strike,
            Subscript,
            Superscript,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left', 'right', 'center'],
            }),
            OrderedList,
            BulletList,
            ListItem,
            Color,
            Highlight.configure({
                multicolor: true,
            }),
            Blockquote,
            History.configure({
                depth: 50,
            }),
            CodeBlockLowlight,
            Placeholder,
            Slash,
            Table,
            TableHeader,
            TableCell,
            TableRow,
            Gapursor,
            TaskList,
            TaskItem,
            ListKeymap
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
