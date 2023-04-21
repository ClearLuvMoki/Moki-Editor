import React, {useCallback} from 'react';
import {Button, Tooltip} from "antd"
import type { Editor } from "@tiptap/core";
import {IconStrike} from "../../Icons";

export const StrikethroughMenu: React.FC<{ editor: Editor }> = (
    {
        editor
    }
) => {


  const toggleStrike = useCallback(
    () =>
       editor
        .chain()
        .focus()
        .toggleStrike()
        .run(),
    [editor]
  );

    return (
        <Tooltip title={"下划线"} placement={"bottom"}>
            <Button
                type={"text"}
                icon={<IconStrike/>}
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={() => {
                    toggleStrike();
                }}
            />
        </Tooltip>
    );
};

