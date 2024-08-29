import { BubbleMenu, Editor } from '@tiptap/react'
import React, { useCallback, useContext, useRef } from 'react'
import { Instance, sticky } from 'tippy.js'
import { v4 as uuid } from 'uuid'
import ToolbarWrapper from '../../components/toolbar-wrapper'
import { Button, ButtonProps, Slider } from '@nextui-org/react'
import { AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, PencilRuler } from 'lucide-react'
import { getRenderContainer } from '../../utils/tools'
import { Context } from '../../editor/FullEditorRender/context'
import Excalidraw from '../../extensions/excalidraw'

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

const ExcalidrawBubbleMenu = ({ editor, appendTo }: MenuProps) => {
    if (!editor) return;
    const { setExcalidrawModalState } = useContext(Context);
    const tippyInstance = useRef<Instance | null>(null)
    const attrs = editor.getAttributes(Excalidraw.name);
    const data = JSON.parse(attrs.data || "{}");

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-excalidraw')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])

    const shouldShow = useCallback(() => {
        const isActive = editor.isActive('excalidraw')

        return isActive
    }, [editor])

    const onAlignImageLeft = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setExcalidrawBlockAlign('left').run()
    }, [editor])

    const onAlignImageCenter = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setExcalidrawBlockAlign('center').run()
    }, [editor])

    const onAlignImageRight = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setExcalidrawBlockAlign('right').run()
    }, [editor])

    const onWidthChange = useCallback(
        (value: number) => {
            editor.chain().focus(undefined, { scrollIntoView: false }).setExcalidrawBlockWidth(value).run()
        },
        [editor],
    )

    const onEdit = useCallback(
        () => {
            setExcalidrawModalState?.({
                open: true,
                data: {
                    blockId: attrs.blockId,
                    excalidrawData: data || null
                }
            })
        },
        [editor, data],
    )

    return (
        <BubbleMenu
            editor={editor}
            pluginKey={`excalidrawBubbleMenu-${uuid()}`}
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
                    aria-label='Edit excalidraw'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeStart size={16} />}
                    onPress={onAlignImageLeft}
                    variant={editor.isActive('excalidraw', { align: 'left' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align excalidraw left'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeCenter size={16} />}
                    onPress={onAlignImageCenter}
                    variant={editor.isActive('excalidraw', { align: 'center' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align excalidraw center'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeEnd size={16} />}
                    onPress={onAlignImageRight}
                    variant={editor.isActive('excalidraw', { align: 'right' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align excalidraw right'
                />
                <Slider
                    size='sm'
                    minValue={40}
                    className='w-[150px] mx-2'
                    color="foreground"
                    showTooltip={true}
                    value={editor?.getAttributes('excalidraw')?.width ? parseInt(editor?.getAttributes('excalidraw')?.width) : 100}
                    onChange={(value: any) => {
                        onWidthChange(value)
                    }}
                />
            </ToolbarWrapper>
        </BubbleMenu>
    )
}

export default ExcalidrawBubbleMenu
