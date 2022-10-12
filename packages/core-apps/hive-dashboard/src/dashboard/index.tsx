import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '../views/home';
import { Box } from '@mui/material';

import { HexHiveTheme } from '@hexhive/styles'
import { ThemeProvider } from '@mui/material'

const NoToken = () => (<div>No token</div>)
export const Dashboard = (props: any) => {

  return (
    <Router basename='/dashboard'>
      <ThemeProvider theme={HexHiveTheme}>

          <Box  
            sx={{flex: 1}}
            className="App">
              <Box sx={{flex: 1}}>
              <Routes>
                <Route path="*" element={<Home />} />
              </Routes>

            
            </Box>
          </Box>
      </ThemeProvider>
    </Router>
  );
}

