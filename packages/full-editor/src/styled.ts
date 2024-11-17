import styled from "styled-components";
import {MokiEditor} from "@moki-editor/editor";

export const StyledRoot = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const StyledToolbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    border-bottom: 1px solid #ececec;
    padding: 8px 10px;
    gap: 10px;
`

export const StyledEditor = styled(MokiEditor)`
    width: 100%;
    flex: 1;
    padding: 10px;
    box-sizing: border-box;

    .ProseMirror {
        outline: none;

        > p:first-child {
            margin: 0;
        }

        /* Placeholder Styles */

        .is-empty::before {
            color: rgba(0, 0, 0, 0.4);
            content: attr(data-placeholder);
            float: left;
            height: 0;
            pointer-events: none;
            width: 100%;
        }

        &.ProseMirror-focused {
            > p.has-focus.is-empty::before {
                content: 'Type  /  to browse options';
            }

            > [data-type='columns'] > [data-type='column'] > p.is-empty.has-focus::before {
                content: 'Type  /  to browse options';
            }
        }

        blockquote .is-empty:not(.is-editor-empty):first-child:last-child::before {
            content: 'Enter a quote';
        }

        blockquote + figcaption.is-empty:not(.is-editor-empty)::before {
            content: 'Author';
        }

        [data-placeholder][data-suggestion]::before,
        [data-placeholder][data-suggestion] *::before {
            content: none !important;
        }

    }
`