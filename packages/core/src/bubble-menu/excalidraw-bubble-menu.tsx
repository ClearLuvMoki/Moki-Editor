import React, {useCallback, useContext, useEffect, useRef} from 'react';
import {Instance} from "tippy.js";
import {BubbleMenu} from "@tiptap/react";
import {Button} from "@/components/button";
import {PencilRuler} from "lucide-react";
import {BubbleMenuProps} from "@/domains/types/bubble-menu";
import {uuid} from "@/utils/uuid";
import {Context} from "@/editor/full-editor/context";

const ExcalidrawBubbleMenu = ({editor, appendTo}: BubbleMenuProps) => {
    const {excalidrawModalState, setExcalidrawModalState} = useContext(Context);
    const tippyRef = useRef<any>(null);
    const initData = editor?.getAttributes("excalidraw") as any;

    const shouldShow = useCallback(() => {
        const isExcalidraw = editor?.isActive('excalidraw')
        return isExcalidraw || false
    }, [editor, excalidrawModalState])

    useEffect(() => {
        excalidrawModalState?.open && tippyRef.current.hide();
    }, [excalidrawModalState?.open])


    return (
        <BubbleMenu
            editor={editor}
            pluginKey={`excalidrawMenu-${uuid()}`}
            shouldShow={shouldShow}
            updateDelay={0}
            tippyOptions={{
                appendTo: () => {
                    return appendTo?.current
                },
                onCreate(instance: Instance<any>) {
                    tippyRef.current = instance;
                },
                placement: 'top',
                offset: [0, 8],
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
            }}
        >
            <div
                className="text-black inline-flex h-full leading-none gap-0.5 flex-row p-1 items-center bg-white shadow-sm  border border-neutral-200 dark:border-neutral-800 rounded-lg dark:bg-black "
            >
                <Button
                    variant={editor?.isActive('imageBlock', {align: 'left'}) ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setExcalidrawModalState({
                        open: true,
                        data: {
                            blockId: initData?.blockId,
                            excalidrawData: initData?.data
                        }
                    })}
                >
                    <PencilRuler size={18} className="text-zinc-600"/>
                </Button>
            </div>
        </BubbleMenu>
    );
};

export default ExcalidrawBubbleMenu;
