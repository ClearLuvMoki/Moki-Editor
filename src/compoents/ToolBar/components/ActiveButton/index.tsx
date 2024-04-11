import React, {forwardRef} from 'react';
import {StyledActionButton} from "./styled";

interface Props {
    isActive?: boolean;
    onPress: () => void,
    children: React.ReactNode;
}

const ActionButton = forwardRef<HTMLButtonElement, Props>(({isActive = false, onPress, children, ...props}: Props, ref) => {
    return (
        <StyledActionButton
            {...props}
            ref={ref}
            isIconOnly={true}
            size={"sm"}
            variant={isActive ? "shadow" : "light"}
            onPress={onPress}
        >
            {children}
        </StyledActionButton>
    );
});

export default ActionButton;
