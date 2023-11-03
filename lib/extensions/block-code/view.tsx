import React, {useRef} from 'react';
import {NodeViewProps} from "@tiptap/core";
import deepEqual from "deep-equal";
import {NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import styled from "styled-components";
import {Select} from "@arco-design/web-react";
import {lowlight} from 'lowlight'


const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0;
  padding: 6px 12px;
  border: 1px solid ${props => props.theme.codeBlockBorderColor || '#dee0e3'};
  border-bottom: 0;
  background-color: rgba(46, 50, 56, .1);
`;

const StyledContent = styled.div`
  border: 1px solid ${props => props.theme.codeBlockBorderColor || '#dee0e3'};
  background-color: rgba(46, 50, 56, .1);
`;

export const BlockCodeView = React.memo((
    {editor, node: {attrs}, updateAttributes}: NodeViewProps
) => {
    const isEditable = editor.isEditable;
    const {language: defaultLanguage} = attrs;
    const $container = useRef<HTMLPreElement>(null);

    const languages = lowlight?.listLanguages()?.map(item => {
        return {
            label: item,
            value: item
        }
    })


    return (
        <NodeViewWrapper style={{position: "relative", borderRadius: 8, overflow: "hidden"}}>
            <StyledToolbar>
                <Select
                    style={{width: 200}}
                    value={defaultLanguage || "auto"}
                    options={languages}
                    disabled={!isEditable}
                    onChange={(value) => {
                        updateAttributes({language: value})
                    }}
                />
            </StyledToolbar>
            <StyledContent>
                 <pre ref={$container}>
                    <NodeViewContent as={"code"}/>
                 </pre>
            </StyledContent>
        </NodeViewWrapper>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

