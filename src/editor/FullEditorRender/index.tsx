import { useRef, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react'
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
    Image, ImageBlock, ImageUpload, HorizontalRule, Excalidraw, Flow
} from "../../extensions"
import ToolBar from "../../components/tool-bar";
import GlobalContextProvider, { ExcalidrawModalState, FlowModalState } from "./context";
import { TableRowMenu, TableColumnMenu, ColumnsBubbleMenu, ImageBlockMenu, ExcalidrawBubbleMenu, FlowBubbleMnu } from "../../bubble-menu";
import { ExcalidrawModal, FlowModal } from '../../modal';


const FullEditorRender = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [excalidrawModalState, setExcalidrawModalState] = useState<ExcalidrawModalState>({
        open: false,
        data: null
    })
    const [flowModalState, setFlowModalState] = useState<FlowModalState>({
        open: false,
        data: ""
    })
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
            HorizontalRule,
            Excalidraw,
            Flow
        ],
    })


    return <GlobalContextProvider
        editor={editor}
        excalidrawModalState={excalidrawModalState}
        flowModalState={flowModalState}
        setFlowModalState={setFlowModalState}
        setExcalidrawModalState={setExcalidrawModalState}
    >
        <div className="w-full h-full">
            <ToolBar />
            <div className="moki-editor-container" ref={containerRef}>
                <EditorContent
                    editor={editor}
                />
                <TableRowMenu editor={editor} appendTo={containerRef} />
                <TableColumnMenu editor={editor} appendTo={containerRef} />
                <ColumnsBubbleMenu editor={editor} appendTo={containerRef} />
                <ImageBlockMenu editor={editor} appendTo={containerRef} />
                <ExcalidrawBubbleMenu editor={editor} appendTo={containerRef} />
                <FlowBubbleMnu editor={editor} appendTo={containerRef} />
            </div>
        </div>
        <ExcalidrawModal editor={editor} />
        <FlowModal editor={editor} />
    </GlobalContextProvider>
}

export default FullEditorRender;
