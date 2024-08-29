import { BubbleMenu } from '@tiptap/react'
import React, { useCallback, memo, useRef } from 'react'
import { Editor } from '@tiptap/react'
import { Editor as CoreEditor } from '@tiptap/core'
import { EditorState } from '@tiptap/pm/state'
import { EditorView } from '@tiptap/pm/view'
import ToolbarWrapper from "../../components/toolbar-wrapper";
import {Button, ButtonProps} from "@nextui-org/react";
import {ArrowDownToLine, ArrowUpToLine, Trash } from 'lucide-react'
import {isRowGripSelected} from "../../utils/table-tools";

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


const TableRowMenu = ({ editor, appendTo }: MenuProps) => {
    if(!editor) return ;

    const shouldShow = useCallback(
        ({ view, state, from }: ShouldShowProps) => {
            if (!state) {
                return false
            }
            return isRowGripSelected({ editor, view, state, from: from || 0 })
        },
        [editor],
    )

    const onAddRowBefore = useCallback(() => {
        editor.chain().focus().addRowBefore().run()
    }, [editor])

    const onAddRowAfter = useCallback(() => {
        editor.chain().focus().addRowAfter().run()
    }, [editor])

    const onDeleteRow = useCallback(() => {
        editor.chain().focus().deleteRow().run()
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
                    modifiers: [{ name: 'flip', enabled: false }],
                },
            }}
            shouldShow={shouldShow}
        >
            <ToolbarWrapper>
                <Button {...DefaultButtonProps} startContent={<ArrowDownToLine size={16}/>} onPress={onAddRowBefore}>Add row before</Button>
                <Button {...DefaultButtonProps} startContent={<ArrowUpToLine size={16}/>} onPress={onAddRowAfter}>Add row after</Button>
                <Button {...DefaultButtonProps} startContent={<Trash size={16}/>} onPress={onDeleteRow}>Delete row</Button>
            </ToolbarWrapper>
        </BubbleMenu>
    )
}

export default TableRowMenu
