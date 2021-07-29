import React, {
  Component
} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

export default class CofCard extends Component {
  get background(){
    let expires = this.props.expires;
    let expiresIn = moment(expires, 'DD/MM/YYYY').diff(moment(), 'weeks')
    console.log(expiresIn)
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
      <Paper style={{color: this.color, background: this.background, padding: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <Typography variant='h5'>Certificate Of Fitness</Typography>
        <Typography variant='s2'>Expires: {this.props.expires}</Typography>
      </Paper>
    );    
  }
}
