import React from 'react';
import { Tab } from './Tab'
import * as Icons from 'grommet-icons'
import { Box, List} from 'grommet';
import { AddDropdown } from './AddDropdown';

const IconObj : any = Icons;

export interface AddTabProps {

}

export const AddTab : React.FC<AddTabProps> = (props) => {

    return (
        <Box style={{position: 'relative'}}>
        <Tab
            selected={true}
            label={<Icons.Add />} />
       
           
        </Box>
    )
}