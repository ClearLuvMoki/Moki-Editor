import React, {useCallback, useState} from 'react';
import {Button} from "../../components";
import {ImTextColor} from "react-icons/im"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {TextColor} from "./core"
import deepEqual from "deep-equal";
import {Popover} from "antd"
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
            content={<ColorContent
                onColorChange={(color) => {
                    toggleActive(color)
                }}
            />}
        >
            <div style={{display: "inline-flex", justifyContent: 'center', alignItems: "center"}}>
                <Button
                    active={isActive}
                >
                    <ColorIconWrapper color={color}>
                        <ImTextColor/>
                    </ColorIconWrapper>
                </Button>
            </div>
        </Popover>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

