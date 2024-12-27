import {SlashMenuItem} from "../../extensions/slash";
import {
    Braces,
    Image,
    Sheet,
    ListOrdered,
    Logs,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Columns2,
    SeparatorHorizontal, DraftingCompass, Sigma, PanelsTopLeft
} from "lucide-react";
import {DEFAULT_EXCALIDRAW_DATA} from "../../extensions/excalidraw";

export const Commands: SlashMenuItem[] = [
    {
        title: "标题",
        children: [
            {
                icon: <Heading1/>,
                text: "标题一",
                slash: "/h1",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .toggleHeading({level: 1})
                        .run()
            },
            {
                icon: <Heading2/>,
                text: "标题二",
                slash: "/h2",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .toggleHeading({level: 2})
                        .run()
            },

            {
                icon: <Heading3/>,
                text: "标题三",
                slash: "/h3",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .toggleHeading({level: 3})
                        .run()
            },

            {
                icon: <Heading4/>,
                text: "标题四",
                slash: "/h4",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .toggleHeading({level: 4})
                        .run()
            },
        ]
    },

    {
        title: "插入",
        children: [
            {
                icon: <ListOrdered/>,
                text: "有序列表",
                slash: "/orderList",
                action: editor =>
                    editor.chain().focus().toggleOrderedList().run()
            },
            {
                icon: <Logs/>,
                text: "无序列表",
                slash: "/bulletList",
                action: editor =>
                    editor.chain().focus().toggleBulletList().run()
            },
            {
                icon: <Sigma/>,
                text: "数学公式",
                slash: "/math",
                action: editor =>
                    editor.chain().focus().insertContent("$ $").setTextSelection(editor.state.selection.from + 1).run()
            },
            {
                icon: <DraftingCompass/>,
                text: "Draw",
                slash: "/draw",
                action: editor =>
                    editor.chain().focus().insertExcalidraw({data: DEFAULT_EXCALIDRAW_DATA, blockId: ""}).run()
            },
            {
                icon: <Columns2/>,
                text: "分列",
                slash: "/columns",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .setColumns()
                        .focus(editor.state.selection.head - 1)
                        .run()
            },
            {
                icon: <SeparatorHorizontal/>,
                text: "分割线",
                slash: "/horizontal-rule",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .setHorizontalRule()
                        .run()
            },
            {
                icon: <Sheet/>,
                text: "表格",
                slash: "/table",
                action: editor =>
                    editor.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: false}).run()
            },
            {
                icon: <Image/>,
                text: "图片",
                slash: "/image",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .setImageUpload()
                        .run()
            },
            {
                icon: <PanelsTopLeft/>,
                text: "网页",
                slash: "/iframe",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .setIframe({src: ""})
                        .run()
            },
            {
                icon: <Braces/>,
                text: "代码块",
                slash: "/codeBlock",
                action: editor =>
                    editor
                        .chain()
                        .focus()
                        .toggleCodeBlock()
                        .run()
            },
        ]
    },
]