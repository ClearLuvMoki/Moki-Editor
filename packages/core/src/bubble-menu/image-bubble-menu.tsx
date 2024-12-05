import React, {useCallback, useRef} from 'react';
import {BubbleMenu} from '@tiptap/react'
import {Instance, sticky} from "tippy.js";
import {uuid} from "@/utils/uuid";
import {
    AlignCenterVertical, AlignEndVertical,
    AlignStartVertical
} from "lucide-react";
import {BubbleMenuProps} from "@/domains/types/bubble-menu";
import getRenderContainer from "@/utils/getRenderContainer";
import {Button} from "@/components/button";
import {Slider} from "@/components/slider";


const ImageBubbleMenu = ({editor, appendTo}: BubbleMenuProps) => {
    const tippyInstance = useRef<Instance | null>(null)

    const shouldShow = useCallback(() => {
        if (editor) {
            const isActive = editor.isActive('imageBlock')

            return isActive
        }
        return false;
    }, [editor])

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-imageBlock')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])


    const onAction = useCallback((type: "left" | "center" | "right") => {
        editor && editor.chain().focus(undefined, {scrollIntoView: false}).setImageBlockAlign(type).run()
    }, [editor])

    const onWidthChange = useCallback(
        (value: number) => {
            editor?.chain().focus(undefined, {scrollIntoView: false}).setImageBlockWidth(value).run()
        },
        [editor],
    )

    return (
        <BubbleMenu
            editor={editor}
            pluginKey={`imageBlockMenu-${uuid()}`}
            shouldShow={shouldShow}
            updateDelay={0}
            tippyOptions={{
                offset: [0, 8],
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
                getReferenceClientRect,
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
                className="text-black inline-flex h-full leading-none gap-0.5 flex-row p-1 items-center bg-white shadow-sm  border border-neutral-200 dark:border-neutral-800 rounded-lg dark:bg-black "
            >
                <Button
                    size="sm"
                    variant={editor?.isActive('imageBlock', {align: 'left'}) ? "secondary" : "ghost"}
                    onClick={() => onAction("left")}
                >
                    <AlignStartVertical size={18} className="text-zinc-600"/>
                </Button>
                <Button
                    size="sm"
                    variant={editor?.isActive('imageBlock', {align: 'center'}) ? "secondary" : "ghost"}
                    onClick={() => onAction("center")}
                >
                    <AlignCenterVertical size={18} className="text-zinc-600"/>
                </Button>
                <Button
                    size="sm"
                    variant={editor?.isActive('imageBlock', {align: 'right'}) ? "secondary" : "ghost"}
                    onClick={() => onAction("right")}
                >
                    <AlignEndVertical size={18} className="text-zinc-600"/>
                </Button>
                <Slider
                    color={"foreground"}
                    value={[parseInt(editor?.getAttributes('imageBlock').width || 0)]}
                    className="w-[140px] mx-2"
                    step={10}
                    min={10}
                    onValueChange={(value) => {
                        onWidthChange(value[0])
                    }}
                />
            </div>
        </BubbleMenu>
    );
};

export default ImageBubbleMenu;
