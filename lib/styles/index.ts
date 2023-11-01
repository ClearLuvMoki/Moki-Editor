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


  .ProseMirror {
    position: relative;
    outline: none;
    word-wrap: break-word;
    white-space: break-spaces;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    margin-top: 10px;
  }

  .ProseMirror {
    > * + * {
      margin-top: 0.75em;
    }
  }

  // 引用
  blockquote {
    border-left: 4px solid #ccc;
    padding-left: 1rem;
  }

  //  占位符
  .ProseMirror p.is-editor-empty:first-child::before {
    color: #adb5bd;
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
  }

  //  行内代码
  code {
    padding: 4px;
    font-family: ${props => props.theme.fontFamilyMono};
    font-size: 0.875rem;
    line-height: 1.3;
    cursor: text;
    background-color: #b2b2b2;
    border-radius: 4px;
  }


  // 表格
  .ProseMirror {
    table {
      border-collapse: collapse;
      margin: 0;
      overflow: hidden;
      table-layout: fixed;
      width: 100%;

      td,
      th {
        border: 2px solid #ced4da;
        box-sizing: border-box;
        min-width: 1em;
        padding: 3px 5px;
        position: relative;
        vertical-align: top;

        > * {
          margin-bottom: 0;
        }
      }

      th {
        background-color: #f1f3f5;
        font-weight: bold;
        text-align: left;
      }

      .selectedCell:after {
        background: rgba(200, 200, 255, 0.4);
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        pointer-events: none;
        position: absolute;
        z-index: 2;
      }

      .column-resize-handle {
        background-color: #adf;
        bottom: -2px;
        position: absolute;
        right: -2px;
        pointer-events: none;
        top: 0;
        width: 4px;
      }

      p {
        margin: 0;
      }
    }
  }

  // 任务列表
  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    p {
      margin: 0;
    }

    li {
      display: flex;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }
  }

  pre {
    position: relative;
    display: flex;
    min-width: 48px;
    margin: 0;
    line-height: 1.3;
    background-color: #f5f6f7;
    counter-reset: line 0;

    code {
      width: 100%;
      padding: 0;
      margin: 12px;
      overflow: auto;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: inherit;
      white-space: pre;
      background-color: transparent;
      overscroll-behavior: contain;
    }

    .hljs {
      color: #24292e;
      background: #fff;
    }

    .hljs-doctag,
    .hljs-keyword,
    .hljs-meta .hljs-keyword,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-type,
    .hljs-variable.language_ {
      /* prettylights-syntax-keyword */
      color: #d73a49;
    }

    .hljs-title,
    .hljs-title.class_,
    .hljs-title.class_.inherited__,
    .hljs-title.function_ {
      /* prettylights-syntax-entity */
      color: #6f42c1;
    }

    .hljs-attr,
    .hljs-attribute,
    .hljs-literal,
    .hljs-meta,
    .hljs-number,
    .hljs-operator,
    .hljs-variable,
    .hljs-selector-attr,
    .hljs-selector-class,
    .hljs-selector-id {
      /* prettylights-syntax-constant */
      color: #005cc5;
    }

    .hljs-regexp,
    .hljs-string,
    .hljs-meta .hljs-string {
      /* prettylights-syntax-string */
      color: #032f62;
    }

    .hljs-built_in,
    .hljs-symbol {
      /* prettylights-syntax-variable */
      color: #e36209;
    }

    .hljs-comment,
    .hljs-code,
    .hljs-formula {
      /* prettylights-syntax-comment */
      color: #6a737d;
    }

    .hljs-name,
    .hljs-quote,
    .hljs-selector-tag,
    .hljs-selector-pseudo {
      /* prettylights-syntax-entity-tag */
      color: #22863a;
    }

    .hljs-subst {
      /* prettylights-syntax-storage-modifier-import */
      color: #24292e;
    }

    .hljs-section {
      font-weight: bold;

      /* prettylights-syntax-markup-heading */
      color: #005cc5;
    }

    .hljs-bullet {
      /* prettylights-syntax-markup-list */
      color: #735c0f;
    }

    .hljs-emphasis {
      font-style: italic;

      /* prettylights-syntax-markup-italic */
      color: #24292e;
    }

    .hljs-strong {
      font-weight: bold;

      /* prettylights-syntax-markup-bold */
      color: #24292e;
    }

    .hljs-addition {
      /* prettylights-syntax-markup-inserted */
      color: #22863a;
      background-color: #f0fff4;
    }

    .hljs-deletion {
      /* prettylights-syntax-markup-deleted */
      color: #b31d28;
      background-color: #ffeef0;
    }
  }

`;
