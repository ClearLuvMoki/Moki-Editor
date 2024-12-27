import React, {useCallback, useRef, useState} from 'react';
import {BubbleMenu} from '@tiptap/react'
import {Instance, sticky} from "tippy.js";
import {uuid} from "@/utils/uuid";
import {BubbleMenuProps} from "@/domains/types/bubble-menu";
import {Input} from "@/components/input";
import {Button} from "@/components/button";
import {useSetState} from "ahooks";


const IframeBubbleMenu = ({editor, appendTo}: BubbleMenuProps) => {
    const tippyInstance = useRef<Instance | null>(null)
    const initData = editor?.getAttributes("iframe") as any;
    const url = initData?.url || "";
    const [state, setState] = useSetState({
        url: "",
        width: "",
        height: ""
    })

    const shouldShow = useCallback(() => {
        if (editor) {
            const isActive = editor.isActive('iframe')
            return isActive
        }
        return false;
    }, [editor])


    const onWidthChange = useCallback(
        (value: number) => {
            editor?.chain().focus(undefined, {scrollIntoView: false}).setIframe({
                width: value
            }).run()
        },
        [editor],
    )

    const onSubmit = useCallback(
        () => {
            editor?.chain().focus(undefined, {scrollIntoView: false}).setIframe({
                url: state?.url || "",
                width: state?.width ? (typeof Number(state?.width) === "number" ? Number(state?.width) : 100) >= 100 ? 100 : Number(state?.width) : 100,
                height: state?.height ? (typeof Number(state?.height) === "number" ? Number(state?.height) : 300) : 300,
            }).run()
        },
        [editor, state],
    )


    return (
        <BubbleMenu
            editor={editor}
            pluginKey={`iframeBlockMenu-${uuid()}`}
            shouldShow={shouldShow}
            updateDelay={0}
            tippyOptions={{
                offset: [0, 8],
                placement: "left",
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
                onCreate: (instance: Instance) => {
                    tippyInstance.current = instance
                },
                appendTo: () => {
                    return appendTo?.current
                },
                plugins: [sticky],
                sticky: 'popper',
            }}
        >
            <div
                className="w-[160px]  p-1 bg-white shadow-sm  border border-neutral-200 dark:border-neutral-800 rounded-lg dark:bg-black">
                <Input placeholder="Url" className="w-full h-[30px] mb-2"
                       onChange={(event) => setState({url: event?.target?.value})}/>
                <Input placeholder="Iframe width(%)" className="w-full h-[30px] mb-2"
                       onChange={(event) => setState({width: event?.target?.value})}/>
                <Input placeholder="Iframe Height(px)" className="w-full h-[30px] mb-2"
                       onChange={(event) => setState({height: event?.target?.value})}/>
                <div className="flex justify-end">
                    <Button size="sm" onClick={onSubmit}>Submit</Button>
                </div>
            </div>
        </BubbleMenu>
    );
};

export default IframeBubbleMenu;
