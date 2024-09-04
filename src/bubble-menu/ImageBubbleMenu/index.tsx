import { BubbleMenu, Editor } from '@tiptap/react'
import React, { useCallback, useRef } from 'react'
import { Instance, sticky } from 'tippy.js'
import { v4 as uuid } from 'uuid'
import ToolbarWrapper from '../../components/ToolbarWrapper'
import { Button, ButtonProps, Slider } from '@nextui-org/react'
import { AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart } from 'lucide-react'
import { getRenderContainer } from '../../utils/tools'

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

const ImageBlockMenu = ({ editor, appendTo }: MenuProps) => {
    if(!editor) return;
    const menuRef = useRef<HTMLDivElement>(null)
    const tippyInstance = useRef<Instance | null>(null)

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-imageBlock')
        const rect = renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)

        return rect
    }, [editor])

    const shouldShow = useCallback(() => {
        const isActive = editor.isActive('imageBlock')

        return isActive
    }, [editor])

    const onAlignImageLeft = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setImageBlockAlign('left').run()
    }, [editor])

    const onAlignImageCenter = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setImageBlockAlign('center').run()
    }, [editor])

    const onAlignImageRight = useCallback(() => {
        editor.chain().focus(undefined, { scrollIntoView: false }).setImageBlockAlign('right').run()
    }, [editor])

    const onWidthChange = useCallback(
        (value: number) => {
            editor.chain().focus(undefined, { scrollIntoView: false }).setImageBlockWidth(value).run()
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
                    startContent={<AlignHorizontalDistributeStart size={16} />} 
                    onPress={onAlignImageLeft}
                    variant={editor.isActive('imageBlock', { align: 'left' }) ? "solid": "light"}
                    isIconOnly
                    aria-label='Align image left'
                />
                <Button 
                    {...DefaultButtonProps} 
                    startContent={<AlignHorizontalDistributeCenter size={16} />} 
                    onPress={onAlignImageCenter}
                    variant={editor.isActive('imageBlock', { align: 'center' }) ? "solid": "light"}
                    isIconOnly
                    aria-label='Align image center'
                />
                <Button 
                    {...DefaultButtonProps} 
                    startContent={<AlignHorizontalDistributeEnd size={16} />} 
                    onPress={onAlignImageRight}
                    variant={editor.isActive('imageBlock', { align: 'right' }) ? "solid": "light"}
                    isIconOnly
                    aria-label='Align image right'
                />
                <Slider 
                    size='sm' 
                    className='w-[150px] mx-2' 
                    color="foreground"
                    showTooltip={true}
                    value={editor?.getAttributes('imageBlock')?.width ? parseInt(editor?.getAttributes('imageBlock')?.width) : 100}
                    onChange={(value: any) => {
                        onWidthChange(value)
                    }}
                />
            </ToolbarWrapper>
        </BubbleMenu>
    )
}

export default ImageBlockMenu
