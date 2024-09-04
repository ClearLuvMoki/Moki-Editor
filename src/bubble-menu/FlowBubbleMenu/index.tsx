import { BubbleMenu, Editor } from '@tiptap/react'
import React, { useCallback, useContext, useRef } from 'react'
import { Instance, sticky } from 'tippy.js'
import { v4 as uuid } from 'uuid'
import ToolbarWrapper from '../../components/ToolbarWrapper'
import { Button, ButtonProps, Slider } from '@nextui-org/react'
import { AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, PencilRuler } from 'lucide-react'
import { getRenderContainer } from '../../utils/tools'
import { Context } from '../../editor/FullEditorRender/context'
import FlowExtension from '../../extensions/flow'

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

const FlowBubbleMnu = ({ editor, appendTo }: MenuProps) => {
    if (!editor) return;
    const { setFlowModalState } = useContext(Context);
    const tippyInstance = useRef<Instance | null>(null)
    const attrs = editor.getAttributes(FlowExtension.name);
    const flowData = attrs.xml || "";
    const blockId = attrs.blockId;

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-flow')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])

    const shouldShow = useCallback(() => {
        const isActive = editor.isActive('flow')

        return isActive
    }, [editor])

    const onAlignImageLeft = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setFlowBlockAlign('left').run()
    }, [editor])

    const onAlignImageCenter = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setFlowBlockAlign('center').run()
    }, [editor])

    const onAlignImageRight = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setFlowBlockAlign('right').run()
    }, [editor])

    const onWidthChange = useCallback(
        (value: number) => {
            editor.chain().focus(undefined, { scrollIntoView: false }).setFlowBlockWidth(value).run()
        },
        [editor],
    )

    const onEdit = useCallback(
        () => {
            setFlowModalState?.({
                open: true,
                data: {
                    blockId,
                    flowData
                }
            })
        },
        [editor, flowData],
    )

    return (
        <BubbleMenu
            editor={editor}
            pluginKey={`flowBubbleMenu-${uuid()}`}
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
                    aria-label='Edit flow'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeStart size={16} />}
                    onPress={onAlignImageLeft}
                    variant={editor.isActive('flow', { align: 'left' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align flow left'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeCenter size={16} />}
                    onPress={onAlignImageCenter}
                    variant={editor.isActive('flow', { align: 'center' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align flow center'
                />
                <Button
                    {...DefaultButtonProps}
                    startContent={<AlignHorizontalDistributeEnd size={16} />}
                    onPress={onAlignImageRight}
                    variant={editor.isActive('flow', { align: 'right' }) ? "solid" : "light"}
                    isIconOnly
                    aria-label='Align flow right'
                />
                <Slider
                    size='sm'
                    minValue={40}
                    className='w-[150px] mx-2'
                    color="foreground"
                    showTooltip={true}
                    value={editor?.getAttributes('flow')?.width ? parseInt(editor?.getAttributes('flow')?.width) : 100}
                    onChange={(value: any) => {
                        onWidthChange(value)
                    }}
                />
            </ToolbarWrapper>
        </BubbleMenu>
    )
}

export default FlowBubbleMnu
