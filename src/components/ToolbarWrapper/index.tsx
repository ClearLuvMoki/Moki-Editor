import React, { memo } from 'react';
import deepEqual from "deep-equal"
import { cn } from '@nextui-org/react';

interface Props {
    className?: string;
    isVertical?: boolean;
    children: React.ReactNode;
}

const ToolbarWrapper = memo(({children, className, isVertical = true}: Props) => {
    const toolbarClassName = cn(
        'select-none text-black inline-flex h-full leading-none gap-0.5 bg-white rounded-lg dark:bg-black shadow-sm border border-neutral-200 dark:border-neutral-800',
        isVertical ? 'flex-col p-2' : 'flex-row p-1 items-center',
        className,
    )
    return (
        <div className={toolbarClassName}>
            {children}
        </div>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps, {strict: true})
});

export default ToolbarWrapper;
