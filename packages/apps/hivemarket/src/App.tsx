import { Box, Text } from 'grommet'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BaseHeader } from './components/header'
import { AppList } from './views/app-list'
import { AppSingle } from './views/app-single'

export const App = () => {
    return (
        <Box>
            <BaseHeader />
            <Switch>
                <Route path="/" exact component={AppList} />
                <Route path="/:id" component={AppSingle} />

            </Switch>
        </Box>
    )
}