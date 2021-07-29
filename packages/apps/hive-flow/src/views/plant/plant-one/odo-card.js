import React, {
  Component
} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class OdometerCard extends Component {
  render(){
    return (
      <Paper style={{padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant='h5'>Odometer</Typography>
        <Typography variant='s2'>Last reading: {this.props.reading}kms</Typography>
      </Paper>
    );    
  }
}
