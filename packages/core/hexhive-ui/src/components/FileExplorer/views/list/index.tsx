import { Box, Text, List, Button, CheckBox } from 'grommet';
import { Folder, Document, More } from 'grommet-icons';
import React from 'react';
import { useFileExplorer } from '../../context';
import { IFile } from '../../types/file';
import { humanFileSize } from '../../utils';

export interface ListViewProps {
}
 // onClickItem={({item}: any) => selectFile?.(item)}
export const ListView : React.FC<ListViewProps> = (props) => {
    const { files, selectFile, clickFile, selected } = useFileExplorer()

    return (
        <Box focusIndicator={false}>
            <List
                pad={"none"}
                data={files}>
                {(datum: IFile) => (
                    <Box
              
                        key={datum.id}
                    focusIndicator={false}
                        pad={'xsmall'}
                        style={{cursor: 'pointer'}}
                        align="center"
                        direction="row" >
                            <CheckBox checked={(selected || '').indexOf(datum.id || '') > -1} onChange={(e) => {
                                e.stopPropagation()
                                selectFile?.(datum.id || '', e.target.checked)
                            }}/>
                        <Box 
                            flex
                            hoverIndicator={true}
                            justify="between"  
                            onClick={(e) => {
                                clickFile?.(datum)
                            }} direction="row">
                        <Box direction="row" align="center">
           
                            <Box pad="xsmall">
                                {datum.isFolder ? <Folder /> : <Document />}
                            </Box>
                            <Text>{datum.name}</Text>

                        </Box>

                        <Box direction="row" align="center">
                            <Text>{humanFileSize(datum.size || 0)}</Text>
                            <Button hoverIndicator style={{padding: 3}}  icon={<More />} />
                        </Box>
                        </Box>
                    </Box>
                )}
            </List>
        </Box>
    )
}