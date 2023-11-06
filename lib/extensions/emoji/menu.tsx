import React from 'react';
import {Popover} from "antd";
import Button from "../../components/Button";
import {Editor} from "@tiptap/core";
import {BsEmojiLaughing} from "react-icons/bs"
import deepEqual from "deep-equal";
import EmojiContent from "./EmojiContent.tsx";

type SuperscriptMenuProps = {
    editor: Editor
}

export const EmojiMenu = React.memo(({editor}: SuperscriptMenuProps) => {


    return (
        <Popover
            content={<EmojiContent
                onChange={(emojiValue) => {
                    const {selection} = editor.state;
                    const {$anchor} = selection;
                    editor.chain().insertContentAt($anchor.pos, emojiValue).run();
                }}
            />}
            overlayStyle={{
                padding: 0,
                width: 350,
            }}
            overlayInnerStyle={{padding: 0}}
        >
            <div style={{display: "inline-flex", justifyContent: 'center', alignItems: "center"}}>
                <Button>
                    <BsEmojiLaughing/>
                </Button>
            </div>
        </Popover>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

