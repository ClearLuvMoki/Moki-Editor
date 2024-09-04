import { BubbleMenu } from '@tiptap/react'
import React, { useCallback, memo, useRef } from 'react'
import { Editor } from '@tiptap/react'
import { Editor as CoreEditor } from '@tiptap/core'
import { EditorState } from '@tiptap/pm/state'
import { EditorView } from '@tiptap/pm/view'
import { isColumnGripSelected } from '../../utils/table-tools'
import ToolbarWrapper from "../../components/ToolbarWrapper";
import {Button, ButtonProps} from "@nextui-org/react";
import {ArrowDownToLine, ArrowUpToLine, Trash } from 'lucide-react'

export interface MenuProps {
    editor: Editor | null;
    appendTo?: React.RefObject<any>
    shouldHide?: boolean
}

export interface ShouldShowProps {
    editor?: CoreEditor
    view: EditorView
    state?: EditorState
    oldState?: EditorState
    from?: number
    to?: number
}

const DefaultButtonProps: ButtonProps = {
    className: "flex justify-start",
    variant: "light",
    color: "default",
    size: 'sm'
}


const TableColumnMenu = ({ editor, appendTo }: MenuProps) => {
    if(!editor) return ;

    const shouldShow = useCallback(
        ({ view, state, from }: ShouldShowProps) => {
            if (!state) {
                return false
            }
            return isColumnGripSelected({ editor, view, state, from: from || 0 })
        },
        [editor],
    )

    const onAddColumnBefore = useCallback(() => {
        editor.chain().focus().addColumnBefore().run()
    }, [editor])

    const onAddColumnAfter = useCallback(() => {
        editor.chain().focus().addColumnAfter().run()
    }, [editor])

    const onDeleteColumn = useCallback(() => {
        editor.chain().focus().deleteColumn().run()
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
                    modifiers: [{ name: 'flip', enabled: false }],
                },
            }}
            shouldShow={shouldShow}
        >
            <ToolbarWrapper isVertical={false}>
                <Button {...DefaultButtonProps} startContent={<ArrowDownToLine size={16}/>} onPress={onAddColumnBefore}>Add column before</Button>
                <Button {...DefaultButtonProps} startContent={<ArrowUpToLine size={16}/>} onPress={onAddColumnAfter}>Add column after</Button>
                <Button {...DefaultButtonProps} startContent={<Trash size={16}/>} onPress={onDeleteColumn}>Delete column</Button>
            </ToolbarWrapper>
        </BubbleMenu>
    )
}

export default TableColumnMenu
