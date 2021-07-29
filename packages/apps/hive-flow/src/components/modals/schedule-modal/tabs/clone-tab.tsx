import { Box } from 'grommet';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components'

import {Calendar} from "react-multi-date-picker";

import moment from 'moment';


export interface CloneTabProps {
    selected?: Date[]; //Already selected
    onSelect?: (dates: Date[]) => void; //Select state is items changed

    className?: string;
}

const BaseCloneTab : React.FC<CloneTabProps> = ({
    selected = [],
    onSelect,
    className
}) => {
    const [ cloneSelected, setCloneSelected ] = useState<Date[]>([]);

    useEffect(()=> {
        if(selected){
            setCloneSelected(selected)
        }
    }, [selected])

    const onCloneSelect = (select: Date[]) => {
        
/*
        select = moment(select).add(2, 'hours').toDate(); 

        var selectedTimes = cloneSelected?.slice();
        var exists = false;

        for(var i = 0; i < selectedTimes.length; i++){
          if(select.getTime() == selectedTimes[i].getTime()){
            selectedTimes.splice(i, 1);
            exists = true;
          }
        }

        if(!exists){
            selectedTimes.push(select);
        }
        setCloneSelected(selectedTimes)
        */
        onSelect?.(select)

        console.log(select)
    }

    return (
    <Box 
        direction="column"
        className={className}>
        <Calendar
            className="calendar-contained"
            multiple
            value={selected.concat(cloneSelected)}
            onChange={(dates) => {
                if(Array.isArray(dates)){
                    let d = dates.map((x) => x.valueOf())
                     onCloneSelect([...new Set(d)].map((x) => new Date(x)))
                }
            }}
        />
    </Box>
    )
}

export const CloneTab = styled(BaseCloneTab)`
    .calendar-contained{
        height: 100%;
        width: 100%;
        display: flex;
    }

    .calendar-contained .rmdp-calendar{
        flex: 1;
    }

    .calendar-contained .rmdp-calendar > div:last-child{
        flex: 1;
        display: flex;
    }

    .calendar-contained .rmdp-calendar .rmdp-day-picker{
        flex: 1;
        flex-direction: column;
        display: flex;
        padding-left: 8px;
        padding-right: 8px;
        border: none;
    }

    .calendar-contained .rmdp-calendar .rmdp-day-picker > div{
        flex: 1;
    }

    .calendar-contained .rmdp-top-class {
        flex: 1;
    }

    .calendar-contained .rmdp-week-day {
        font-size: 18px;
    }

    .calendar-contained .rmdp-day{
        height: 45px;
        width: 45px;

        & > span{
            font-size: 18px;

        }
    }
`
/*
  showHeader={false}
          Component={MultipleDateCalendar}
          interpolateSection={defaultMultipleDateInterpolation}
          displayOptions={{
            showOverlay: false
          }}
          selected={selected.concat(cloneSelected)}
          onSelect={onCloneSelect}
*/