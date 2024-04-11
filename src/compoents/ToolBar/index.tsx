import {StyledActions, StyledContainer} from "./styled"
import {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    CodeXml,
    Subscript,
    Superscript,
    Baseline,
    PaintRoller,
    ListMinus,
    ListOrdered,
    List,
    Quote
} from "lucide-react"
import ActionButton from "./components/ActiveButton";
import React, {useContext} from "react";
import {Tools} from "../../constants/tools";
import {Context} from "../../render/FullEditorRender/context";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import ColorSelect from "./components/ColorSelect";

const IconProps = {
    size: 16
}

const ActionsArr: { icon: React.ReactNode, type?: Tools, popover?: React.ReactNode }[] = [
    {icon: <Bold {...IconProps}/>, type: "bold",},
    {icon: <Italic {...IconProps}/>, type: "italic"},
    {icon: <Underline {...IconProps}/>, type: "underline"},
    {icon: <Strikethrough {...IconProps}/>, type: "strike"},
    {icon: <CodeXml {...IconProps}/>, type: "code"},
    {icon: <Subscript {...IconProps}/>, type: "subscript"},
    {icon: <Superscript {...IconProps}/>, type: "superscript"},
    {icon: <Baseline {...IconProps}/>, popover: <ColorSelect/>},
    {icon: <PaintRoller {...IconProps}/>},
    {icon: <ListMinus {...IconProps}/>},
    {icon: <ListOrdered {...IconProps}/>, type: "bulletList"},
    {icon: <List {...IconProps}/>, type: "orderedList"},
    {icon: <Quote {...IconProps}/>, type: "blockquote"},
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
                return editor?.chain()?.focus()?.toggleCode()?.run();
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
        }
    }

    return <StyledContainer>
        <StyledActions>
            {
                ActionsArr.map((item, index) => (
                    <Popover
                        key={index}
                        placement="bottom"
                        showArrow={true}
                    >
                        <PopoverTrigger>
                            <ActionButton
                                isActive={item?.type ? editor?.isActive(item?.type) : false}
                                onPress={() => {
                                    if (item?.type) {
                                        handleAction(item?.type)
                                    }
                                }}
                            >
                                {item.icon}
                            </ActionButton>
                        </PopoverTrigger>
                        <PopoverContent style={{padding: 0}}>
                            {item?.popover}
                        </PopoverContent>
                    </Popover>
                ))
            }
        </StyledActions>
    </StyledContainer>
}

export default ToolBar;
