import React, {forwardRef, memo} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import scrollIntoView from "scroll-into-view-if-needed";
import clsx from "clsx"

const SlashNode = memo(forwardRef((props: any, ref) => {
    return (
        <div className="w-[254px] max-h-[240px] shadow-[rgb(0_0_0/10%)_0_0_10px] rounded-xl p-4">
            {/*{props.items.length ? (*/}
            {/*    props.items.map((item, index) => {*/}
            {/*        return "divider" in item ? (*/}
            {/*            <div className="text-zinc-300 px-4 py-2">{item.title}</div>*/}
            {/*        ) : (*/}
            {/*            <div*/}
            {/*                className={clsx("")}*/}
            {/*                active={selectedIndex === index}*/}
            {/*                onClick={() => selectItem(index)}>*/}
            {/*                <div>*/}
            {/*                    {item.icon}*/}
            {/*                    <StyledText>{item.text}</StyledText>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <StyledSlash>{item.slash}</StyledSlash>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        );*/}
            {/*    })*/}
            {/*) : (*/}
            {/*    <StyledTitle>{i18n('notfound')}</StyledTitle>*/}
            {/*)}*/}
        </div>
    );
}), (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default SlashNode;
