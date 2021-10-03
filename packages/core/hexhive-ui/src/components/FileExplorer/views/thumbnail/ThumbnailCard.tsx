import { Box, Button, Text } from 'grommet';
import { More, MoreVertical } from 'grommet-icons';
import React from 'react';
import { useFileExplorer } from '../../context';
import { IFile } from '../../types/file';
import { humanFileSize } from '../../utils';

export interface ThumbnailCardProps {
    data?: IFile;
}

export const ThumbnailCard : React.FC<ThumbnailCardProps> = (props) => {
    const { selectFile, selected } = useFileExplorer()

    return (
        <Box
         style={{cursor: 'pointer'}}
         onClick={() => selectFile?.(props.data?.id, !((selected || []).indexOf(props.data?.id || '') > -1))}
            round="xsmall"
            background="neutral-1"
            elevation="small">
            <Box direction="row" justify="end">
                <Button size="small" hoverIndicator icon={<More size="medium" />} />
            </Box>
            <Box 
                flex
                pad={{horizontal: 'small'}}
                direction="row">
                <Box flex background="black">
                    Preview
                </Box>
                <Box
                    align={"center"}
                    pad="xsmall"
                    flex>
                    <Text>{props.data?.name}</Text>
                    <Text>{humanFileSize(props.data?.size || 0)}</Text>
                </Box>
            </Box>
        </Box>
    )
}