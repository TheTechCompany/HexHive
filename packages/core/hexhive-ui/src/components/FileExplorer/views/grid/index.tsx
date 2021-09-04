import { Box, Text, Grid } from 'grommet';
import React from 'react';
import { useFileExplorer } from '../../context';
import { GridCard } from './GridCard';

export interface GridViewProps {

}

export const GridView : React.FC<GridViewProps> = (props) => {
    const { files } = useFileExplorer()

    return (
        <Box>
            <Grid
                gap={'xsmall'}
                rows={'xsmall'}
                columns={'xsmall'}>
                {files?.map((file) => (<GridCard data={file} />))}
            </Grid>
        </Box>
    )
}