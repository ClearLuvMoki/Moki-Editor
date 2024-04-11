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
        }
    }
`
