import React, {useContext} from 'react';
import {Colors} from "../../constants/colors";
import {Context} from "../../editor/FullEditorRender/context";
import {CopySlash} from "lucide-react";
import {Editor} from "@tiptap/react";

interface Props {
    type: "color" | "highlight"
}

const DefaultColor = [
    "#000",
    "#fff"
]
const ColorBlockClassName = "w-5 h-5 min-w-5 min-h-5 p-2 cursor-pointer border-1 border-zinc-300 rounded mb-1 mr-1";

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
        <div className="h-auto px-1 py-2 bg-white">
            <div className="flex items-center">
                {
                    DefaultColor.map(color => (
                        <div
                            className={ColorBlockClassName}
                            key={color}
                            style={{backgroundColor: color}}
                            onClick={() => {
                                handleClickColor(color)
                            }}
                        />
                    ))
                }
                <CopySlash
                    size={20}
                    className={"mb-1 text-zinc-600"}
                    onClick={() => {
                        handleClean();
                    }}
                />
            </div>
            {
                Colors.map((line, index) => (
                    <div
                        key={index}
                        className="w-full flex items-center justify-center"
                    >
                        {
                            line.map(color => (
                                <div
                                    key={color}
                                    className={ColorBlockClassName}
                                    style={{backgroundColor: color}}
                                    onClick={() => {
                                        handleClickColor(color)
                                    }}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default ColorSelect;
