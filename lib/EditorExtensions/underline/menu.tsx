import React, {useCallback} from 'react';
import {Button, Tooltip} from "antd"
import type { Editor } from "@tiptap/core";
import {IconUnderline} from "../../Icons";

export const UnderlineStaticMenu: React.FC<{ editor: Editor }> = (
    {
        editor
    }
) => {


  const toggleUnderline = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleUnderline()
        .run(),
    [editor]
  );

    return (
        <Tooltip title={"下划线"} placement={"bottom"}>
            <Button
                type={"text"}
                icon={<IconUnderline/>}
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                onClick={() => {
                    toggleUnderline();
                }}
            />
        </Tooltip>
    );
};

