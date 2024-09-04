import React, { memo, useCallback, useContext } from 'react'
import deepEqual from 'deep-equal'
import { Redo2, Undo2 } from 'lucide-react'
// @ts-ignore
import { themeList } from 'simple-mind-map/src/constants/constant'
import ActionButton from '../../ActiveButton'
import { Context } from '../context'
import { Select, SelectItem } from '@nextui-org/react'

export const ToolbarIconProps = {
    size: 16
}

const LayoutArr = [
    { name: "逻辑结构图", value: "logicalStructure", },
    { name: "思维导图", value: "mindMap" },
    { name: "组织结构图", value: "organizationStructure" },
    { name: "目录组织图", value: "catalogOrganization" },
    { name: "时间轴", value: "timeline" },
    { name: "竖向时间轴", value: "verticalTimeline" },
    { name: "时间轴2", value: "timeline2" },
    { name: "鱼骨图", value: "fishbone" },
]

const Actions = [
    { icon: <Undo2 {...ToolbarIconProps} />, type: "undo", },
    { icon: <Redo2 {...ToolbarIconProps} />, type: "redo", },
]

const Toolbar = memo(() => {
    const { mindMapRef, historyState, theme, layout, setLayout, setTheme } = useContext(Context);

    const $disabled = useCallback((type: string) => {
        switch (type) {
            case "undo":
                return historyState.isCanBackward
            case "redo":
                return historyState.isCanForward
            default:
                break;
        }
    }, [historyState])


    const handleAction = useCallback((type: string) => {
        switch (type) {
            case "undo":
                return mindMapRef.current?.execCommand('BACK')
            case "redo":
                return mindMapRef.current?.execCommand('FORWARD')
            default:
                break;
        }
    }, [])


    return (
        <div className='w-8/12 relative flex items-center gap-2 left-1/2 translate-x-[-50%] z-10 top-4 bg-white rounded-lg px-4 py-2 border-1 border-zinc-200 shadow-lg'>
            {
                Actions.map((item, index) => (
                    <ActionButton
                        key={index}
                        disabled={$disabled(item.type)}
                        onPress={() => {
                            handleAction(item.type)
                        }}
                    >
                        {item.icon}
                    </ActionButton>
                ))
            }
            <Select
                size='sm'
                className='max-w-36'
                selectedKeys={[theme]}
                onChange={(event) => {
                    const value = event.target?.value;
                    if (value == theme) return;
                    mindMapRef.current?.setTheme(value);
                    setTheme(value);
                }}
            >
                {(themeList || []).map((item: any) => (
                    <SelectItem key={item.value}>
                        {item.name}
                    </SelectItem>
                ))}
            </Select>
            <Select
                size='sm'
                className='max-w-36'
                selectedKeys={[layout]}
                onChange={(event) => {
                    const value = event.target?.value;
                    if (value == layout) return;
                    mindMapRef.current?.setLayout(value);
                    setLayout(value);
                }}
            >
                {LayoutArr.map((item: any) => (
                    <SelectItem key={item.value}>
                        {item.name}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, { strict: true })
})

export default Toolbar