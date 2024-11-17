import styled from "styled-components";

export const StyledBlockNodeHeader = styled.div`
    .fui-Listbox {
        height: 300px;
        max-height: 300px;
    }
    width: 100%;
    display: flex;
    margin: 4px 0 20px;
    align-items: center;
    
    .language-listbox {
        max-height: 500px;
    }
`;

export const StyledCode = styled.pre`
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
    }

    .hljs-comment,
    .hljs-quote {
        color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
        color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
        color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
        color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
        color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
        color: #70cff8;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: 700;
    }
`;
