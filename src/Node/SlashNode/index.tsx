import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Listbox, ListboxItem} from "@nextui-org/react";
// @ts-ignore
import {SuggestionProps} from "@tiptap/suggestion/src/suggestion";
// @ts-ignore
import {SuggestionKeyDownProps} from "@tiptap/suggestion/dist/packages/suggestion/src/suggestion";
import {StyledContainer} from "./styled";


export interface SlashNodeRef {
    onKeyDown: (props: SuggestionKeyDownProps) => void;
}

const SlashNode = forwardRef<SlashNodeRef, SuggestionProps>((props, ref) => {
    const {items, command} = props;
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
        setSelectIndex((selectIndex + (items || []).length - 1) % (items || [])?.length)
    }


    const handleArrowDown = () => {
        setSelectIndex((selectIndex + 1) % (items || []).length)
    }

    const handleSelect = () => {
        handleSelectSlash(selectIndex)
    }

    const handleSelectSlash = (index: number) => {
        setSelectIndex(index)
        const item = items[index]
        item?.command(props);
    }

    return (
        <StyledContainer>
            <Listbox
                selectionMode="single"
                selectedKeys={[items?.[selectIndex]?.title]}
            >
                {
                    (items || []).map((item: any, index: number) => (
                        <ListboxItem
                            key={item?.title}
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
        </StyledContainer>
    );
});

export default SlashNode;
