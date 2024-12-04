import React, {memo, useRef, useState} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {
    Autocomplete,
    AutocompleteItem,
    DropdownItem
} from "@nextui-org/react";

const CodeBlockNode = memo(({node: {attrs}, updateAttributes, extension}: any) => {
    const $container = useRef<HTMLDivElement>(null);
    const {language: defaultLanguage} = attrs;
    // const [isOpen, setIsOpen] = useState(false);
    // const LanguageList = (extension.options.lowlight.listLanguages()).concat(["auto"]);

    return (
        <NodeViewWrapper>
            <div className="border-1 border-zinc-200 rounded-xl p-4 mb-4" ref={$container}>
                <div className="flex items-center ">
                    <Autocomplete
                        className="w-[200px]"
                        items={(extension.options.lowlight.listLanguages()).concat(["auto"]).map(item => {return {value: item}})}
                        defaultSelectedKey={defaultLanguage}
                        autoFocus={false}
                        allowsEmptyCollection={false}
                        popoverProps={{
                            portalContainer: $container.current!
                        }}
                        onChange={(event) => {
                            const value = event?.target?.value;
                            if (!value) return;
                            updateAttributes({language: value})
                        }}
                    >
                        {(item: any)=>(
                            <AutocompleteItem key={item.value}>
                                {item.value}
                            </AutocompleteItem>
                        )}
                    </Autocomplete>
                </div>
                <pre className="!m-0 !mt-6">
                    <NodeViewContent as="code"/>
                </pre>
            </div>
        </NodeViewWrapper>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default CodeBlockNode;
