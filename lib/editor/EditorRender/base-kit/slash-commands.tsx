import {Editor} from "@tiptap/core";
import {LuHeading1, LuHeading2, LuHeading3, LuHeading4} from "react-icons/lu"
import {IconBaseProps} from "react-icons/lib/cjs/iconBase";
import {BiCodeCurly} from "react-icons/bi";
import {CiViewTable} from "react-icons/ci";

export type SlashMenuItem = {
    divider?: boolean;
    icon?: React.ReactNode;
    title: string;
    slash?: string;
    action?: (editor: Editor) => void;
}


const IconConfig: IconBaseProps = {
    size: 20
}

export const SlashCommands: SlashMenuItem[] = [
    {
        divider: true,
        title: "标题"
    },
    {
        icon: <LuHeading1 {...IconConfig}/>,
        title: "标题一",
        slash: "/h1",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleHeading({level: 1})
                .run()
    },

    {
        icon: <LuHeading2 {...IconConfig}/>,
        title: "标题二",
        slash: "/h2",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleHeading({level: 2})
                .run()
    },
    {
        icon: <LuHeading3 {...IconConfig}/>,
        title: "标题三",
        slash: "/h3",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleHeading({level: 3})
                .run()
    },

    {
        icon: <LuHeading4 {...IconConfig}/>,
        title: "标题四",
        slash: "/h4",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleHeading({level: 4})
                .run()
    },
    {
        divider: true,
        title: "插入"
    },

    {
        icon: <BiCodeCurly {...IconConfig}/>,
        title: "代码块",
        slash: "/codeBlock",
        action: editor =>
            editor
                .chain()
                .focus()
                .toggleCodeBlock()
                .run()
    },

    {
        icon: <CiViewTable {...IconConfig}/>,
        title: "表格",
        slash: "/table",
        action: editor =>
            editor
                .chain()
                .insertTable({rows: 3, cols: 4, withHeaderRow: true})
                .focus()
                .run()
    }
]
