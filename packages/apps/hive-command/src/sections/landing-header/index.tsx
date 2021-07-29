import React from 'react';
import { withRouter } from 'react-router-dom'
import { ResponsiveContext, TextInput, Button, Box } from 'grommet'
import { Search } from 'grommet-icons'

export const LandingHeader = withRouter(({...rest}: any) => {
    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Box
                    background="brand"
                    direction="row"
                    justify="between"
                    align="center"
                    gap="medium"
                    border={{side: 'bottom', color: 'light-4'}}
                    pad={{vertical: 'small', horizontal: 'xlarge'}}
                    {...rest}>
                    Component Editor
                <Box 
                    pad={{horizontal: 'xlarge'}}
                    flex>
                    <TextInput 
                        value={rest.search}
                        onChange={(e) => rest.onSearch(e.target.value)}
                        icon={<Search />} 
                        placeholder="Search packages..." /> 
                </Box>
                    <Button 
                        onClick={() => rest.history.push(`/login`)}
                        label="Login" />
                </Box>
            )}
        </ResponsiveContext.Consumer>
    )
})