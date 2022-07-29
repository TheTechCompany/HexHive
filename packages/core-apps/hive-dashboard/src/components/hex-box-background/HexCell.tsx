import { HexHiveTheme } from '@hexhive/styles';
import { Box, Text, Layer, List, Button } from 'grommet';
import React, { useRef, useState } from 'react';
import { Hexagon } from './Hexagon';


export interface HexCellProps {
    top?: number;
    size?: number;
    left?: number;
    apps?: any[];
    onClick?: () => void;
    onSelect?: (item: any) => void;
    background?: boolean;
}

export const HexCell : React.FC<HexCellProps> = (props) => {
    const [ selected, setSelected ] = useState<boolean>(false);

    const HEX_SIZE = props.size || 3;

    const TOP_MULTIPLIER = HEX_SIZE * 1.05;
    const WIDTH_MULTIPLIER = HEX_SIZE * 1.2;
    const ROW_OFFSET = HEX_SIZE * 0.6;

    return (
        <div>
        <Hexagon
            selected={selected}
            onClick={() => props.onClick()}
            size={HEX_SIZE + 1} 
            top={(props.top * TOP_MULTIPLIER) - 0.8} 
            left={-0.8 + (props.left * WIDTH_MULTIPLIER + (props.top % 2 == 0 ? ROW_OFFSET : 0))}
            color={props.background ? "rgba(127, 127, 127, 0.3)" : HexHiveTheme?.palette?.secondary.main} >
            {/* <Text weight="bold" color="neutral-4">{props.text}</Text> */}
           
        </Hexagon>
         {/* {selected && <Layer
                style={{
                    position: 'relative'
                }}
                    position="right"
                    modal={false}
                    onClickOutside={() => setSelected(false)}
                    onEsc={() => setSelected(false)}
                    target={hexRef.current}>
                        <Box
                            round="xsmall"
                            overflow={"hidden"}
                            elevation="medium"
                            style={{
                                position:'absolute',
                                left: '3.69em', 
                                padding: '2px' ,
                                minWidth: '200px',
                                minHeight: '220px'
                            }}>
                                <Box 
                                    flex
                                    background="neutral-1">
                                    <Box background="accent-2" direction="row" pad="xsmall">
                                        <Text>Available Apps</Text>
                                    </Box>
                                <Box flex overflow={'scroll'}>
                                    <List 
                                        primaryKey={"name"}
                                        onClickItem={({item}) => props.onSelect(item)}
                                        data={props.apps} />
                                    </Box>
                                    <Button label="More..." />

                                </Box>


                        </Box>
                </Layer>} */}
        </div>
    );
}   