import { Box, Button, Select, TextInput } from 'grommet';
import React from 'react';
import { Close } from 'grommet-icons'

export interface CapacityItemProps {
    type: "Projects" | "People" | "Estimates";

    item: any | {type: string, location: string, estimate: any} ;
    updateCapacityItem: (key: string, value: any) => void;
    removeCapacityItem: () => void;
}  

export const CapacityItem : React.FC<CapacityItemProps> = (props) => {
    return (
        <Box height={{min: '45px'}} align="center" direction="row">
        <Box flex>
             <Select
                onChange={({option}) => props.updateCapacityItem('type', option)}
                value={props.item.type}
                placeholder="Type"
                options={["Welder", "Fabricator", "Skilled Labourer", "Civil Subcontractor", "TA"]} />
        </Box>
        <Box flex>
            <Select 
                value={props.item.location}
                onChange={({option}) => props.updateCapacityItem('location', option)}
                placeholder="Location"
                options={["Site", "Workshop"]} />
        </Box>
        <Box flex>
            <TextInput  
                type="number"
                value={props.item.estimate}
                onChange={(e) => props.updateCapacityItem('estimate', parseFloat(e.target.value))}
                placeholder={props.type == "Projects" ? "Estimated hours" : "People"} />
        </Box>
        <Button onClick={() => props.removeCapacityItem()} icon={<Close size="small" color="red" />} />
    </Box>
    );
}