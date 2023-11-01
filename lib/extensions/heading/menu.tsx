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

const SelectList = [
    {label: (<div style={{fontWeight: 700}}>正文</div>), value: 'paragraph', title: "正文"},
    {label: (<div style={{fontSize: 20, fontWeight: 700}}>标题1</div>), value: 1, title: "标题1"},
    {label: (<div style={{fontSize: 19, fontWeight: 700}}>标题2</div>), value: 2, title: "标题2"},
    {label: (<div style={{fontSize: 18, fontWeight: 700}}>标题3</div>), value: 3, title: "标题3"},
    {label: (<div style={{fontSize: 17, fontWeight: 700}}>标题4</div>), value: 4, title: "标题4"},
    {label: (<div style={{fontSize: 16, fontWeight: 700}}>标题5</div>), value: 5, title: "标题5"},
    {label: (<div style={{fontSize: 15, fontWeight: 700}}>标题6</div>), value: 6, title: "标题6"},
]

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
            style={{width: 100, borderRadius: 20}}
            options={SelectList}
            onChange={(value) => {
                toggleActive(value)
            }}
            renderFormat={(option) => {
                return SelectList.find(d => d?.value === option?.value)?.title
            }}
        />
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

