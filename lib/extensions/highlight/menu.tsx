import React, {useCallback, useState} from 'react';
import {Button} from "../../components";
import {LuHighlighter} from "react-icons/lu"
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {Highlight} from "./core"
import deepEqual from "deep-equal";
import {Popover} from "@arco-design/web-react"
import ColorIconWrapper from "../../components/ColorWrapper";
import ColorContent from "../../components/ColorContent";


type HighlightMenuProps = {
    editor: Editor
}

export const HighlightMenu = React.memo(({editor}: HighlightMenuProps) => {
    const isActive = useActive(editor, Highlight.name);
    const [color, setColor] = useState("#fff")

    const toggleActive = useCallback(
        (color: string) => {
            setColor(color)
            editor.chain().focus().toggleHighlight({color: color}).run()
        },
        [editor]
    );

    return (
        <Popover
            trigger={"click"}
            content={<ColorContent
                defaultColor={"transparent"}
                onColorChange={(color) => {
                    toggleActive(color)
                }}
            />}
        >
            <Button
                active={isActive}
            >
                <ColorIconWrapper color={color}>
                    <LuHighlighter/>
                </ColorIconWrapper>
            </Button>
        </Popover>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

