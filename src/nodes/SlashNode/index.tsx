import 'mac-scrollbar/dist/mac-scrollbar.css';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {cn, Listbox, ListboxItem} from "@nextui-org/react";
import {MacScrollbar} from "mac-scrollbar"
// @ts-ignore
import {SuggestionProps} from "@tiptap/suggestion/src/suggestion";
// @ts-ignore
import {SuggestionKeyDownProps} from "@tiptap/suggestion/dist/packages/suggestion/src/suggestion";


export interface SlashNodeRef {
    onKeyDown: (props: SuggestionKeyDownProps) => void;
}

const SlashNode = forwardRef<SlashNodeRef, SuggestionProps>((props, ref) => {
    const {items} = props;
    const [selectIndex, setSelectIndex] = useState(0);

    useImperativeHandle(ref, () => {
        return {
            onKeyDown: ({event}) => {
                switch (event?.key) {
                    case "MouseDown": {
                        return true
                    }
                    case "ArrowUp": {
                        handleArrowUp();
                        return true;
                    }
                    case "ArrowDown": {
                        handleArrowDown();
                        return true;
                    }
                    case "Enter": {
                        handleSelect();
                        return true;
                    }
                    default: {
                        return false
                    }
                }
            }
        }
    })

    const handleArrowUp = () => {
        const index = (selectIndex + (items || []).length - 1) % (items || [])?.length
        setSelectIndex(index)
        scrollTo(index)
    }


    const handleArrowDown = () => {
        const index = (selectIndex + 1) % (items || []).length
        setSelectIndex(index)
        scrollTo(index)
    }

    const handleSelect = () => {
        handleSelectSlash(selectIndex)
    }

    const handleSelectSlash = (index: number) => {
        setSelectIndex(index)
        const item = items[index]
        item?.command(props);
    }

    const scrollTo = (idx: number) => {
        document.querySelectorAll('.extensions-item')[idx].scrollIntoView({behavior: 'smooth'});
    }

    return (
        <MacScrollbar
            suppressScrollX={false}
            className="w-[150px] max-h-[200px] bg-white relative rounded-xl overflow-hidden text-sm shadow-xl border-1"
        >
            <Listbox
                selectionMode="single"
                selectedKeys={[items?.[selectIndex]?.title]}
            >
                {
                    (items || []).map((item: any, index: number) => (
                        <ListboxItem
                            key={item?.title}
                            className={cn("extensions-item", selectIndex === index && "bg-zinc-300")}
                            startContent={item.icon}
                            onPress={() => {
                                handleSelectSlash(index)
                            }}
                        >
                            {item.title}
                        </ListboxItem>
                    ))
                }
            </Listbox>
        </MacScrollbar>
    );
});

export default SlashNode;
