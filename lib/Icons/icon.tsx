import React, { forwardRef } from "react";

export type IconProps = {
  style?: React.CSSProperties;
  onClick?: () => void;
  svg: React.ReactNode;
};

const DEFAULT_EMPTY_STYLE = {};

const IconSpanStyles: React.CSSProperties =  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: 'center',
    cursor: "pointer"
};

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ style = DEFAULT_EMPTY_STYLE, svg }, ref) => {
    return (
      <span  ref={ref} style={{ ...IconSpanStyles, ...style }}>
        {svg}
      </span>
    );
  }
);

export const buildIcon = (svg: IconProps["svg"]) =>
  forwardRef<HTMLSpanElement, Omit<IconProps, "svg">>((props, ref) => (
    <Icon ref={ref} svg={svg} {...props}></Icon>
  ));
