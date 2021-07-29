import React, {
  Component
} from 'react';
import Profile from '../../../views/profile';
import Settings from '../../../views/settings';

import Sidebar from '../sidebar';
import { generatePath, withRouter, Switch, Route } from 'react-router-dom';
import './index.css';

class RoutedView extends Component {
  render(){
    const {  views } = this.props;
    const active = this.props.location.pathname.replace(this.props.match.url, '')
    
    return (
      <div className="routed-view">

        <div className="routed-view-body">
          <Switch>
            {(views.length > 0) ? 
              ( <Route
                  path={`${this.props.match.url}`} 
                  component={views[0].component} 
                  exact />
              ) : null}

            {views.map((x, ix) => (
              <Route key={`route-${ix}`} path={`${this.props.match.url}${x.label.toLowerCase()}`} component={x.component} />
            ))}
            <Route path={`${this.props.match.url}profile`} component={Profile} />
            <Route path={`${this.props.match.url}settings`} component={Settings} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(RoutedView)
