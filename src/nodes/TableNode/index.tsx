import React from 'react';
import {NodeViewWrapper} from "@tiptap/react";

const TableNode = (props: any) => {
    return (
        <NodeViewWrapper className="table-wrapper">
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </NodeViewWrapper>
    );
};

export default TableNode;
