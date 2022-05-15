import { useState } from 'react'

import { Box, Grommet, List } from 'grommet'

import { BrowserRouter as Router, useNavigate, Route, Routes, Outlet } from 'react-router-dom'
import { BaseStyle } from '@hexhive/styles'
import logo from './logo.svg'
import './App.css'
import { UserList } from './views/users/list'
import { OrganisationList } from './views/organisations/list'
import { ApplicationList } from './views/applications/list'
import { UserSingle } from './views/users/single'
import { OrganisationSingle } from './views/organisations/single'
import { ApplicationSingle } from './views/applications/single'

function App() {

  const menu = [
    {
      label: "Users",
      path: 'users'
    },
    {
      label: "Organisations",
      path: 'organisations'
    },
    {
      label: "Applications",
      path: 'applications'
    }
  ]

  const navigate = useNavigate();

  return (
    <div className='App'>
        <Grommet theme={BaseStyle} full style={{display: 'flex'}}>
          <Box 
            direction='row'
            flex>
            <Box background={'accent-2'} elevation='small'>
              <List 
                pad={'none'}
                data={menu}
                >
                {(datum: any) => (
                  <Box
                    pad="small"
                    hoverIndicator
                    onClick={() => navigate(datum.path.toLowerCase())}
                    direction='row'>
                    {datum.label}
                  </Box>
                )}
              </List>
            </Box>
            <Box background={'#dfdfdf'} flex pad="xsmall">
              <Box background={'white'} elevation="small" flex overflow={'hidden'} round="xsmall">
                <Routes>
                <Route path="users" element={<Outlet />}>
                  <Route path="" element={<UserList />} />
                  <Route path=":id" element={<UserSingle />} />
                </Route>
                <Route path="organisations" element={<Outlet />}>
                  <Route path="" element={<OrganisationList />} />
                  <Route path=":id" element={<OrganisationSingle />} />
                </Route>
                <Route path="applications" element={<Outlet />}>
                  <Route path="" element={<ApplicationList />} />
                  <Route path=":id" element={<ApplicationSingle />} />
                </Route>
                </Routes>
              </Box>
            </Box>
          </Box>
        </Grommet>
    </div>

    // <Router>

    // <Grommet full>
    //   asdf
    //     <div className="App">
    //       <div>
    //         <ul>
    //           <li>Users</li>
    //           <li>Organisations</li>
    //           <li>Applications</li>
    //         </ul>
    //       </div>
    //       <div style={{flex: 1}}>
    //         <Route path="/" element={<UserList />} />
    //       </div>
    //     </div>
    // </Grommet>
    // </Router>

  )
}

export default App
