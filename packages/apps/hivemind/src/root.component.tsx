import React from 'react';
import logo from './logo.svg';
import { Box, Grommet } from 'grommet';
import { BaseHeader } from './components/header';
import { BaseStyle } from '@hexhive/styles';
import { HiveMindEditor } from './components/editor';
import { Sidebar } from './components/sidebar';

import { AutomergeClient, AutomergeClientContext, AutomergeClientProvider, useAutomergeClient, useAutomergeDoc } from '@hexhive/collaboration-client'
import { Editor } from './views/editor';

function App() {

  const [client,isReady] = useAutomergeClient(process.env.NODE_ENV == 'production' ? process.env.REACT_WS_APP_API : 'ws://localhost:7000')


  return (
    <AutomergeClientProvider client={client} isReady={isReady}>
    <Grommet style={{display: "flex"}} full theme={BaseStyle}>
      <Editor />
    </Grommet>
    </AutomergeClientProvider>
  );
}

export default App;
