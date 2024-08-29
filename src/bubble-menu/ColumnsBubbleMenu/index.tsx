import { BubbleMenu } from '@tiptap/react'
import React, { useCallback } from 'react'
import { Editor } from '@tiptap/react'
import { Editor as CoreEditor } from '@tiptap/core'
import { EditorState } from '@tiptap/pm/state'
import { EditorView } from '@tiptap/pm/view'
import { sticky } from 'tippy.js'
import { v4 as uuid } from 'uuid'
import ToolbarWrapper from "../../components/toolbar-wrapper";
import {Button, ButtonProps} from "@nextui-org/react";
import {Columns, PanelLeft, PanelRight} from 'lucide-react'
import { getRenderContainer } from '../../utils/tools'
import { ColumnLayout } from '../../extensions/multi-columns'

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
    color: "default",
    size: 'sm'
}

const ColumnsBubbleMenu = ({ editor, appendTo }: MenuProps) => {
    if(!editor) return ;

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'columns')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])

    const shouldShow = useCallback(() => {
        const isColumns = editor.isActive('columns')
        return isColumns
    }, [editor])

    const onColumnLeft = useCallback(() => {
        editor.chain().focus().setLayout(ColumnLayout.SidebarLeft).run()
    }, [editor])

    const onColumnRight = useCallback(() => {
        editor.chain().focus().setLayout(ColumnLayout.SidebarRight).run()
    }, [editor])

    const onColumnTwo = useCallback(() => {
        editor.chain().focus().setLayout(ColumnLayout.TwoColumn).run()
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
                    modifiers: [{ name: 'flip', enabled: false }],
                },
                getReferenceClientRect,
                appendTo: () => appendTo?.current,
                plugins: [sticky],
                sticky: 'popper',
            }}
        >
            <ToolbarWrapper isVertical={false}>
                <Button 
                    {...DefaultButtonProps} 
                    startContent={<PanelLeft size={16}/>} 
                    onPress={onColumnLeft}
                    variant={editor.isActive('columns', { layout: ColumnLayout.SidebarLeft }) ?"solid": "light"}
                >
                    Sidebar left
                </Button>
                <Button 
                    {...DefaultButtonProps} 
                    startContent={<Columns size={16}/>} 
                    onPress={onColumnTwo}
                    variant={editor.isActive('columns', { layout: ColumnLayout.TwoColumn }) ?"solid": "light"}
                >
                    Two columns
                </Button>
                <Button 
                    {...DefaultButtonProps} 
                    startContent={<PanelRight size={16}/>} 
                    onPress={onColumnRight}
                    variant={editor.isActive('columns', { layout: ColumnLayout.SidebarRight }) ?"solid": "light"}
                >
                    Sidebar right
                </Button>
            </ToolbarWrapper>
        </BubbleMenu>
    )
}

export default ColumnsBubbleMenu
