import styled from "styled-components";

export const StyledColorWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledColorSpan = styled.span<{color: string}>`
  background-color: ${props => props?.color || "#fff"};
  display: inline-flex;
  width: 100%;
  height: 3px;
  border-radius: 4px;
  transition: all .2s;
`