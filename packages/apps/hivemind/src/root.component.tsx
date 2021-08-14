import React from 'react';
import logo from './logo.svg';
import { Box, Grommet } from 'grommet';
import { BaseHeader } from './components/header';
import { BaseStyle } from '@hexhive/styles';
import { HiveMindEditor } from './components/editor';
import { Sidebar } from './components/sidebar';

function App() {



  return (
    <Grommet style={{display: "flex"}} full theme={BaseStyle}>
    <Box 
      direction="column"
      flex>
        <BaseHeader />

      <Box direction="row" flex>
        <Sidebar />
        <HiveMindEditor  />
      </Box>
    </Box>
    </Grommet>
  );
}

export default App;
