import "@arco-design/web-react/dist/css/arco.css";
import styled from "styled-components";

export const StyledEditor = styled.div`
  box-sizing: border-box;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
  font-size: 1em;
  line-height: 1.7em;
  width: 100%;
  padding: 0 12px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  > div {
    position: relative;
  }

  .ProseMirror {
    position: relative;
    outline: none;
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
  }

  code {
    padding: 4px;
    font-family: ${props => props.theme.fontFamilyMono};
    font-size: 0.875rem;
    line-height: 1.3;
    cursor: text;
    background-color: #f5f6f7;
    border-radius: 4px;
  }
`;
