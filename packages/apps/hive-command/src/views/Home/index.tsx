import { Header, LoginForm } from '@thetechcompany/live-ui';
import { Box , Button, Anchor} from 'grommet';
import { LandingPage} from '../Landing'
import { Switch, Route } from 'react-router-dom'
import * as Icons from 'grommet-icons';
import React from 'react';
import { Pricing } from '../Pricing';
import { Login } from '../Login';

import HiveFlowLogo from '../../assets/hive-flow-logo.png';

export const Home = (props: any) => {
    return (
        <Box
            direction="column"
             flex>
        <Header
         title={(
                <img    
                    style={{height: 50, filter: 'invert(1)'}}
                    src={HiveFlowLogo}/>
            )}>
            <Box dir="row" flex align="end"> 
                <Anchor 
                    href="/login"
                    icon={ <Icons.Login />} 
                    label="Login" />
            </Box>
        </Header>  
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/login" component={Login} />
        </Switch>
    </Box>  )
}