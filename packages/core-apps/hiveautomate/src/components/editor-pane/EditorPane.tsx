import { Box } from 'grommet';
import  React from 'react';
import { EditorMenu } from './EditorMenu';
import { Nodes, SettingsOption } from 'grommet-icons';
import { useMemo } from 'react';

export interface EditorPaneProps {
    onViewChange?: (view: string) => void;
    view?: string;
}

export const EditorPane : React.FC<EditorPaneProps> = (props) => {

    const onClick = (view: string) => {
        props.onViewChange?.(view)
    }

    const menu = useMemo(() => {
        console.log(props.view)
        return [
            {icon: <Nodes />, active: props.view == 'nodes', onClick: () => { onClick('nodes') }},
            {icon: <SettingsOption />, active: props.view == 'settings', onClick: () => { onClick('settings') }},
        ]
    }, [props.view])

    return (
        <Box
            flex
            direction="row">
            <Box flex>
                {props.children}
            </Box>
            <EditorMenu 
                menu={menu}
                />
        </Box>
    )
}