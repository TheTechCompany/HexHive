import React from 'react';
import { Box, Button } from 'grommet';
import { RouteComponentProps, useLocation, withRouter , matchPath} from 'react-router-dom'

import {ReactComponent as Logo} from '../../../assets/logo.svg';
import { ReactComponent as LoginIcon } from '../../../assets/profile.svg'
import styled from 'styled-components';

export interface HeaderProps extends RouteComponentProps<any> {
    tabs?: {
        action?: boolean;
        icon?: any;
        label?: string,
        path: string    
    }[]
    className?: string;
}

export const BaseHeader : React.FC<HeaderProps> = (props) => {

    const location = useLocation()
    console.log(location.pathname, location, props.tabs)

    return (
        <Box
            className={props.className}
            elevation="medium"
            border={{color: 'rgb(35, 75, 83)', side: 'bottom', size: '8px'}}
            align="center"
            justify="between"
            direction="row"
            background="dark-1" //rgb(30, 62, 72)
            height="58px">
            <Box
                pad="small"
                width="20%"
                direction="row"
                justify="start">
                <Logo 
                    style={{cursor: 'pointer'}}
                    onClick={() => props.history.push(`/dashboard/command`)}
                    height="52px" />
            </Box>
            <Box 
                height="100%"
                className="tab-menu"
                flex
                justify="start"
                direction="row">
                {props.tabs?.map((x) => (
                    <Button 
                        hoverIndicator
                        className={!x.action && matchPath(location.pathname + location.search, {path: `${x.path}`}) !== null ? 'active' : ''}
                        onClick={() => props.history.push(`${x.path}`)}
                        color="gold"
                        plain
                        icon={!x.label && x.icon}
                        label={x.label}/>
                ))} 
            </Box>
            <Box
                pad="small"
                direction="row">
                <LoginIcon
                    style={{marginRight: '8px'}}
                    height="20px" />
                <Button 
                    color="gold"
                    plain
                    label={"Login"}></Button>
            </Box>
        </Box>
    )
}

export const Header = withRouter(styled(BaseHeader)`
    .tab-menu .active{
        background-color: rgba(35, 75, 83, 1);
    }

    .tab-menu > button {
        padding-left: 12px;
        padding-right: 12px;
    }
`)