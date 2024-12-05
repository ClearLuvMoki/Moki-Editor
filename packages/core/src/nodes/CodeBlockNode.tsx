import React, {memo, useRef, useState, Suspense} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {NodeViewContent, NodeViewWrapper} from "@tiptap/react";
import {Button} from "@/components/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/popover"
import {Check, ChevronsUpDown} from "lucide-react";
import {cn} from "@/utils/tools";

const CodeBlockNode = memo(({node: {attrs}, updateAttributes, extension}: any) => {
    const {language: defaultLanguage} = attrs;
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const LanguageList = (extension.options.lowlight.listLanguages()).concat(["auto"]);

    return (
        <NodeViewWrapper>
            <div className="border border-1 border-zinc-200 rounded-xl p-4 mb-4">
                <div className="flex items-center ">
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[200px] justify-between"
                            >
                                {value
                                    ? LanguageList.find((lang) => lang === value)
                                    : (defaultLanguage || "Search language...")}
                                <ChevronsUpDown className="opacity-50"/>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search language..." className="h-9"/>
                                <CommandList>
                                    <CommandEmpty>No language found.</CommandEmpty>
                                    <CommandGroup>
                                        {LanguageList.map((lang) => (
                                            <CommandItem
                                                key={lang}
                                                value={lang}
                                                onSelect={(currentValue) => {
                                                    setValue(currentValue === value ? "" : currentValue)
                                                    setOpen(false)
                                                }}
                                            >
                                                {lang}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        value === lang ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
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
