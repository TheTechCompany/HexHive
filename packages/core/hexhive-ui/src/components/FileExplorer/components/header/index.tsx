import { Box, Button } from 'grommet'
import React from 'react'
import { useFileExplorer } from '../../context';
import { List, Apps, AppsRounded,
        UploadOption, DownloadOption, Update, FormFolder, Next, Previous} from 'grommet-icons';

export interface ActionHeaderProps {
    onNext?: () => void
    onPrev?: () => void
}

export const ActionHeader : React.FC<ActionHeaderProps> = (props) => {
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
                <Button
                    disabled={(history as any).index <= 0}
                    plain
                    style={{padding: 6}}
                    onClick={props.onPrev}
                    hoverIndicator 
                    icon={<Previous size="18px" />} />
                <Button 
                    disabled={(history as any).index >= history.length}
                    plain
                    style={{padding: 8}}
                    onClick={props.onNext}
                    hoverIndicator 
                    icon={<Next  size="18px" />} />
            
            </Box> 
            <Box direction="row">
                {actions?.map((action) => (
                    <Button 
                        size="small"
                        plain
                        style={{padding: 8}}
                        onClick={action.onClick} 
                        disabled={action.disabled instanceof Function ? action.disabled(context) : action.disabled} 
                        hoverIndicator 
                        icon={React.cloneElement(action?.icon, {size: '18px'})} 
                        title={action.key} />
                
                ))}
            </Box>
        </Box>
    )
}