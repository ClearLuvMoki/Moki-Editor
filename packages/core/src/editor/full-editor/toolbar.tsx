import React, {memo, useCallback, useContext} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {
    Baseline,
    Bold, Braces,
    Italic, List, ListMinus, ListOrdered, PaintRoller,
    Pilcrow,
    Redo2,
    Sheet,
    Strikethrough,
    Subscript,
    Superscript, TextQuote,
    Underline,
    Undo2
} from "lucide-react";
import {Tools} from "../../modals/types/tools";
import {Context} from "./context";
import {Button} from "@nextui-org/react";

export const ToolbarIconProps = {
    size: 16
}

const ActionsArr: { icon: JSX.Element, type: Tools, popover?: React.ReactNode }[] = [
    {icon: <Undo2 {...ToolbarIconProps}/>, type: "undo",},
    {icon: <Redo2 {...ToolbarIconProps}/>, type: "redo",},
    // {icon: <Pilcrow {...ToolbarIconProps}/>, type: "heading",},
    {icon: <Bold {...ToolbarIconProps}/>, type: "bold",},
    {icon: <Italic {...ToolbarIconProps}/>, type: "italic"},
    {icon: <Underline {...ToolbarIconProps}/>, type: "underline"},
    {icon: <Strikethrough {...ToolbarIconProps}/>, type: "strike"},
    // {icon: <Braces {...ToolbarIconProps}/>, type: "code"},
    {icon: <Subscript {...ToolbarIconProps}/>, type: "subscript"},
    {icon: <Superscript {...ToolbarIconProps}/>, type: "superscript"},
    // {icon: <Sheet {...ToolbarIconProps}/>, type: "table"},
    // {icon: <Baseline {...ToolbarIconProps}/>, type: "textStyle",},
    // {icon: <PaintRoller {...ToolbarIconProps}/>, type: "highlight",},
    // {icon: <ListMinus {...ToolbarIconProps}/>, type: "textAlign"},
    // {icon: <ListOrdered {...ToolbarIconProps}/>, type: "bulletList"},
    // {icon: <List {...ToolbarIconProps}/>, type: "orderedList"},
    // {icon: <TextQuote {...ToolbarIconProps}/>, type: "blockquote"}
]

const Toolbar = memo(() => {
    const {editor} = useContext(Context);

    const onAction = (type: Tools) => {
        switch (type) {
            case "bold": {
                return editor?.chain()?.focus()?.toggleBold()?.run();
            }
            case "italic": {
                return editor?.chain()?.focus()?.toggleItalic()?.run();
            }
            case "underline": {
                return editor?.chain()?.focus()?.toggleUnderline()?.run();
            }
            case "strike": {
                return editor?.chain()?.focus()?.toggleStrike()?.run();
            }
            // case "code": {
            //     return editor?.chain()?.focus()?.toggleCodeBlock()?.run();
            // }
            case "subscript": {
                return editor?.chain()?.focus()?.toggleSubscript()?.run();
            }
            case "superscript": {
                return editor?.chain()?.focus()?.toggleSuperscript()?.run();
            }
            case "bulletList": {
                return editor?.chain()?.focus()?.toggleBulletList()?.run();
            }
            case "orderedList": {
                return editor?.chain()?.focus()?.toggleOrderedList()?.run();
            }
            // case "blockquote": {
            //     return editor?.chain()?.focus()?.setBlockquote()?.run();
            // }
            case "redo": {
                return editor?.chain().focus().redo().run()
            }
            case "undo": {
                return editor?.chain().focus().undo().run()
            }
            // case "table": {
            //     return editor?.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: true}).run()
            // }
        }
    }

    const isDisabled  = useCallback((type: Tools) => {
        switch (type) {
            case "undo": {
                return !editor?.can().undo()
            }
            case "redo": {
                return !editor?.can().redo()
            }
            default: {
                return false
            }
        }
    }, [editor])



    return (
        <div className="w-full h-[50px] px-10 flex gap-2 justify-center items-center border-b border-zinc-200">
            {
                ActionsArr.map((item, index) => {
                    const isActive = Boolean(item?.type === "textAlign" || editor?.isActive(item?.type));
                    return <Button
                        key={index}
                        isIconOnly
                        variant={isActive ? "solid" : "light"}
                        isDisabled={isDisabled(item.type)}
                        onClick={() => onAction(item.type)}
                    >{item.icon}</Button>
                })
            }
        </div>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default Toolbar;
