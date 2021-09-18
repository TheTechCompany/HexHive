import { Box, List, Spinner, Text} from 'grommet';
import React from 'react';

export interface SidePaneProps {
    selected?: {name: string}[]
}

export const SidePane : React.FC<SidePaneProps> = (props) => {
    return (
        <Box
            gap="small"
            margin={{left: 'xsmall'}} elevation="medium" background="neutral-3" round="xsmall" direction="column" width="20vw">
            <Box
                margin={{top: 'small'}}
                direction='column' align='center' justify='center'>
                <Box width="xsmall" height="xsmall" background="neutral-4">

                </Box>
                <Text>{props.selected?.map((x) => x.name).join(', ')}</Text>
            </Box>
            <Box 
                pad={'xsmall'}
                border={{side: 'top', size: 'small', color: 'accent-1'}}>
                <Text>Running jobs</Text>
                <List data={["Converting to web format"]}>
                    {(datum) => (
                        <Box gap="xsmall" align="center" direction="row">
                            <Spinner color="accent-1"/>
                            <Text size="small">{datum}</Text>
                        </Box>
                    )}
                </List>
            </Box>
        </Box> 
    )
}