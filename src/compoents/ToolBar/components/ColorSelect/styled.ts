import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    height: auto;
    background-color: #fff;
    padding: 5px 2px;
`

export const StyledLine = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    > div {
        margin: 2px 4px;
    }
`
export const StyledDefaultLine = styled.div`
    display: flex;
    align-items: center;

    > div {
        margin: 2px 4px;
    }

    > svg {
        color: rgb(255, 82, 82);
        cursor: pointer;
        height: 20px;
    }
`

export const StyledColor = styled.div`
    width: 20px;
    min-width: 20px;
    min-height: 20px;
    height: 20px;
    cursor: pointer;
    padding: 2px;
    border-radius: 4px;
    border: 1px solid #ccc;
`
