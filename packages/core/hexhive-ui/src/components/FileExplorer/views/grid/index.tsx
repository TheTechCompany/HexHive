import { Box, Text, Grid } from 'grommet';
import React from 'react';
import { useFileExplorer } from '../../context';
import { GridCard } from './GridCard';

export interface GridViewProps {

}

export const GridView : React.FC<GridViewProps> = (props) => {
    const { files, selectFile, selected } = useFileExplorer()

    return (
        <Box>
            <Grid
                gap={'xsmall'}
                rows={'small'}
                columns={'small'}>
                {files?.map((file) => (<GridCard onClick={() => selectFile?.(file.id, !((selected || []).indexOf(file.id || '') > -1))} data={file} />))}
            </Grid>
        </Box>
    )
}