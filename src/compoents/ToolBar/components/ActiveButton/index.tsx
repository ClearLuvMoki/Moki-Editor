import React from 'react';
import {StyledActionButton} from "./styled";

interface Props {
    isActive?: boolean;
    onPress: () => void,
    children: React.ReactNode;
}

const ActionButton = ({isActive = false, onPress, children}: Props) => {
    return (
        <StyledActionButton
            isIconOnly={true}
            size={"sm"}
            variant={isActive ? "shadow" : "light"}
            onPress={onPress}
        >
            {children}
        </StyledActionButton>
    );
};

export default ActionButton;
