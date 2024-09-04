import React, {useContext} from 'react';
import {Editor} from "@tiptap/react";
import ActionButton from "../ActiveButton";
import {AlignCenter, AlignLeft, AlignRight} from "lucide-react";
import {Context} from "../../editor/FullEditorRender/context";

const AlignArr = [
    {type: "left", icon: <AlignLeft size={16}/>},
    {type: "center", icon: <AlignCenter size={16}/>},
    {type: "right", icon: <AlignRight size={16}/>}
]

export const handleActiveTextAlign = (editor: Editor | null) => {
    if (editor) {
        for (let i = 0; i < AlignArr.length; i++) {
            if (editor.isActive({textAlign: AlignArr[i].type})) {
                return AlignArr[i]
            }
        }
        return AlignArr[0]
    }
}

const TextAlignSelect = () => {
    const {editor} = useContext(Context);

    return (
        <div
            className="w-auto h-auto bg-white p-1 flex gap-2 items-center"
        >
            {
                AlignArr.map(item => (
                    <ActionButton
                        key={item.type}
                        isActive={editor?.isActive({textAlign: item?.type})}
                        onPress={() => {
                            editor?.chain().focus().setTextAlign(item.type)?.run()
                        }}
                    >
                        {item.icon}
                    </ActionButton>
                ))
            }
        </div>
    );
};

export default TextAlignSelect;
