import React, {useCallback} from 'react';
import {Button, Tooltip} from "antd"
import type { Editor } from "@tiptap/core";
import {IconBlockquote} from "../../Icons";

export const BlockquoteMenu: React.FC<{ editor: Editor }> = (
    {
        editor
    }
) => {


    const toggleBlockquote = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleBlockquote()
                .run(),
        [editor]
    );

    return (
        <Tooltip title={"加粗"} placement={"bottom"}>
            <Button
                type={"text"}
                icon={<IconBlockquote/>}
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={() => {
                    toggleBlockquote();
                }}
            />
        </Tooltip>
    );
};

