import {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    Baseline,
    PaintRoller,
    ListMinus,
    ListOrdered,
    List,
    TextQuote, Undo2, Redo2, Pilcrow, Braces, Sheet
} from "lucide-react"
import ActionButton from "../active-button";
import React, {useContext} from "react";
import {Tools} from "../../constants/tools";
import {Context} from "../../editor/FullEditorRender/context";
import ColorSelect, {handleGetActiveColor} from "../color-select";
import ActionPopover from "../action-popover";
import {isDarkColor} from "../../utils/tools";
import TextAlignSelect, {handleActiveTextAlign} from "../text-align-select";
import HeadingSelect, {handleGetActiveHeading} from "../heading-select";

export const ToolbarIconProps = {
    size: 16
}

const ActionsArr: { icon: React.ReactNode, type: Tools, popover?: React.ReactNode }[] = [
    {icon: <Undo2 {...ToolbarIconProps}/>, type: "undo",},
    {icon: <Redo2 {...ToolbarIconProps}/>, type: "redo",},
    {icon: <Pilcrow {...ToolbarIconProps}/>, type: "heading", popover: <HeadingSelect/>},
    {icon: <Bold {...ToolbarIconProps}/>, type: "bold",},
    {icon: <Italic {...ToolbarIconProps}/>, type: "italic"},
    {icon: <Underline {...ToolbarIconProps}/>, type: "underline"},
    {icon: <Strikethrough {...ToolbarIconProps}/>, type: "strike"},
    {icon: <Braces {...ToolbarIconProps}/>, type: "code"},
    {icon: <Subscript {...ToolbarIconProps}/>, type: "subscript"},
    {icon: <Superscript {...ToolbarIconProps}/>, type: "superscript"},
    {icon: <Sheet {...ToolbarIconProps}/>, type: "table"},
    {icon: <Baseline {...ToolbarIconProps}/>, type: "textStyle", popover: <ColorSelect type={"color"}/>},
    {icon: <PaintRoller {...ToolbarIconProps}/>, type: "highlight", popover: <ColorSelect type={"highlight"}/>},
    {icon: <ListMinus {...ToolbarIconProps}/>, type: "textAlign", popover: <TextAlignSelect/>},
    {icon: <ListOrdered {...ToolbarIconProps}/>, type: "bulletList"},
    {icon: <List {...ToolbarIconProps}/>, type: "orderedList"},
    {icon: <TextQuote {...ToolbarIconProps}/>, type: "blockquote"}
]

const ToolBar = () => {
    const {editor} = useContext(Context);


    const handleAction = (type: Tools) => {
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
            case "code": {
                return editor?.chain()?.focus()?.toggleCodeBlock()?.run();
            }
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
            case "blockquote": {
                return editor?.chain()?.focus()?.toggleBlockquote()?.run();
            }
            case "redo": {
                return editor?.chain().focus().redo().run()
            }
            case "undo": {
                return editor?.chain().focus().undo().run()
            }
            case "table": {
                return editor?.chain().focus().insertTable({rows: 3, cols: 3, withHeaderRow: true}).run()
            }
        }
    }

    const handleRenderIcon = (type: Tools, icon: React.ReactNode) => {
        switch (type) {
            case "textAlign": {
                return handleActiveTextAlign(editor)?.icon
            }
            case "heading": {
                return handleGetActiveHeading(editor)?.icon
            }
            default: {
                return icon
            }
        }
    }

    const handleDisabled = (type: Tools) => {
        switch (type) {
            case "redo": {
                return !editor?.can().redo()
            }
            case "undo": {
                return !editor?.can().undo()
            }

        }
    }

    return <div className="w-full h-10 border-b-1 border-b-zinc-300 flex items-center justify-center">
        <div className="flex items-center justify-center gap-3">
            {
                ActionsArr.map((item, index) => {
                    const isPopover = !!item?.popover;
                    const activeColor = handleGetActiveColor(editor, item?.type as any);
                    const isActive = item?.type === "textAlign" || editor?.isActive(item?.type);
                    return isPopover ? <ActionPopover
                        key={index}
                        action={<ActionButton
                            isActive={isActive}
                            style={["textStyle", "highlight"].includes(item?.type) && activeColor ? {
                                backgroundColor: activeColor,
                                color: isDarkColor(activeColor) ? "#fff" : "#000"
                            } : {}}
                            onPress={() => {
                                if (item?.type) {
                                    handleAction(item?.type)
                                }
                            }}
                        >
                            {handleRenderIcon(item?.type, item.icon)}
                        </ActionButton>}
                        popover={item.popover}
                    /> : (
                        <ActionButton
                            key={index}
                            disabled={handleDisabled(item.type)}
                            isActive={isActive}
                            onPress={() => {
                                if (item?.type) {
                                    handleAction(item?.type)
                                }
                            }}
                        >
                            {handleRenderIcon(item?.type, item.icon)}
                        </ActionButton>
                    )
                })
            }
        </div>
    </div>
}

export default ToolBar;
