import React from 'react';
import { Box, Button } from 'grommet';
import { RouteComponentProps, useLocation, withRouter , matchPath} from 'react-router-dom'

import ProfileIcon from '../../../assets/Profile'

import HiveCommandLogo from '../../../assets/HiveCommand'
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
            align="center"
            justify="between"
            direction="row"
            background="brand" //rgb(30, 62, 72)
            height="58px">
            <Box
                pad="small"
                width="20%"
                direction="row"
                justify="start">
                <HiveCommandLogo 
                    width="80px"
                    style={{cursor: 'pointer', filter: 'invert(1)'}}
                    onClick={() => window.location.href = `/dashboard/`}
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
                        active={!x.action && matchPath(location.pathname + location.search, {path: `${x.path}`}) !== null}
                        color={'neutral-1'}
                        onClick={() => props.history.push(`${props.match.url}${x.path}`)}
                        plain
                        icon={!x.label && x.icon}
                        label={x.label}/>
                ))} 
            </Box>
            <Box
                pad="small"
                direction="row">
                <ProfileIcon
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
        background-color: accergba(35, 75, 83, 1);
    }

    .tab-menu > button {
        padding-left: 12px;
        padding-right: 12px;
    }
`)