import { Box, Grid } from 'grommet';
import React from 'react';
import { useFileExplorer } from '../../context';
import { ThumbnailCard } from './ThumbnailCard';

export interface ThumbnailViewProps {
    
}

export const ThumbnailView : React.FC<ThumbnailViewProps> = (props) => {
    const { files } = useFileExplorer()
    
    return (
        <Box>
            <Grid
                gap={'small'}
                rows={'small'}
                columns={'medium'}>
                {files?.map((file) => (<ThumbnailCard data={file} />))}
            </Grid>
        </Box>
    )
}