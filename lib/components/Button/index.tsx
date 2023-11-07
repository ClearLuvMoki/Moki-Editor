import React, {forwardRef} from 'react';
import deepEqual from "deep-equal";
import {StyledButton} from "./StyledButton";

export type ButtonProps = {
    onClick?: () => void;
    children: React.ReactNode
    disabled?: boolean;
    active?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const Button = React.memo((
    {onClick, children, disabled, active, className = "", style = {}}: ButtonProps
) => {
    return (
        <StyledButton
            className={className}
            disabled={disabled}
            active={active}
            style={style}
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
