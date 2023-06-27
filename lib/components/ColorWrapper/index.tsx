import React from 'react';
import {StyledColorSpan, StyledColorWrapper} from "./StyledColorWrapper.ts";

type ColorWrapperProps = {
    color?: string
    children: React.ReactNode
}


const ColorWrapper = (
    {color = "#fff", children}: ColorWrapperProps
) => {
    return (
        <StyledColorWrapper>
            {children}
            <StyledColorSpan color={color}/>
        </StyledColorWrapper>
    );
};

export default ColorWrapper;
