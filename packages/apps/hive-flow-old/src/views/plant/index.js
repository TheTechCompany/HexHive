import React, {
  Component
} from 'react';

import { Switch, Route } from 'react-router-dom';
import PlantList from './plant-list';
import PlantOne from './plant-one';

export default class PlantContainer extends Component {
  render(){
    return (
      <Switch>
        <Route path={`${this.props.match.url}/`} component={PlantList} exact />
        <Route path={`${this.props.match.url}/:plate`} component={PlantOne} />
      </Switch>
    );
  }
}
