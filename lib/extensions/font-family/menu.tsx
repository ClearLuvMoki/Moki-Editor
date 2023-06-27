import React, {useCallback, useMemo} from 'react';
import {Editor} from "@tiptap/core";
import {useActive} from "../../hooks/useActive";
import deepEqual from "deep-equal";
import {Select} from "@arco-design/web-react";

type FontFamilyMenuProps = {
    editor: Editor
}

export const FontFamilyMenu = React.memo(({editor}: FontFamilyMenuProps) => {
    const isArial = useActive(editor, 'textStyle', {fontFamily: 'Arial'});
    const isCursive = useActive(editor, 'textStyle', {fontFamily: 'cursive'});
    const isComicSans = useActive(editor, 'textStyle', {fontFamily: 'Comic Sans MS, Comic Sans'});
    const isGeorgia = useActive(editor, 'textStyle', {fontFamily: 'Georgia'});
    const isFangsong = useActive(editor, 'textStyle', {fontFamily: 'fangsong'});
    const isFantasy = useActive(editor, 'textStyle', {fontFamily: 'fantasy'});
    const isImpact = useActive(editor, 'textStyle', {fontFamily: 'Impact'});
    const isInter = useActive(editor, 'textStyle', {fontFamily: 'Inter'});
    const isLucidaConsole = useActive(editor, 'textStyle', {fontFamily: 'Lucida Console'});
    const isMonaco = useActive(editor, 'textStyle', {fontFamily: 'Monaco'});
    const isMonospace = useActive(editor, 'textStyle', {fontFamily: 'monospace'});
    const isTimesNewRoman = useActive(editor, 'textStyle', {fontFamily: 'Times New Roman'});
    const isVerdana = useActive(editor, 'textStyle', {fontFamily: 'Verdana'});
    const isSerif = useActive(editor, 'textStyle', {fontFamily: 'serif'});

    const current = useMemo<string>(() => {
        if (isArial) return 'Arial';
        if (isCursive) return 'cursive';
        if (isComicSans) return 'Comic Sans MS, Comic Sans';
        if (isGeorgia) return 'Georgia';
        if (isFangsong) return 'fangsong';
        if (isFantasy) return 'fantasy';
        if (isImpact) return 'Impact';
        if (isInter) return 'Inter';
        if (isLucidaConsole) return 'Lucida Console';
        if (isMonaco) return 'Monaco';
        if (isMonospace) return 'monospace';
        if (isTimesNewRoman) return 'Times New Roman';
        if (isVerdana) return 'Verdana';
        if (isSerif) return 'serif';
        return 'normal';
    }, [isArial, isCursive, isComicSans, isGeorgia, isFangsong, isFantasy, isImpact, isInter, isLucidaConsole, isMonaco, isMonospace, isTimesNewRoman, isVerdana, isSerif]);

    const toggleActive = useCallback(
        (value: string) => {
            if (value === "normal") {
                editor.chain().focus().unsetFontFamily().run()
            } else {
                editor
                    .chain()
                    .focus()
                    .setFontFamily(value)
                    .run()
            }

        },
        [editor]
    );

    return (
        <Select
            value={current}
            style={{width: 150, margin: "0px 4px"}}
            options={[
                {label: "系统默认", value: 'normal'},
                {label: "Arial", value: 'Arial'},
                {label: "Cursive", value: 'cursive'},
                {label: "Comic Sans", value: 'Comic Sans MS, Comic Sans'},
                {label: "Georgia", value: 'Georgia'},
                {label: "仿宋", value: 'fangsong'},
                {label: "Fantasy", value: 'fantasy'},
                {label: "Impact", value: 'Impact'},
                {label: "Inter", value: 'Inter'},
                {label: "Lucida Console", value: 'Lucida Console'},
                {label: "Monaco", value: 'Monaco'},
                {label: "Monospace", value: 'monospace'},
                {label: "Times New Roman", value: 'Times New Roman'},
                {label: "Verdana", value: 'Verdana'},
                {label: "Serif", value: 'serif'},
            ]}
            onChange={(value) => {
                toggleActive(value)
            }}
        />
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

