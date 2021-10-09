import React, {useRef, useState} from "react";
import { PureComponent } from "react";
import styled from "styled-components";
import Popover from "react-popover";
import { Box, Text, Drop } from "grommet";
import { Moment } from "moment";
export interface HeaderItemProps{
    left?: number;
    width: number;
    label?: string | number;
    mode?: string;
    background?: any;

    date?: Moment;
    dayInfo?: (day?: Moment) => any;

    y?: number;
    className?: string;
  }
  
  export const BaseHeaderItem : React.FC<HeaderItemProps> = (props) => {
    const [ info, setInfo ] = useState<any>()
    const [ hovering, setHovering ] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement | null>(null)
      return (
        <div
          ref={(r) => ref.current = r}
          className={props.className}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: props.background,
            borderLeft: 'solid 1px rgb(216, 217, 218)',
            position: 'absolute',
            height: 20,
            left: props.left,
            width: props.width,
            cursor: 'pointer'
          }}
          onMouseOut={() => {
           if(props.y == 2) {
              setHovering(false)

           }
          }}
          onMouseOver={() => {
            if(props.y == 2) {
              if(props.dayInfo?.(props.date)){
                setInfo(props.dayInfo?.(props.date))
                setHovering(true)
              }
            }
          }}
        >
          <div>{props.label}</div>

          {hovering && <Drop
            round="xsmall"
            overflow="hidden"
            align={{top: 'bottom'}}
            target={ref.current || undefined}>
              <Box 
                background="neutral-2"
                overflow="hidden"
                round="xsmall"
                width="small">
                <Box 
                  justify="center"
                  align="center"
                  direction="row" 
                  pad="xsmall">
                  <Text size="small">Week capacity: {info}</Text>
                </Box>
              </Box>
          </Drop>}
        </div>
      );
    
  }
  
  export const HeaderItem = styled(BaseHeaderItem)`
  
    &:hover{
        background: rgba(127, 127, 127, 0.3);
    }
  `