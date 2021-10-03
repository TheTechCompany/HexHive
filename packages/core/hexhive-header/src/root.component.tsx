import { Grommet } from 'grommet';
import React from 'react';
import { BaseStyle } from '@hexhive/styles';
import { Header } from './components/Header'
export default function Root(props) {
  return <Grommet theme={BaseStyle}>
          <Header />
          <div style={{width: '100%', height: '42px'}} />
        </Grommet>
}
