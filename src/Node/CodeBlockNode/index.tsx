import React from 'react';
import {NodeViewContent, NodeViewWrapper} from '@tiptap/react'
import {StyledHeader} from "./styled";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";


const CodeBlockNode = ({node: {attrs: {language: defaultLanguage = "plaintext"}}, updateAttributes, extension}: any) => {
    return (
        <NodeViewWrapper className="code-block">
            <pre>
                <StyledHeader>
                    <Autocomplete
                        size={"sm"}
                        color={"default"}
                        selectedKey={defaultLanguage ?? "plaintext"}
                        className={"dark w-[200px]"}
                        onSelectionChange={key => {
                            setTimeout(() => {
                                updateAttributes?.({language: key})
                            }, 0)
                        }}
                    >
                        {
                            (extension?.options?.lowlight?.listLanguages() || []).map((item: string) => (
                                <AutocompleteItem
                                    key={item}
                                    value={item}
                                >{item}</AutocompleteItem>
                            ))
                        }
                    </Autocomplete>
                </StyledHeader>
              <NodeViewContent as="code"/>
            </pre>
        </NodeViewWrapper>
    );
};

export default CodeBlockNode;
