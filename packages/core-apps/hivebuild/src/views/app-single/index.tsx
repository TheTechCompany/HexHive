// import { useQuery } from '@hexhive/client';
import { Box, Button, List, Text } from 'grommet';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { BrandEditor } from '../../components/brand-editor';
import { ScopeEditor } from '../../components/scope-editor';
import { ServiceEditor } from '../../components/service-editor';
import { AppBuilder } from '../app-builder';

export interface AppSingleProps extends RouteComponentProps<{id: string}>{
    
}
export const AppSingle : React.FC<AppSingleProps> = (props) => {
    // const query = useQuery({suspense: false, staleWhileRevalidate: true})

    // const app = query.hiveAppliances({where: {id: props.match.params.id}})?.[0]
    const menu = [
        {
            path: '/brand',
            label: "Branding"
        },
        {
            path: '/permissions',
            label: "Permissions"
        },
        {
            label: "Services",
            path: "/services"
        }
    ]
    
    return (
        <Box flex>

            <Box flex direction="row">
                <Box width="small" background="neutral-1">
                    <Box 
                        background="accent-1"
                        pad="xsmall"
                        direction="row">
                        {/* <Text>{app.name}</Text> */}
                    </Box>
                    <Box flex>
                    <List 
                        primaryKey={"label"}
                        onClickItem={({item}) => props.history.push(`${props.match.url}${item.path}`)}
                        data={menu}/>
                    </Box>
         
                    <Button label="Editor" onClick={() => props.history.push(`${props.match.url}/builder`)} />
                </Box>
                <Box flex elevation="small">
                    <Switch>
                        {/* <Route path={`${props.match.url}/brand`} render={(props) => <BrandEditor app={app} {...props} />} /> */}
                        {/* <Route path={`${props.match.url}/services`} render={(props) => <ServiceEditor {...props} app={app} />}/> */}
                        {/* <Route path={`${props.match.url}/permissions`} render={(props) => <ScopeEditor {...props} app={app} />} /> */}
                        <Route path={`${props.match.url}/builder`} component={AppBuilder} />
                    </Switch>
                </Box>
            </Box>
            
        </Box>
    )
}