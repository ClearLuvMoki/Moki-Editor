import React, {useCallback, useMemo} from 'react';
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import {Heading} from "./core"
import deepEqual from "deep-equal";
import {Select} from "@arco-design/web-react"
import {Level} from "@tiptap/extension-heading";

type HeadingOrParagraph = Level | 'paragraph';

type HeadingMenuProps = {
    editor: Editor
}

export const HeadingMenu = React.memo(({editor}: HeadingMenuProps) => {
    const isH1 = useActive(editor, Heading.name, {level: 1});
    const isH2 = useActive(editor, Heading.name, {level: 2});
    const isH3 = useActive(editor, Heading.name, {level: 3});
    const isH4 = useActive(editor, Heading.name, {level: 4});
    const isH5 = useActive(editor, Heading.name, {level: 5});
    const isH6 = useActive(editor, Heading.name, {level: 6});


    const current = useMemo<HeadingOrParagraph>(() => {
        if (isH1) return 1;
        if (isH2) return 2;
        if (isH3) return 3;
        if (isH4) return 4;
        if (isH5) return 5;
        if (isH6) return 6;
        return 'paragraph';
    }, [isH1, isH2, isH3, isH4, isH5, isH6]);

    const toggleActive = useCallback(
        (value: HeadingOrParagraph) => {
            if (value === 'paragraph') {
                editor.chain().focus().setParagraph().run();
            } else {
                editor.chain().focus().toggleHeading({level: value as Level}).run();
            }
        },
        [editor]
    );

    editor.isActive('heading', {level: 1})


    return (
        <Select
            value={current}
            style={{width: 100}}
            options={[
                {label: "正文", value: 'paragraph'},
                {label: "标题1", value: 1},
                {label: "标题2", value: 2},
                {label: "标题3", value: 3},
                {label: "标题4", value: 4},
                {label: "标题5", value: 5},
                {label: "标题6", value: 6},
            ]}
            onChange={(value) => {
                toggleActive(value)
            }}
        />
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

