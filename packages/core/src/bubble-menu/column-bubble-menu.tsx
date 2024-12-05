import React, {useCallback} from 'react';
import {BubbleMenu} from "@tiptap/react";
import {BubbleMenuProps} from "@/domains/types/bubble-menu";
import getRenderContainer from "../utils/getRenderContainer";
import {uuid} from "@/utils/uuid";
import {sticky} from "tippy.js";
import {Button} from "@/components/button";
import {Columns2, PanelLeftClose, PanelRightClose} from "lucide-react";
import {ColumnLayout} from "@/extensions/columns";

const ColumnBubbleMenu = ({editor, appendTo}: BubbleMenuProps) => {
    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'columns')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])

    const shouldShow = useCallback(() => {
        const isColumns = editor?.isActive('columns')
        return isColumns || false
    }, [editor])

    const onColumnLeft = useCallback(() => {
        editor?.chain().focus().setLayout(ColumnLayout.SidebarLeft).run()
    }, [editor])

    const onColumnRight = useCallback(() => {
        editor?.chain().focus().setLayout(ColumnLayout.SidebarRight).run()
    }, [editor])

    const onColumnTwo = useCallback(() => {
        editor?.chain().focus().setLayout(ColumnLayout.TwoColumn).run()
    }, [editor])

    return (
        <BubbleMenu
            editor={editor}
            pluginKey={`columnsMenu-${uuid()}`}
            shouldShow={shouldShow}
            updateDelay={0}
            tippyOptions={{
                offset: [0, 8],
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
                getReferenceClientRect,
                appendTo: () => appendTo?.current,
                plugins: [sticky],
                sticky: 'popper',
            }}
        >
            <div
                className="text-black inline-flex h-full leading-none gap-0.5 flex-row p-1 items-center bg-white shadow-sm  border border-neutral-200 dark:border-neutral-800 rounded-lg dark:bg-black "
            >
                <Button
                    size="sm"
                    variant={editor?.isActive('columns', {layout: ColumnLayout.SidebarLeft}) ? "secondary" : "ghost"}
                    onClick={onColumnLeft}
                >
                    <PanelLeftClose size={18} className="text-zinc-600"/>
                </Button>
                <Button
                    size="sm"
                    variant={editor?.isActive('columns', {layout: ColumnLayout.TwoColumn}) ? "secondary" : "ghost"}
                    onClick={onColumnTwo}
                >
                    <Columns2 size={18} className="text-zinc-600"/>
                </Button>
                <Button
                    size="sm"
                    variant={editor?.isActive('columns', {layout: ColumnLayout.SidebarRight}) ? "secondary" : "ghost"}
                    onClick={onColumnRight}
                >
                    <PanelRightClose size={18} className="text-zinc-600"/>
                </Button>
            </div>
        </BubbleMenu>
    );
};

export default ColumnBubbleMenu;
