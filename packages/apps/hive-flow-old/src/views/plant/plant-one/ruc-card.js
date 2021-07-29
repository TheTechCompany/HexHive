import React, {
  Component
} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class RucCard extends Component {
  render(){
    return (
      <Paper style={{marginTop: 8, padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant='h5'>Road User Charges</Typography>
        <Typography variant='s2'>Expires: {(this.props.expires) ? this.props.expires.toLocaleString(): ''}kms</Typography>
      </Paper>
    );    
  }
}
