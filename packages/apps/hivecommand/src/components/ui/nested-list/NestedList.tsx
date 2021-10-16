import React from 'react';
import { Box, Button, List } from 'grommet';
import * as Icons from 'grommet-icons';

export interface NestedListProps {
    onAdd?: () => void;
    onClick?: ({item}: any) => void;
    renderItem?: (datum: any) => any;
    data?: any[];
}

export const NestedList : React.FC<NestedListProps> = (props) => {
    return (
        <Box 
            overflow="hidden"
            round="xsmall"
            elevation="small"
            flex
            background={'neutral-1'}>
            <Box   
                pad="xsmall"
                background="accent-2" 
                justify="between"
                border={{side: 'bottom', color: '#dfdfdf', size: '1px'}}
                direction="row">
                <Box direction="row">
                    <Button hoverIndicator icon={<Icons.Previous size="15px" />} />
                    <Button hoverIndicator icon={<Icons.Next size="15px" />} />
                </Box>

                <Button 
                    onClick={props.onAdd}
                    hoverIndicator
                    icon={<Icons.Add size="15px" />} />
            </Box>
            <Box flex>
                <List
                    onClickItem={props.onClick}
                    data={props.data}
                    >
                    {(datum: any) => props.renderItem?.(datum)}
                </List>
            </Box>
        </Box>
    )
}