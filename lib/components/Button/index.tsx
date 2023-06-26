import React from 'react';
import deepEqual from "deep-equal";
import {ButtonSize, ButtonType, StyledButton} from "./StyledButton";

export type ButtonProps = {
    size?: ButtonSize;
    type?: ButtonType
    onClick?: () => void;
    children: React.ReactNode
}

const Button = React.memo((
    {size = 'small', type = "primary", onClick, children}: ButtonProps
) => {
    return (
        <StyledButton
            size={size}
            type={type}
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
