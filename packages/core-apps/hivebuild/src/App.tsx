import { Box } from 'grommet';
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { AppBuilder } from './views/app-builder';
import { AppList } from './views/app-list';
import { AppSingle } from './views/app-single';

export const App  = () => {
    return (
        <Box flex>
            <Switch>
                <Route path="/" exact component={AppList} />
                <Route path="/:id" component={AppSingle} />
            </Switch>
        </Box>
    )
}