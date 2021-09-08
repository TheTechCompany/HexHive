import { Box, Button } from 'grommet'
import React from 'react'
import { useFileExplorer } from '../../context';
import { List, Apps, AppsRounded,
        UploadOption, DownloadOption, Update, FormFolder} from 'grommet-icons';

export interface ActionHeaderProps {

}

export const ActionHeader : React.FC<ActionHeaderProps> = (props) => {
    const modes = [{key: 'list', icon: <List />}, {key: 'thumbnail', icon: <AppsRounded />}, {key: 'grid', icon: <Apps />}];
    // const actions =
    const context  = useFileExplorer()
    const { 
        view, 
        setView,
        actions

    } = context;

    return (
        <Box 
            background="accent-2"
            justify="between"
            direction="row">
           <Box direction="row">
                {modes.map((mode) => 
                    <Button icon={mode.icon} onClick={() => setView?.(mode.key)} active={view == mode.key}/>)}
            </Box> 
            <Box direction="row">
                {actions?.map((action) => <Button onClick={action.onClick} disabled={action.disabled instanceof Function ? action.disabled(context) : action.disabled} hoverIndicator icon={action?.icon} title={action.key} />)}
            </Box>
        </Box>
    )
}