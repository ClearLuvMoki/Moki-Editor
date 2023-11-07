import styled, {css} from "styled-components";
import {ButtonProps} from "./index";


export const StyledButton = styled.button<ButtonProps>`
  width: 30px;
  height: 30px;
  margin: 0px 2px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 4px;

  background: ${props => props.active
          ? "rgb(213,213,213)"
          : "transparent"};

  border: 0 solid transparent;
  box-shadow: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  box-sizing: content-box;

  color: hsl(214deg 11% 12% / 80%);
  font-weight: 600;
  transition: all .3s;

  vertical-align: middle;
  white-space: nowrap;
  border-radius: 8px;
  font-size: 20px;

  ${(props) => {
    if (props.disabled) {
      return css`
        opacity: .5;
        cursor: not-allowed;
      `
    }
  }}
  &:hover {
    background-color: ${props =>
            !props.active
                    ? "rgb(46 50 56 / 15%)"
                    : "transparent"};
  }
`;
