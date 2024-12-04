import React, {forwardRef, memo, useEffect, useImperativeHandle, useRef} from 'react';
import {
    Listbox,
    ListboxSection,
    ListboxItem
} from "@nextui-org/react";
import scrollIntoView from "scroll-into-view-if-needed";
import {SlashMenuItem} from "../extensions/slash";

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
        const el = $container.current?.querySelector(`[data-key="${selectedKey}"]`)
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
            className="w-[250px] max-h-[240px] shadow-[rgb(0_0_0/10%)_0_0_10px] rounded-xl p-2 overflow-y-scroll no-scrollbar bg-white"
            ref={$container}
        >
            {(props.items && props.items.length > 0) ? (
                <Listbox
                    variant="flat"
                    selectionMode="single"
                    selectedKeys={[selectedKey]}
                    onSelectionChange={(key) => {
                        const activeSlash = Array.from(key) as string[];
                        const item = activeSlash[0];
                        if (!item) return;
                        selectItem(item)
                    }}
                >
                    {
                        (props?.items || []).map((item, index) => {
                            return (
                                <ListboxSection title={item.title} key={item.title}>
                                    {
                                        (item.children || []).map(item => (
                                            <ListboxItem
                                                key={item.slash}
                                                className="slash-menu-item"
                                                description={item.slash}
                                                startContent={item.icon}
                                            >
                                                {item.text}
                                            </ListboxItem>
                                        ))
                                    }
                                </ListboxSection>
                            )
                        })
                    }
                </Listbox>
            ) : (<div className="text-zinc-200 px-2">{"暂无"}</div>)}
        </div>
    );
});

export default SlashNode;
