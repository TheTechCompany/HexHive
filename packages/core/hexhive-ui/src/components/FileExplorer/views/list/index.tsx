import { Box, Text, List, Button } from 'grommet';
import { More } from 'grommet-icons';
import React from 'react';
import { useFileExplorer } from '../../context';
import { IFile } from '../../types/file';
import { humanFileSize } from '../../utils';

export interface ListViewProps {
    onClick: (event: {item: IFile} & any) => void;
}

export const ListView : React.FC<ListViewProps> = (props) => {
    const { files } = useFileExplorer()

    return (
        <Box>
            <List
                onClickItem={props.onClick}
                pad={"none"}
                data={files}>
                {(datum: IFile) => (
                    <Box
                        background="neutral-1" 
                        hoverIndicator={true}
                        align="center"
                        direction="row" 
                        justify="between">
                        <Text>{datum.name}</Text>

                        <Box direction="row" align="center">
                            <Text>{humanFileSize(datum.size || 0)}</Text>
                            <Button hoverIndicator style={{padding: 3}}  icon={<More />} />
                        </Box>
                    </Box>
                )}
            </List>
        </Box>
    )
}