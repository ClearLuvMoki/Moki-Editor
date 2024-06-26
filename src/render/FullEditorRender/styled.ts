import styled from '@emotion/styled'

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const StyledEditor = styled.div`
    width: 100%;
    height: calc(100% - 40px);

    > div {
        width: 100%;
        height: 100%;

        .ProseMirror {
            > * + * {
                margin-top: 0.75em;
            }

            p.is-empty::before {
                color: #adb5bd;
                content: attr(data-placeholder);
                float: left;
                height: 0;
                pointer-events: none;
            }

            padding: 4rem 2rem 4rem 5rem;
            outline-width: 0;
            width: 100%;
            height: 100%;
            word-wrap: break-word;
            white-space: break-spaces;
            position: relative;

            h1 {
                font-size: 2rem;
                font-weight: bold;
            }

            h2 {
                font-size: 1.5rem;
                font-weight: bold;
            }

            h3 {
                font-size: 1.2rem;
                font-weight: bold;
            }

            h4 {
                font-size: 1rem;
                font-weight: bold;
            }

            h5 {
                font-size: .83rem;
                font-weight: bold;
            }

            h6 {
                font-size: .67rem;
                font-weight: bold;
            }


            ul,
            ol {
                list-style: revert;
                padding: 0 1rem;
            }

            blockquote {
                padding-left: 1em;
                border-left: 2px solid #a1a1a1;
                color: #a1a1a1;
            }

            // code block
            pre {
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
            }

            // table

            table {
                border-collapse: collapse;
                table-layout: fixed;
                width: 100%;
                margin: 0;
                overflow: hidden;

                td,
                th {
                    min-width: 1em;
                    border: 2px solid #ced4da;
                    padding: 3px 5px;
                    vertical-align: top;
                    box-sizing: border-box;
                    position: relative;

                    > * {
                        margin-bottom: 0;
                    }
                }

                th {
                    font-weight: bold;
                    text-align: left;
                    background-color: #f1f3f5;
                }

                .selectedCell:after {
                    z-index: 2;
                    position: absolute;
                    content: "";
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background: rgba(200, 200, 255, 0.4);
                    pointer-events: none;
                }

                .column-resize-handle {
                    position: absolute;
                    right: -2px;
                    top: 0;
                    bottom: -2px;
                    width: 4px;
                    background-color: #adf;
                    pointer-events: none;
                }

            }

            // task list
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

                    ul li,
                    ol li {
                        display: list-item;
                    }

                    ul[data-type="taskList"] > li {
                        display: flex;
                    }
                }
            }
        }
    }
`
