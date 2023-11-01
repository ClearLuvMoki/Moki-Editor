import React from 'react';
import deepEqual from "deep-equal";
import {ButtonSize, StyledButton} from "./StyledButton";

export type ButtonProps = {
    size?: ButtonSize;
    onClick?: () => void;
    children: React.ReactNode
    disabled?: boolean;
    active?: boolean;
}

const Button = React.memo((
    {size = 'small',  onClick, children, disabled, active}: ButtonProps
) => {
    return (
        <StyledButton
            disabled={disabled}
            active={active}
            size={size}
            onClick={() => {
                onClick && onClick();
            }}
        >
            {children}
        </StyledButton>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default Button;
