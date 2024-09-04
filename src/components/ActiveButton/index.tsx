import React, {forwardRef} from 'react';
import { Button } from "@nextui-org/react"

interface Props {
    className?: string
    isActive?: boolean;
    onPress: () => void,
    disabled?: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const ActionButton = forwardRef<HTMLButtonElement, Props>((
    {
        isActive = false,
        onPress,
        children,
        disabled = false,
        ...props
    }: Props, ref) => {
    return (
        <Button
            {...props}
            className={"w-8 h-8 " + props?.className}
            ref={ref}
            isIconOnly={true}
            size={"sm"}
            isDisabled={disabled}
            variant={isActive ? "shadow" : "light"}
            onPress={onPress}
        >
            {children}
        </Button>
    );
});

export default ActionButton;
