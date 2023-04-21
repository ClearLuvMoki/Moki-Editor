import React, {useCallback} from 'react';
import {Button, Tooltip} from "antd"
import type { Editor } from "@tiptap/core";
import {IconBold} from "../../Icons";

export const BoldMenu: React.FC<{ editor: Editor }> = (
    {
        editor
    }
) => {


    const toggleBold = useCallback(
        () =>
            editor
                .chain()
                .focus()
                .toggleBold()
                .run(),
        [editor]
    );

    return (
        <Tooltip title={"加粗"} placement={"bottom"}>
            <Button
                type={"text"}
                icon={<IconBold/>}
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={() => {
                    toggleBold();
                }}
            />
        </Tooltip>
    );
};

