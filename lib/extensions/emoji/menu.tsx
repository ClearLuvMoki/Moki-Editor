import React from 'react';
import {Popover} from "@arco-design/web-react";
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
            unmountOnExit={false}
            triggerProps={{
                popupStyle: {
                    padding: 0
                },
                style: {
                    width: 350,
                    padding: 0
                }
            }}
            trigger='click'
            content={<EmojiContent
                onChange={(emojiValue) => {
                    const {selection} = editor.state;
                    const {$anchor} = selection;
                    editor.chain().insertContentAt($anchor.pos, emojiValue).run();
                }}
            />}
        >
            <Button
            >
                <BsEmojiLaughing/>
            </Button>
        </Popover>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

