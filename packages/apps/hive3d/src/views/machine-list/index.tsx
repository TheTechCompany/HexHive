import { Box, List } from 'grommet';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface MachineListProps extends RouteComponentProps {

}

export const MachineList : React.FC<MachineListProps> = (props) => {
    return (
        <Box>
            Machines
            <List 
                onClickItem={({item}: any) => props.history.push(`/${item.id}`)}
                primaryKey={"name"}
                data={[{id: 'home', name: "Home Printer"}]} />
        </Box>
    )
}