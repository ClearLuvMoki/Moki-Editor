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
            padding: 4rem 2rem 4rem 5rem;
            outline-width: 0;
            width: 100%;
            height: 100%;
            word-wrap: break-word;
            white-space: break-spaces;
            position: relative;
        }
    }
`
