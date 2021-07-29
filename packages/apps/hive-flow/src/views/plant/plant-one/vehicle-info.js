import React, {
  Component
} from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import utils from '../../../utils';
import './vehicle-info.css';

export default class VehicleInfo extends Component {

  fmtDate(d){
    let color = utils.dates.getExpiryColor(d); 
     
    return (
      <Typography variant="s2" style={{color: color}}>
        {moment(new Date(d)).format("DD/MM/YYYY")}
      </Typography>
    );
  }
  infoBlock(){
    const { details } = this.props;
    let certs = [];
    console.log(details);

    if(details.odometerReading){
      certs.push((
        <Typography variant="s2">Odometer: {details.odometerReading} km</Typography>
      ))
    }

    if(details.cof == "Yes"){
      certs.push((
        <Typography variant="s2">
          COF Expires: {this.fmtDate(details.cofExpiry)}
        </Typography>
      ))
    }

    if(details.wof == "Yes"){

      certs.push((
        <Typography variant="s2">
          WOF Expires: {this.fmtDate(details.wofExpiry)} 
        </Typography>
      ))
    }

    if(details.ruc == "Yes"){
      let expired = false;
      if(details.odometerReading && details.odometerReading > details.rucExpiry) expired = true;
      certs.push((
        <Typography variant="s2">
          RUC Expires: <Typography variant="s2" style={{color: expired ? 'red' : 'black'}}>{details.rucExpiry} km</Typography>
        </Typography>
      ))
    }

    certs.push((
      <Typography variant="s2">
        Registration Expires: {this.fmtDate(details.regoExpiry)} 
      </Typography>
    ));
    return certs;
  }


  render(){
    return (
      <Paper>
        <Typography variant="h5">Vehicle Fitness</Typography>
        <Typography variant="s2">{this.props.details.plate}</Typography>
        <Divider style={{marginTop: 8}} />
        <div className="info-holder" style={{display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 8, paddingRight: 8, paddingBottom: 8, marginTop: 8}}>

          {this.infoBlock()}
        </div>
      </Paper>
    );
  }
}
