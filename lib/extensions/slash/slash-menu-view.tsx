import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import styled, {css} from "styled-components";
import {SlashMenuItem} from "../../editor/EditorRender/base-kit/slash-commands.tsx";
import {motion} from "framer-motion"
import {Editor} from "@tiptap/core";
import scrollIntoView from "scroll-into-view-if-needed";

const StyledContainer = styled(motion.div)`
  width: 180px;
  max-height: 240px;
  overflow: auto;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 0.25);
  border-radius: 8px;
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 6px !important;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #BBBFC4;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background: transparent;
  }
`

const StyledTitle = styled.div`
  padding: 10px;
  color: #888888;
  font-size: 18px;
  user-select: none;
`

const StyledItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  padding: 10px;
  transition: background-color .2s;
  user-select: none;
  cursor: pointer;

  ${props => {
    if (props?.active) {
      return css`
        background-color: #deebff;
      `
    } else {
      return css`
        &:hover {
          background-color: #f4f5f7;
        }
      `
    }
  }}

`

const SlashMenuView = forwardRef((props: { items: SlashMenuItem[], editor: Editor, command: any }, ref) => {
    const [selectAction, setSelectAction] = useState<string | undefined>();
    const $container = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (props?.items?.length) {
            setSelectAction(props.items?.filter(d => !d?.divider)?.[0]?.slash)
        }
    }, [props?.items])

    useEffect(() => {
        if (selectAction) {
            const el = $container?.current?.querySelector(
                `.SlashMenuView-${selectAction?.replace("/", "")}`
            );
            el && scrollIntoView(el, {behavior: "smooth", scrollMode: "if-needed"});
        }

    }, [selectAction]);


    const upHandler = () => {
        let lastAction;
        const selectActionIndex = props.items?.findIndex(action => action.slash === selectAction);
        const firstActionIndex = props.items?.findIndex(action => !action.divider);
        for (let i = selectActionIndex; i > 0; i--) {
            if (i === firstActionIndex) {
                lastAction = props.items[props.items.length - 1]?.divider ? props.items.findLast(d => !d.divider)?.slash : props.items[props.items.length - 1]?.slash
                break;
            } else {
                lastAction = props.items[i - 1]?.divider ? props.items.slice(0, selectActionIndex).findLast(d => !d.divider)?.slash : props.items[i - 1]?.slash
                break;
            }
        }
        setSelectAction(lastAction)
    };

    const downHandler = () => {
        let nextAction;
        const selectActionIndex = props.items?.findIndex(action => action.slash === selectAction);
        for (let i = selectActionIndex; i < props.items.length; i++) {
            if (i === props.items.length - 1) {
                nextAction = props.items[0]?.divider ? props.items.find(d => !d.divider)?.slash : props.items[0]?.slash
                break;
            } else {
                nextAction = props.items[i + 1]?.divider ? props.items.slice(i + 1, props.items.length - 1).find(d => !d.divider)?.slash : props.items[i + 1]?.slash
                break;
            }
        }
        setSelectAction(nextAction)
    };

    const enterHandler = () => {
        selectItem(selectAction as string)
    };


    const selectItem = (slash: string) => {
        const command = props.items.find(d => d?.slash === slash);

        if (command) {
            props.command(command);
        }
    };

    useImperativeHandle(ref, () => ({
        onKeyDown: ({event}: { event: any }) => {
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
        <StyledContainer
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            ref={$container}
        >
            {
                props.items?.length > 0 && props.items?.map((item, index) => {
                    return item?.divider ? (
                        <StyledTitle key={index}>{item.title}</StyledTitle>
                    ) : (<StyledItem
                        key={index}
                        className={`SlashMenuView-${item.slash?.replace("/", "")}`}
                        active={selectAction === item.slash}
                        onClick={() => {
                            if (item.slash) {
                                selectItem(item?.slash)
                            } else {
                                throw Error("快捷操作没有设置Slash!")
                            }
                        }}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </StyledItem>)
                })
            }
        </StyledContainer>
    );
});

export default SlashMenuView;
