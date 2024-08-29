import { useRef } from 'react';
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
    ListKeymap, MultiColumn, MultiColumns, Focus,
    Image, ImageBlock, ImageUpload,HorizontalRule
} from "../../extensions"
import ToolBar from "../../components/tool-bar";
import GlobalContextProvider from "./context";
import {TableRowMenu,TableColumnMenu,ColumnsBubbleMenu, ImageBlockMenu} from "../../bubble-menu";


const FullEditorRender = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const editor = useEditor({
        extensions: [
            Document,
            MultiColumn,
            MultiColumns,
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
            Placeholder.configure({
                includeChildren: true,
                showOnlyCurrent: false,
                placeholder: () => '',
            }),
            Slash,
            Table,
            TableHeader,
            TableCell,
            TableRow,
            Gapursor,
            TaskList,
            TaskItem,
            ListKeymap,
            Focus,
            Image,
            ImageBlock, 
            ImageUpload,
            HorizontalRule
        ],
    })


    return <GlobalContextProvider
        editor={editor}
    >
        <div className="w-full h-full">
            <ToolBar/>
            <div className="moki-editor-container" ref={containerRef}>
                <EditorContent
                    editor={editor}
                />
                <TableRowMenu editor={editor} appendTo={containerRef}/>
                <TableColumnMenu editor={editor} appendTo={containerRef}/>
                <ColumnsBubbleMenu editor={editor} appendTo={containerRef}/>
                <ImageBlockMenu editor={editor} appendTo={containerRef}/>
            </div>
        </div>
    </GlobalContextProvider>
}

export default FullEditorRender;
