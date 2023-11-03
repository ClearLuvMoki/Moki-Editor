import React, {useCallback, useState} from 'react';
import {Button} from "../../components";
import {ImTextColor} from "react-icons/im"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {TextColor} from "./core"
import deepEqual from "deep-equal";
import {Popover} from "@arco-design/web-react"
import ColorContent from "../../components/ColorContent";
import ColorIconWrapper from "../../components/ColorWrapper";


type TextColorMenuProps = {
    editor: Editor
}

export const TextColorMenu = React.memo(({editor}: TextColorMenuProps) => {
    const isActive = useActive(editor, TextColor.name);
    const [color, setColor] = useState("#000")

    const toggleActive = useCallback(
        (color: string) => {
            setColor(color)
            editor.chain().focus().setColor(color).run()
        },
        [editor]
    );

    return (
        <Popover
            trigger={"click"}
            content={<ColorContent
                onColorChange={(color) => {
                    toggleActive(color)
                }}
            />}
        >
            <Button
                active={isActive}
            >
                <ColorIconWrapper color={color}>
                    <ImTextColor/>
                </ColorIconWrapper>
            </Button>
        </Popover>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

