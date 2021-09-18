import { Grommet } from 'grommet';
import React  from 'react'
import { BaseStyle } from '@hexhive/styles';
import {App} from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Root(props) {
  return   (
    <Grommet theme={BaseStyle}>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={App} />
      </Router>
    </Grommet>
  )
}
