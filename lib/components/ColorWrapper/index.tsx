import React from 'react';
import {StyledColorSpan, StyledColorWrapper} from "./StyledColorWrapper.ts";

type ColorIconWrapperProps = {
    color?: string
    children: React.ReactNode
}


const ColorIconWrapper = (
    {color = "#fff", children}: ColorIconWrapperProps
) => {
    return (
        <StyledColorWrapper>
            {children}
            <StyledColorSpan color={color}/>
        </StyledColorWrapper>
    );
};

export default ColorIconWrapper;
