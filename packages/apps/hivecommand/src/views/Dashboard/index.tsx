import React, { useState } from 'react';

import { Route, Switch, RouteComponentProps, matchPath } from 'react-router-dom';

import { Box, Spinner } from 'grommet';
import { Header } from '../../components/ui/header'
import * as Icons from 'grommet-icons';
import { EditorPage } from '../Editor';

const PluginEditor = React.lazy(() => import('../../pages/plugin-editor').then((r) => ({default: r.PluginEditorPage})))
const DeviceControl = React.lazy(() => import('../../pages/device-control').then((r) => ({default: r.DeviceControl})))

const Devices = React.lazy(() => import('../../pages/device-list').then((r) => ({ default: r.Devices })))
const DeviceSingle = React.lazy(() => import('../../pages/device-single').then((r) => ({ default: r.DeviceSingle })))

const ProgramList = React.lazy(() => import('../../pages/program-list').then((r) => ({ default: r.ProgramList })));
const ProgramViewer = React.lazy(() => import('../../pages/program-viewer').then((r) => ({ default: r.ProgramViewer })))
const PluginList = React.lazy(() => import('../../pages/plugin-list').then((r) => ({ default: r.PluginList })));
const PluginSingle = React.lazy(() => import('../../pages/plugin-single').then((r) => ({ default: r.PluginSingle })));


const pages = [
    {
        icon: <Icons.Map />,
        label: "Deployments",
        path: '/devices',
        component: Devices
    },
    {
        icon: <Icons.Tools />,
        label: "Programs",
        path: '/programs',
        component: ProgramList
    }, {
        icon: <Icons.Plug />,
        label: "Plugins",
        path: "/plugins",
        component: PluginList
    },
    {
        icon: <Icons.GraphQl />,
        label: "Reports",
        path: "/reports"
    }
]

const drawerWidth = 240;


const Dashboard : React.FC<RouteComponentProps & any> = (props) => {
    const [drawerOpen, openDrawer] = useState<boolean>(false)
    /*
                   <img    
                            style={{height: 50, filter: 'invert(1)'}}
                            src={HiveFlowLogo}/>
    */

    const getHeaderTabs = () => {
        const match = matchPath<{id: string}>(props.location.pathname, {
            path: '/dashboard/programs/:id'
        })
        if(match){
            return [
                {
                    icon: <Icons.Previous />,
                    action: true,
                    path: '/programs'
                },
                {   
                    icon: <div></div>,
                    label: "Program",
                    path: `/programs/${match.params.id}`
                },
                {
                    icon: <div></div>,
                    label: "Controls",
                    path: `/programs/${match.params.id}?view=controls`
                },
                {
                    icon: <div></div>,
                    label: "Connections",
                    path: `/programs/${match.params.id}?view=connections`
                }
            ]
        }
        console.log("Header tabs", props)
        return pages;
    }

    console.log(props.match)

    return (
        <Box flex className="dashboard">
       
            <Box
                flex
                direction="row"
                key={'left'}
                style={{ display: 'flex', flex: 1 }}>

                <Box
                    pad='xsmall'
                    background={'neutral-4'}
                    flex >
                    <React.Suspense fallback={(
                        <Box flex align="center" justify="center">
                            <Spinner color="gold" size="medium" />
                        </Box>)}>

                        <Switch>
                            {pages.map((x, ix) => (
                                <Route exact path={[x.path].map((x) => `${x}`)} component={x.component} />
                            ))}
                            <Route path={`/devices/:id/controls`} component={DeviceControl} />
                            <Route path={`/devices/:id`} component={DeviceSingle} />
                            <Route path={`/programs/:id`} component={EditorPage} />
                            <Route path={`/plugins/:id/editor`} exact component={PluginEditor} />
                            <Route path={`/plugins/:id`} exact component={PluginSingle} />
                        </Switch>
                    </React.Suspense>

                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard;