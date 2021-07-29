import React, {
  Component
} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

export default class RegoCard extends Component {

  get background(){
    let expires = this.props.expires;
    let expiresIn = moment(expires, 'DD/MM/YYYY').diff(moment(), 'weeks')
    console.log(expiresIn);
    if(expiresIn < 2 && expiresIn > 0){
      return 'rgba(255, 121, 0, 1)';
    }else if(expiresIn <= 0){
      return 'rgba(255, 0, 0, 1)';
    }else{
      return 'rgba(255, 255, 255, 1)'
    }
  }

  get color(){ 
    let expires = this.props.expires;
    let expiresIn = moment(expires, 'DD/MM/YYYY').diff(moment(), 'weeks')
    if(expiresIn < 2 && expiresIn > 0){
      return 'white'; 
    }else if(expiresIn <= 0){
      return 'white';
    }else{
      return 'black';
    }
  }
  render(){
    return (
      <Paper style={{background: this.background, color: this.color, marginTop: 8, padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant='h5'>Registration</Typography>
        <Typography variant='s2'>{this.props.plate} expires on {moment(new Date(this.props.expires)).format("DD/MM/YYYY")}</Typography>
      </Paper>
    );    
  }
}
