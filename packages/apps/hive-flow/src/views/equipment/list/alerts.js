import React, {
  Component
} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './alerts.css';

export default class AlertBox extends Component {
  render(){
    const { alerts, emergencies } = this.props;
    return (
        <Paper style={{display: 'flex', marginBottom: 8, padding: 8 }}>
          {emergencies.length > 0 ? (
            <div className="alert-item emergency">
            <div className="alert-item-badge">{emergencies.length}</div>
          <Typography> items require your immediate attention</Typography>
        </div>) : null}
        {alerts.length > 0 ? (
          <div className="alert-item warning">
            <div classname="alert-item-badge">{alerts.length}</div>
            <Typography> items will require your attention soon</Typography>
          </div>
        ): null}
      </Paper>) 
  }

}
