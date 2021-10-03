import React, {
  Component
} from 'react';

import { Switch, Route } from 'react-router-dom';
import {PlantList} from './plant-list';

export default class PlantContainer extends Component<any, any> {
  render(){
    return (
      <Switch>
        <Route path={`${this.props.match.url}/`} component={PlantList} exact />
      </Switch>
    );
  }
}
