import React, {memo} from 'react';
import {isEqualReact} from "@react-hookz/deep-equal";
import {Button} from "@nextui-org/react";

const colors = [
    '#000000',
    '#262626',
    '#595959',
    '#8C8C8C',
    '#BFBFBF',
    '#D9D9D9',
    '#E9E9E9',
    '#F5F5F5',
    '#FAFAFA',
    '#FFFFFF',
    '#F5222D',
    '#FA541C',
    '#FA8C16',
    '#FADB14',
    '#52C41A',
    '#13C2C2',
    '#1890FF',
    '#2F54EB',
    '#722ED1',
    '#EB2F96',
    '#FFE8E6',
    '#FFECE0',
    '#FFEFD1',
    '#FCFCCA',
    '#E4F7D2',
    '#D3F5F0',
    '#D4EEFC',
    '#DEE8FC',
    '#EFE1FA',
    '#FAE1EB',
    '#FFA39E',
    '#FFBB96',
    '#FFD591',
    '#FFFB8F',
    '#B7EB8F',
    '#87E8DE',
    '#91D5FF',
    '#ADC6FF',
    '#D3ADF7',
    '#FFADD2',
    '#FF4D4F',
    '#FF7A45',
    '#FFA940',
    '#FFEC3D',
    '#73D13D',
    '#36CFC9',
    '#40A9FF',
    '#597EF7',
    '#9254DE',
    '#F759AB',
    '#CF1322',
    '#D4380D',
    '#D46B08',
    '#D4B106',
    '#389E0D',
    '#08979C',
    '#096DD9',
    '#1D39C4',
    '#531DAB',
    '#C41D7F',
    '#820014',
    '#871400',
    '#873800',
    '#614700',
    '#135200',
    '#00474F',
    '#003A8C',
    '#061178',
    '#22075E',
    '#780650',
];

interface Props {
    onSetColor: (color?: string | null) => void;
}

const ColorPicker = memo((props: Props) => {
    return (
        <div className="flex flex-wrap px-4 py-3 w-[272px]">
            <div className="flex flex-wrap">
                {
                    colors.map((item, index) => {
                        return <div
                            className="w-[24px] h-[24px] flex justify-center items-center rounded border-1 border-transparent hover:border-1 hover:border-zinc-300"
                            style={{
                                transition: "all .2s",
                                marginBottom: index > 60 ? 0 : 4,
                            }}
                            onClick={() => {
                                props?.onSetColor(item)
                            }}
                        >
                            <span
                                className="w-[20px] h-[20px] rounded cursor-pointer"
                                style={{
                                    display: "block",
                                    backgroundColor: item
                                }}
                            />
                        </div>
                    })
                }
            </div>
            <Button
                size="sm"
                fullWidth={true}
                variant="solid"
                onPress={() => props?.onSetColor(null)}
            >
                恢复默认
            </Button>
        </div>
    );
}, (prevProps, nextProps) => {
    return isEqualReact(prevProps, nextProps)
});

export default ColorPicker;
