import { Box, Text, Select, Button, Layer, Drop, List, CheckBox } from 'grommet';
import React, { useRef, useState } from 'react';
import { Add, Filter } from 'grommet-icons';
import styled from 'styled-components';

export interface TimelineProps{
    onAdd?: () => void; 
    view?: TimelineView;
    onViewChange?: (view: TimelineView) => void;
    className?: string;

    filter?: string[]
    filters?: string[]

    onFilterChanged?: (filter: string[]) => void;
}

export type TimelineView = "Projects" | "People" | "Estimates" ;
export const BaseTimelineHeader: React.FC<TimelineProps> = (props) => {
    console.log(props.view)
    const [ filterOpen, openFilter ] = useState<boolean>(false);
    const targetRef = useRef();

    const toggleFilter = (id: string) => {
        let f = props.filter.slice();

        if(f.indexOf(id) > -1){
            f.splice(f.indexOf(id), 1)
        }else{
            f.push(id)
        }
        props.onFilterChanged(f)
    }

    return (
        <Box
            className={props.className}
            height="42px"
            round="xsmall"
            background="accent-1"
            pad={'xsmall'}
            direction="row"
            align="center"
            justify="between">
            <Box background="#ffffff42" round="xsmall">

                <Select
                    size="small"
                    placeholder="View"
                    plain
                    value={props.view || "Projects"}
                    onChange={({ option }) => {
                        props.onViewChange?.(option)
                    }}
                    options={["Projects", "People", "Estimates"]} />
            </Box>
            <Box background="#ffffff42" round="xsmall">
                {(props.view == "Projects" || props.view == "People") ? (
                     <Button plain style={{padding: 6}} size="small" onClick={props.onAdd} icon={<Add size="20px" />} />
                ) : (
                    <>
                    <Button 
                        ref={targetRef}
                        onClick={() => {
                            openFilter(!filterOpen)
                        }}
                        plain 
                        style={{padding: 6}} 
                        size="small" 
                        icon={<Filter size="20px" />} />
                    {filterOpen && 
                        <Drop
                            onEsc={() => openFilter(false)}
                            onClickOutside={() => openFilter(false)}
                            target={targetRef.current}
                            align={{right: 'right', top: 'top'}}
                            >
                            <Box>
                                <Text size="small">Filter</Text>
                                <List 
                                    onClickItem={({item}) => toggleFilter(item)}
                                    pad="xsmall"
                                    data={props.filters}>
                                    {(datum) => (
                                        <Box gap="xsmall" direction="row">
                                            <CheckBox 
                                                size={15} 
                                                onChange={(e) => {
                                                    toggleFilter(datum)
                                                    
                                                }}
                                                checked={props.filter.indexOf(datum) > -1} />
                                            <Text size="small">{datum}</Text>
                                        </Box>
                                    )}
                                </List>
                            </Box>
                        </Drop>}
                    
                    </>
                    
                )}
            </Box>
        </Box>
    );
}

export const TimelineHeader = styled(BaseTimelineHeader)`
    input {
        padding: 6px;
    }
`