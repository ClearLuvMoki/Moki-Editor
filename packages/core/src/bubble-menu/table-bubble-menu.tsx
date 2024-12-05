import React, {memo, useCallback} from 'react';
import {BubbleMenu} from "@tiptap/react";
import {BubbleMenuProps, ShouldShowProps} from "@/domains/types/bubble-menu";
import {isEqualReact} from "@react-hookz/deep-equal";
import {isColumnGripSelected, isRowGripSelected} from "@/utils/table"
import {Button} from "@/components/button";
import {ArrowDownToLine, ArrowUpToLine, Trash} from "lucide-react";


const RowBubbleMenu = memo(({editor, appendTo}: BubbleMenuProps) => {
    const shouldShow = useCallback(
        ({view, state, from}: ShouldShowProps) => {
            if (!state || !from) {
                return false
            }

            return isRowGripSelected({editor, view, state, from})
        },
        [editor],
    )

    const onAddRowBefore = useCallback(() => {
        editor?.chain().focus().addRowBefore().run()
    }, [editor])

    const onAddRowAfter = useCallback(() => {
        editor?.chain().focus().addRowAfter().run()
    }, [editor])

    const onDeleteRow = useCallback(() => {
        editor?.chain().focus().deleteRow().run()
    }, [editor])

    return (
        <BubbleMenu
            editor={editor}
            pluginKey="tableRowMenu"
            updateDelay={0}
            tippyOptions={{
                appendTo: () => {
                    return appendTo?.current
                },
                placement: 'left',
                offset: [0, 15],
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
            }}
            shouldShow={shouldShow as any}
        >
            <div
                className="text-black inline-flex h-full leading-none gap-0.5 flex-col p-2 bg-white rounded-lg dark:bg-black shadow-sm border border-neutral-200 dark:border-neutral-800">
                <Button variant="ghost" size="sm" className="flex justify-start" onClick={onAddRowBefore}>
                    <ArrowUpToLine size={18}/>
                    Add row before
                </Button>
                <Button variant="ghost" size="sm" className="flex justify-start" onClick={onAddRowAfter}>
                    <ArrowDownToLine size={18}/>
                    Add row after
                </Button>
                <Button variant="ghost" color="danger" size="sm" className="flex justify-start" onClick={onDeleteRow}>
                    <Trash size={18}/>
                    Delete row
                </Button>
            </div>
        </BubbleMenu>
    )
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
})

const ColumnBubbleMenu = memo(({editor, appendTo}: BubbleMenuProps) => {
    const shouldShow = useCallback(
        ({view, state, from}: ShouldShowProps) => {
            if (!state) {
                return false
            }

            return isColumnGripSelected({editor, view, state, from: from || 0})
        },
        [editor],
    )


    const onAddColumnBefore = useCallback(() => {
        editor?.chain().focus().addColumnBefore().run()
    }, [editor])

    const onAddColumnAfter = useCallback(() => {
        editor?.chain().focus().addColumnAfter().run()
    }, [editor])

    const onDeleteColumn = useCallback(() => {
        editor?.chain().focus().deleteColumn().run()
    }, [editor])

    return (
        <BubbleMenu
            editor={editor}
            pluginKey="tableColumnMenu"
            updateDelay={0}
            tippyOptions={{
                appendTo: () => {
                    return appendTo?.current
                },
                offset: [0, 15],
                popperOptions: {
                    modifiers: [{name: 'flip', enabled: false}],
                },
            }}
            shouldShow={shouldShow as any}
        >
            <div
                className="text-black inline-flex h-full leading-none gap-0.5 p-2 bg-white rounded-lg dark:bg-black shadow-sm border border-neutral-200 dark:border-neutral-800">
                <Button variant="ghost" size="sm" className="flex justify-start" onClick={onAddColumnBefore}>
                    <ArrowUpToLine size={18}/>
                    Add column before
                </Button>
                <Button variant="ghost" size="sm" className="flex justify-start" onClick={onAddColumnAfter}>
                    <ArrowDownToLine size={18}/>
                    Add column after
                </Button>
                <Button variant="ghost" color="danger" size="sm" className="flex justify-start"
                        onClick={onDeleteColumn}>
                    <Trash size={18}/>
                    Delete column
                </Button>
            </div>
        </BubbleMenu>
    )
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
})


export const TableBubbleMenu = {
    Row: RowBubbleMenu,
    Column: ColumnBubbleMenu
}
