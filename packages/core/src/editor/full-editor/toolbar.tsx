import React, {memo, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {
    Baseline,
    Bold, Braces, Heading1, Heading2, Heading3, Heading4, Heading5,
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
import {Button, Select, SelectItem, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {Level} from "@tiptap/extension-heading";
import {useActive} from "../../hooks/use-active";
import ColorPicker from "../../components/color-picker";

export const ToolbarIconProps = {
    size: 16
}

const ActionsArr: { icon: JSX.Element, type: Tools, popover?: React.ReactNode }[] = [
    {icon: <Bold {...ToolbarIconProps}/>, type: "bold",},
    {icon: <Italic {...ToolbarIconProps}/>, type: "italic"},
    {icon: <Underline {...ToolbarIconProps}/>, type: "underline"},
    {icon: <Strikethrough {...ToolbarIconProps}/>, type: "strike"},
    {icon: <Braces {...ToolbarIconProps}/>, type: "code"},
    {icon: <Subscript {...ToolbarIconProps}/>, type: "subscript"},
    {icon: <Superscript {...ToolbarIconProps}/>, type: "superscript"},
    // {icon: <Sheet {...ToolbarIconProps}/>, type: "table"},
    // {icon: <Baseline {...ToolbarIconProps}/>, type: "textStyle",},
    // {icon: <ListMinus {...ToolbarIconProps}/>, type: "textAlign"},
    // {icon: <ListOrdered {...ToolbarIconProps}/>, type: "bulletList"},
    // {icon: <List {...ToolbarIconProps}/>, type: "orderedList"},
    {icon: <TextQuote {...ToolbarIconProps}/>, type: "blockquote"}
]

const Toolbar = memo(() => {
    const {editor} = useContext(Context);
    const isH1 = useActive(editor, 'heading', {level: 1});
    const isH2 = useActive(editor, 'heading', {level: 2});
    const isH3 = useActive(editor, 'heading', {level: 3});
    const isH4 = useActive(editor, 'heading', {level: 4});
    const isH5 = useActive(editor, 'heading', {level: 5});

    const currentHeader = useMemo(() => {
        if (isH1) return '1';
        if (isH2) return '2';
        if (isH3) return '3';
        if (isH4) return '4';
        if (isH5) return '5';
        return 'paragraph';
    }, [isH1, isH2, isH3, isH4, isH5]);

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
                return editor?.chain()?.focus()?.setBlockquote()?.run();
            }
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

    const isDisabled = useCallback((type: Tools) => {
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

    const toggle = useCallback(
        (level: string) => {
            if (level === 'paragraph') {
                editor?.chain().focus().setParagraph().run();
            } else {
                editor?.chain().focus().toggleHeading({level: Number(level) as Level}).run();
            }
        },
        [editor]
    );

    const setColor = useCallback(
        (color?: string | null) => {
            color
                ? editor?.chain().focus().toggleHighlight({color}).run()
                : editor?.chain().focus().unsetHighlight().run();
        },
        [editor]
    );


    return (
        <div className="w-full h-[50px] px-10 flex gap-2 justify-center items-center border-b border-zinc-200">
            <Button
                isIconOnly
                variant={"light"}
                isDisabled={isDisabled("undo")}
                onClick={() => onAction("undo")}
            ><Undo2 {...ToolbarIconProps}/></Button>
            <Button
                isIconOnly
                variant={"light"}
                isDisabled={isDisabled("redo")}
                onClick={() => onAction("redo")}
            ><Redo2 {...ToolbarIconProps}/></Button>
            <Select
                className="w-[120px]"
                selectedKeys={[currentHeader]}
                onChange={(event) => {
                    toggle(event?.target.value);
                }}
            >
                {
                    Array.from({length: 5}).map((_, index) => {
                        return {
                            label: `Heading${index + 1}`,
                            key: String(index + 1)
                        }
                    }).concat([{
                        label: "正文",
                        key: "paragraph"
                    }]).map(item => {
                        return <SelectItem
                            key={item.key}
                        >
                            {item.label}
                        </SelectItem>
                    })
                }
            </Select>
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
            <Popover placement="bottom" showArrow={false}>
                <PopoverTrigger>
                    <Button
                        isIconOnly
                        variant={"light"}
                        onClick={() => {
                        }}
                    ><PaintRoller {...ToolbarIconProps}/></Button>
                </PopoverTrigger>
                <PopoverContent>
                    <ColorPicker
                        onSetColor={setColor}
                    />
                </PopoverContent>
            </Popover>

        </div>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default Toolbar;
