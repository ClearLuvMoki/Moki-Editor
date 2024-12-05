import React, {forwardRef, memo, useEffect, useImperativeHandle, useRef} from 'react';
import scrollIntoView from "scroll-into-view-if-needed";
import {SlashMenuItem} from "@/extensions/slash";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/command"

const SlashNode = forwardRef((props: {
    items: SlashMenuItem[];
    command: (item: SlashMenuItem) => void;
}, ref) => {
    const $container = useRef<HTMLDivElement>(null);
    const [selectedKey, setSelectedKey] = React.useState<string>('');
    const childrenList = (props?.items || []).reduce((acc: any[], obj) => acc.concat(obj.children || []), []) || [];

    useEffect(() => {
        (props.items && props.items.length) && setSelectedKey(props?.items?.[0]?.children?.[0]?.slash)
    }, [props?.items])

    const selectItem = (slash: string) => {
        setSelectedKey(slash);
        const command = childrenList.find(item => item.slash === slash)!;
        if (command) {
            props.command(command);
        }
    };

    const upHandler = () => {
        const currentIndex = childrenList.findIndex(item => item.slash === selectedKey);
        const nextIndex = currentIndex - 1 < 0 ? childrenList.length - 1 : currentIndex - 1;
        const item = (childrenList).find((_, index) => index === nextIndex);
        setSelectedKey(item.slash);
    };

    const downHandler = () => {
        const currentIndex = childrenList.findIndex(item => item.slash === selectedKey);
        const nextIndex = currentIndex + 1 >= childrenList.length ? 0 : currentIndex + 1;
        const item = (childrenList).find((_, index) => index === nextIndex);
        setSelectedKey(item.slash);
    }

    const enterHandler = () => {
        selectItem(selectedKey);
    }

    useEffect(() => {
        if (!selectedKey) return;
        const el = $container.current?.querySelector(`[data-value="${selectedKey}"]`)
        el && scrollIntoView(el, {behavior: "smooth", scrollMode: "if-needed"});
    }, [selectedKey]);

    useImperativeHandle(ref, () => ({
        onKeyDown: ({event}) => {
            if (event.key === "ArrowUp") {
                upHandler();
                return true;
            }

            if (event.key === "ArrowDown") {
                downHandler();
                return true;
            }

            if (event.key === "Enter") {
                enterHandler();
                return true;
            }

            return false;
        }
    }));


    return (
        <div
            ref={$container}
            className="w-[250px] shadow-[rgb(0_0_0/10%)_0_0_10px] rounded-xl p-2 bg-white"
        >
            {
                <Command
                    value={selectedKey}
                >
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandList className="no-scrollbar">
                        {
                            (props?.items || []).map((item, index) => {
                                return (
                                    <CommandGroup heading={item.title} key={item.title}
                                    >
                                        {
                                            (item.children || []).map(item => (
                                                <CommandItem
                                                    key={item.slash}
                                                    value={item.slash}
                                                    className="slash-menu-item flex items-center gap-1 hover:bg-accent"
                                                    onSelect={(value) => {
                                                        if(!value) return;
                                                        selectItem(value);
                                                    }}
                                                >
                                                    {item.icon}
                                                    <span>{item.text}</span>
                                                </CommandItem>
                                            ))
                                        }
                                    </CommandGroup>
                                )
                            })
                        }
                    </CommandList>
                </Command>
            }
        </div>
    );
});

export default SlashNode;
