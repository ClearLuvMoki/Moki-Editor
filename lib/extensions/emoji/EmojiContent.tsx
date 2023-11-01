import React, {useState} from 'react';
import deepEqual from "deep-equal";
import {Tabs} from '@arco-design/web-react';
import styled from "styled-components";
import {ACTIVITIES, EXPRESSIONES, GESTURES, OBJECTS, SKY_WEATHER, SYMBOLS} from "./constants.ts";
import {motion} from "framer-motion";

const TabPane = Tabs.TabPane;

interface EmojiContentProps {
    onChange?: (emojiValue: string) => void;
}

const StyledContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  box-sizing: border-box;
`
const StyledHeader = styled.div`
  width: 100%;
  height: 45px;
  padding: 4px;
  box-sizing: border-box;
`

const StyledContent = styled.div`
  width: 100%;
  height: calc(100% - 45px);
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
  padding: 10px 20px;
  box-sizing: border-box;

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

const StyledEmojiWrapper = styled(motion.div)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  font-size: 26px;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: rgb(46 50 56 / 15%);
  }
`

const TabList = [
    {key: "emoji", title: "表情"},
    {key: "weather", title: "天气"},
    {key: "hands", title: "手势"},
    {key: "symbol", title: "符号"},
    {key: "package", title: "物品"},
    {key: "sports", title: "运动"},
]

const EmojiContent = React.memo(({onChange}: EmojiContentProps) => {
    const ALL = [...EXPRESSIONES, ...SKY_WEATHER, ...GESTURES, ...SYMBOLS, ...OBJECTS, ...ACTIVITIES]
    const [emojiList, setEmojiList] = useState(ALL);

    const handleChangeKeys = (key: string) => {
        switch (key) {
            case "emoji":
                return setEmojiList(ALL);
            case "weather":
                return setEmojiList(SKY_WEATHER);
            case "hands":
                return setEmojiList(GESTURES);
            case "symbol":
                return setEmojiList(SYMBOLS);
            case "package":
                return setEmojiList(OBJECTS);
            case "sports":
                return setEmojiList(ACTIVITIES);
            default:
                setEmojiList(EXPRESSIONES);
        }
    };


    return (
        <StyledContainer>
            <StyledHeader>
                <Tabs
                    defaultActiveTab='emoji'
                    onChange={(key) => {
                        handleChangeKeys(key)
                    }}
                >
                    {
                        TabList.map(item => (
                            <TabPane key={item.key} title={item.title}/>
                        ))
                    }
                </Tabs>
            </StyledHeader>
            <StyledContent id={"EmojiContent-content"}>
                {
                    emojiList.map(emoji => (
                        <StyledEmojiWrapper
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            key={emoji}
                            onClick={() => {
                                onChange && onChange(emoji)
                            }}
                        >{emoji}</StyledEmojiWrapper>
                    ))
                }
            </StyledContent>
        </StyledContainer>
    );
}, (prevProps, nextProps) => {
    return deepEqual(prevProps, nextProps);
});

export default EmojiContent;
