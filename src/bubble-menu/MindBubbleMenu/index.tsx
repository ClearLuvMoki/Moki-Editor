import { BubbleMenu, Editor } from '@tiptap/react'
import React, { useCallback, useContext, useRef } from 'react'
import { Instance, sticky } from 'tippy.js'
import { v4 as uuid } from 'uuid'
import ToolbarWrapper from '../../components/ToolbarWrapper'
import { Button, ButtonProps, Slider } from '@nextui-org/react'
import { AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, PencilRuler } from 'lucide-react'
import { getRenderContainer } from '../../utils/tools'
import { Context } from '../../editor/FullEditorRender/context'
import MindExtension from '../../extensions/mind'

export interface MenuProps {
    editor: Editor | null;
    appendTo?: React.RefObject<any>
    shouldHide?: boolean
}

const DefaultButtonProps: ButtonProps = {
    variant: "light",
    color: "default",
    size: 'sm'
}

const MindBubbleMenu = ({ editor, appendTo }: MenuProps) => {
    if (!editor) return;
    const { setMindModalState } = useContext(Context);
    const tippyInstance = useRef<Instance | null>(null)
    const attrs = editor.getAttributes(MindExtension.name);
    const mindData = attrs.data || {};
    const blockId = attrs.blockId;

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-mind')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])

    const shouldShow = useCallback(() => {
        const isActive = editor.isActive('mind')

        return isActive
    }, [editor])

    const onAlignImageLeft = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setMindBlockAlign('left').run()
    }, [editor])

    const onAlignImageCenter = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setMindBlockAlign('center').run()
    }, [editor])

    const onAlignImageRight = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setMindBlockAlign('right').run()
    }, [editor])

    const onWidthChange = useCallback(
        (value: number) => {
            editor.chain().focus(undefined, { scrollIntoView: false }).setMindBlockWidth(value).run()
        },
        [editor],
    )

    const onEdit = useCallback(
        () => {
            setMindModalState?.({
                open: true,
                data: {
                    mindData,
                    blockId
                }
            })
        },
        [editor, mindData, blockId],
    )

    return (
        <BubbleMenu
            editor={editor}
            pluginKey={`mindBubbleMenu-${uuid()}`}
            shouldShow={shouldShow}
            updateDelay={0}
            tippyOptions={{
                offset: [0, 8],
                popperOptions: {
                    modifiers: [{ name: 'flip', enabled: false }],
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
            <ToolbarWrapper isVertical={false}>
                <Button
                    {...DefaultButtonProps}
                    startContent={<PencilRuler size={16} />}
                    onPress={onEdit}
                    isIconOnly
                    aria-label='Edit mind'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeStart size={16} />}
                    onPress={onAlignImageLeft}
                    variant={editor.isActive('mind', { align: 'left' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align mind left'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeCenter size={16} />}
                    onPress={onAlignImageCenter}
                    variant={editor.isActive('mind', { align: 'center' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align mind center'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeEnd size={16} />}
                    onPress={onAlignImageRight}
                    variant={editor.isActive('mind', { align: 'right' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align mind right'
                />
                <Slider
                    size='sm'
                    minValue={40}
                    className='w-[150px] mx-2'
                    color="foreground"
                    showTooltip={true}
                    value={editor?.getAttributes('mind')?.width ? parseInt(editor?.getAttributes('mind')?.width) : 100}
                    onChange={(value: any) => {
                        onWidthChange(value)
                    }}
                />
            </ToolbarWrapper>
        </BubbleMenu>
    )
}

export default MindBubbleMenu
