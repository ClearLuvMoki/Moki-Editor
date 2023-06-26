import styled from "styled-components";
import {ButtonProps} from "./index";

export type ButtonType = "primary" | "normal";

export type ButtonSize = "small" | "normal" | "large";

const SizeMap: Record<ButtonSize, number> = {
    small: 4,
    normal: 6,
    large: 10
};

type StyledButtonProps = ButtonProps & {
    type: ButtonType;
};
export const StyledButton = styled.button<StyledButtonProps>`
  width: 30px;
  height: 30px;
  margin: 0px 2px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  padding: ${props => (props.size ? SizeMap[props.size] : 6)}px;

  background: ${props => props.type !== "normal"
          ? "rgb(213,213,213)"
          : "transparent"};

  border: 0 solid transparent;
  border-radius: 2px;
  box-shadow: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  box-sizing: content-box;

  color: hsl(214deg 11% 12% / 80%);
  font-size: 18px;
  font-weight: 600;
  transition: all .3s;

  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: ${props =>
            props.type === "normal"
                    ? "rgb(46 50 56 / 15%)"
                    : props.theme[props.type!]};
  }
`;