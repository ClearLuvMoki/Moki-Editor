import React, {useCallback} from 'react';
import {Button, Tooltip} from "antd"
import type { Editor } from "@tiptap/core";
import {IconItalic} from "../../Icons";

export const ItalicMenu: React.FC<{ editor: Editor }> = (
    {
        editor
    }
) => {


    const toggleItalic = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleItalic()
                .run(),
        [editor]
    );

    return (
        <Tooltip title={"斜体"} placement={"bottom"}>
            <Button
                type={"text"}
                icon={<IconItalic/>}
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={() => {
                    toggleItalic();
                }}
            />
        </Tooltip>
    );
};

