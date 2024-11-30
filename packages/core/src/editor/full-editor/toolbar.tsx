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
import ColorPicker from "../../components/color-picker";

export const ToolbarIconProps = {
    size: 16
}

export const Fonts = [
    'Arial',
    'Arial Black',
    'Georgia',
    'Impact',
    'Tahoma',
    'Times New Roman',
    'Verdana',
    'Courier New',
    'Lucida Console',
    'Monaco',
    'monospace',
];

const Heading = Array.from({length: 5}).map((_, index) => {
    return {
        label: `Heading${index + 1}`,
        value: String(index + 1)
    }
}).concat([{
    label: "正文",
    value: String(0)
}])

const ActionsArr: { icon: JSX.Element, type: Tools, popover?: React.ReactNode }[] = [
    {icon: <Bold {...ToolbarIconProps}/>, type: "bold",},
    {icon: <Italic {...ToolbarIconProps}/>, type: "italic"},
    {icon: <Underline {...ToolbarIconProps}/>, type: "underline"},
    {icon: <Strikethrough {...ToolbarIconProps}/>, type: "strike"},
    {icon: <Braces {...ToolbarIconProps}/>, type: "code"},
    {icon: <Subscript {...ToolbarIconProps}/>, type: "subscript"},
    {icon: <Superscript {...ToolbarIconProps}/>, type: "superscript"},
    // {icon: <Sheet {...ToolbarIconProps}/>, type: "table"},
    // {icon: <ListMinus {...ToolbarIconProps}/>, type: "textAlign"},
    // {icon: <ListOrdered {...ToolbarIconProps}/>, type: "bulletList"},
    // {icon: <List {...ToolbarIconProps}/>, type: "orderedList"},
    {icon: <TextQuote {...ToolbarIconProps}/>, type: "blockquote"},
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

    const currentHeading = useCallback(() => {
        return Heading.some(item => editor?.isActive('heading', {level: Number(item.value)})) ? Heading.map(item => {
            return {
                isActive: editor?.isActive('heading', {level: Number(item.value)}),
                value: item.value,
                label: item
            }
        }).filter(item => item.isActive)?.[0]?.value : "0"
    }, [editor])

    const currentFontFamily = useCallback(() => {
        return Fonts.map(item => {
            return {
                isActive: editor?.isActive('textStyle', {fontFamily: item}),
                value: item,
                label: item
            }
        }).filter(item => item.isActive)?.[0]?.value
    }, [editor])


    const onSetFontFamily = useCallback((font: string) => {
        return editor?.chain().focus().setFontFamily(font).run();
    }, [editor])


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

    const onSetHeading = useCallback(
        (level: number) => {
            if (level === 0) {
                editor?.chain().focus().setParagraph().run();
            } else {
                editor?.chain().focus().toggleHeading({level: level as Level}).run();
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

    const setFontColor = useCallback(
        (color?: string | null) => {
            color
                ? editor?.chain().focus().setColor(color).run()
                : editor?.chain().focus().unsetColor().run();
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
                selectedKeys={[currentHeading()]}
                onChange={(event) => {
                    onSetHeading(Number(event?.target.value));
                }}
            >
                {
                    Heading.map(item => {
                        return <SelectItem
                            key={item.value}
                        >
                            {item.label}
                        </SelectItem>
                    })
                }
            </Select>
            <Select
                className="w-[120px]"
                placeholder="字体"
                selectedKeys={[currentFontFamily()]}
                onChange={(event) => {
                    onSetFontFamily(event?.target.value);
                }}
            >
                {
                    Fonts.map(item => {
                        return <SelectItem
                            key={item}
                        >
                            {item}
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
                    ><PaintRoller {...ToolbarIconProps}/></Button>
                </PopoverTrigger>
                <PopoverContent>
                    <ColorPicker
                        onSetColor={setColor}
                    />
                </PopoverContent>
            </Popover>
            <Popover placement="bottom" showArrow={false}>
                <PopoverTrigger>
                    <Button
                        isIconOnly
                        variant={"light"}
                    ><Baseline {...ToolbarIconProps}/></Button>
                </PopoverTrigger>
                <PopoverContent>
                    <ColorPicker
                        onSetColor={setFontColor}
                    />
                </PopoverContent>
            </Popover>

        </div>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default Toolbar;
