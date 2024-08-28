import React from 'react';
import {NodeViewContent, NodeViewWrapper} from '@tiptap/react'
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";


const CodeBlockNode = ({node: {attrs: {language: defaultLanguage = "plaintext"}}, updateAttributes, extension}: any) => {
    return (
        <NodeViewWrapper className="code-block">
            <pre>
                <div className="w-full flex mt-2 mb-5 items-center">
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
                </div>
              <NodeViewContent as="code"/>
            </pre>
        </NodeViewWrapper>
    );
};

export default CodeBlockNode;
