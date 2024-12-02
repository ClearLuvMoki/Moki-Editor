import React, {memo, useRef} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {
    Autocomplete,
    AutocompleteItem
} from "@nextui-org/react";

const CodeBlockNode = memo(({editor, node: {attrs}, updateAttributes, extension}: any) => {
    const $container = useRef<HTMLPreElement>(null);
    const {language: defaultLanguage} = attrs;

    return (
        <NodeViewWrapper>
            <div className="border-1 border-zinc-200 rounded-xl p-4 mb-4">
                <div className="flex items-center ">
                    <Autocomplete
                        className="w-[200px]"
                        defaultSelectedKey={defaultLanguage}
                        popoverProps={{
                            portalContainer: document.getElementsByClassName("moki-full-editor-root")?.[0]
                        }}
                        onChange={(event) => {
                            const value = event?.target?.value;
                            updateAttributes({language: value})
                        }}
                    >
                        <AutocompleteItem key="auto">auto</AutocompleteItem>
                        {extension.options.lowlight.listLanguages().map((lang, index) => (
                            <AutocompleteItem key={lang} value={lang}>
                                {lang}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                </div>
                <pre ref={$container} className="!m-0 !mt-6">
                    <NodeViewContent as="code"/>
                </pre>
            </div>
        </NodeViewWrapper>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default CodeBlockNode;
