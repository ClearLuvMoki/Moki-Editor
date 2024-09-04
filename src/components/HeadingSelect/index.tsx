import React, {useContext} from 'react';
import {Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Pilcrow} from "lucide-react";
import ActionButton from "../ActiveButton";
import {Context} from "../../editor/FullEditorRender/context";
import {Level} from "@tiptap/extension-heading";
import {Editor} from "@tiptap/react";

const IconProps = {
    size: 16
}

const HeadingArr = [
    {type: 1, icon: <Heading1 {...IconProps}/>},
    {type: 2, icon: <Heading2 {...IconProps}/>},
    {type: 3, icon: <Heading3 {...IconProps}/>},
    {type: 4, icon: <Heading4 {...IconProps}/>},
    {type: 5, icon: <Heading5 {...IconProps}/>},
    // {type: 6, icon: <Heading6 {...IconProps}/>},
    {type: "paragraph", icon: <Pilcrow {...IconProps}/>},
]

export const handleGetActiveHeading = (editor: Editor | null) => {
    if (editor) {
        for (let i = 0; i < HeadingArr.length; i++) {
            if (editor?.isActive('heading', {level: HeadingArr[i].type})) {
                return HeadingArr[i]
            }
        }
        return HeadingArr[HeadingArr.length - 1]
    }
}

const HeadingSelect = () => {
    const {editor} = useContext(Context);
    return (
        <div className="h-auto w-auto bg-white p-1">
            {
                HeadingArr.map(item => (
                    <ActionButton
                        key={item.type}
                        isActive={editor?.isActive('heading', {level: item?.type})}
                        onPress={() => {
                            if (item.type === 'paragraph') {
                                editor?.chain().focus().setParagraph().run()
                            } else {
                                editor?.chain().focus().setHeading({level: item.type as Level}).run()
                            }
                        }}
                    >
                        <span>{item.icon}</span>
                    </ActionButton>
                ))
            }
        </div>
    );
};

export default HeadingSelect;
