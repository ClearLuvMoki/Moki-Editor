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
    ListTodo,
    List,
    Quote
} from "lucide-react"
import ActionButton from "./components/ActiveButton";
import React from "react";
import {Tools} from "../../constants/tools";

const IconProps = {
    size: 16
}

const ActionsArr: { icon: React.ReactNode, type?: Tools }[] = [
    {icon: <Bold {...IconProps}/>, type: "Bold"},
    {icon: <Italic {...IconProps}/>, type: "Italic"},
    {icon: <Underline {...IconProps}/>, type: "Underline"},
    {icon: <Strikethrough {...IconProps}/>,},
    {icon: <CodeXml {...IconProps}/>, type: "Code"},
    {icon: <Subscript {...IconProps}/>, type: "Subscript"},
    {icon: <Superscript {...IconProps}/>, type: "Superscript"},
    {icon: <Baseline {...IconProps}/>,},
    {icon: <PaintRoller {...IconProps}/>},
    {icon: <ListMinus {...IconProps}/>, type: "TextAlign"},
    {icon: <ListTodo {...IconProps}/>, type: "OrderList"},
    {icon: <List {...IconProps}/>, type: "TaskList"},
    {icon: <Quote {...IconProps}/>, type: "Blockquote"},
]

const ToolBar = () => {
    const handleAction = (type: Tools) => {
        switch (type) {
            case "Bold": {

            }
        }
    }

    return <StyledContainer>
        <StyledActions>
            {
                ActionsArr.map((item, index) => (
                    <ActionButton
                        key={index}
                    >
                        {item.icon}
                    </ActionButton>
                ))
            }
        </StyledActions>
    </StyledContainer>
}

export default ToolBar;
