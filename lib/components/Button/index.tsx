import React, {forwardRef} from 'react';
import deepEqual from "deep-equal";
import {ButtonSize, StyledButton} from "./StyledButton";

export type ButtonProps = {
    size?: ButtonSize;
    onClick?: () => void;
    children: React.ReactNode
    disabled?: boolean;
    active?: boolean;
    className?: string;
}

const Button = React.memo((
    {size = 'small', onClick, children, disabled, active, className = ""}: ButtonProps
) => {
    return (
        <StyledButton
            className={className}
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
