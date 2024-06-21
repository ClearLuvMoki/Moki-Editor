import React, {useContext} from 'react';
import {StyledColor, StyledContainer, StyledDefaultLine, StyledLine} from "./styled";
import {Colors} from "../../../../constants/colors";
import {Context} from "../../../../render/FullEditorRender/context";
import {CopySlash} from "lucide-react";
import {Editor} from "@tiptap/react";

interface Props {
    type: "color" | "highlight"
}

const DefaultColor = [
    "#000",
    "#fff"
]

export const handleGetActiveColor = (editor: Editor | null, type: "textStyle" | "highlight") => {
    if (editor && type && ["textStyle", "highlight"].includes(type)) {
        for (let i = 0; i < Colors.length; i++) {
            for (let j = 0; j < Colors[i].length; j++) {
                if (editor.isActive(type, {color: Colors[i][j]})) {
                    return Colors[i][j]
                }
            }
        }
    }
}

const ColorSelect = ({type}: Props) => {
    const {editor} = useContext(Context);


    const handleClickColor = (color: string) => {
        switch (type) {
            case "color": {
                return editor?.chain().focus()?.setColor(color).run()
            }
            case "highlight": {
                return editor?.chain().focus()?.setHighlight({color})?.run()
            }
        }
    }

    const handleClean = () => {
        switch (type) {
            case "color": {
                return editor?.chain().focus()?.unsetColor().run()
            }
            case "highlight": {
                return editor?.chain().focus()?.unsetHighlight()?.run()
            }
        }
    }

    return (
        <StyledContainer>
            <StyledDefaultLine>
                {
                    DefaultColor.map(color => (
                        <StyledColor
                            key={color}
                            style={{backgroundColor: color}}
                            onClick={() => {
                                handleClickColor(color)
                            }}
                        />
                    ))
                }
                <CopySlash
                    onClick={() => {
                        handleClean();
                    }}
                />
            </StyledDefaultLine>
            {
                Colors.map((line, index) => (
                    <StyledLine key={index}>
                        {
                            line.map(color => (
                                <StyledColor
                                    key={color}
                                    style={{backgroundColor: color}}
                                    onClick={() => {
                                        handleClickColor(color)
                                    }}
                                />
                            ))
                        }
                    </StyledLine>
                ))
            }
        </StyledContainer>
    );
};

export default ColorSelect;
