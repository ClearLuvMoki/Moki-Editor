import React from 'react';
import {StyledContainer} from "./styled";
import {NodeViewWrapper} from "@tiptap/react";

const TableNode = (props: any) => {
    console.log(props, 'props')
    return (
        <NodeViewWrapper className="table-wrapper">
            <StyledContainer>
                <table>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </StyledContainer>
        </NodeViewWrapper>
    );
};

export default TableNode;
