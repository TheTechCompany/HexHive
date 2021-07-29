import React, {
  Component
} from 'react';

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import ServiceModal from './service-modal';
import VehicleInfo from './vehicle-info';
import RegoCard from './rego-card';
import ServiceHistory from './service-history';
import ServiceRequests from './service-requests';

import OdoCard from './odo-card';
import WOFCard from './wof-card';
import RUCCard from './ruc-card';
import COFCard from './cof-card';
import moment from 'moment';
import utils from '../../../utils';
import './index.css';

export default class PlantOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      details: {},
      history: [],
      showModal: false
    }
  }

  componentDidMount(){
    utils.plant.getDetails(this.props.match.params.plate).then((details) => {
      this.setState({details: details})
    })

    utils.plant.getHistory(this.props.match.params.plate).then((history) => {
      this.setState({history: history})
    })
  }

  fmtDate(d){
    return moment(new Date(d)).format("DD/MM/YYYY")
  }

  _renderCertificates(){
    let certs = [];

    if(this.state.details.lastOdometerReading){
      certs.push((
        <OdoCard lastReading={"31"} />
      ))
    }
    
    if(this.state.details.cof == "Yes"){
      certs.push((
        <COFCard expires={this.fmtDate(this.state.details.cofExpiry)}/>
      ))
    }

    if(this.state.details.wof == "Yes"){

      certs.push((
        <WOFCard expires={this.fmtDate(this.state.details.wofExpiry)} />
      ))
    }

    if(this.state.details.ruc == "Yes"){

      certs.push((
        <RUCCard expires={this.state.details.rucExpiry} />
      ))
    }

    return certs;
  }

  modalClosed(){
    this.setState({showModal: false})

    utils.plant.getDetails(this.props.match.params.plate).then((details) => {
      this.setState({details: details})
    })
  }

  render(){
    return (
      <div style={{flex: 1, display: 'flex'}}>
        <div style={{flex: 1, paddingRight: 4, display: 'flex', flexDirection: 'column'}}>
          <Paper style={{display: 'flex', padding: 8}}>
            <div className="vehicle-details">
              <Typography variant='h5'>{this.state.details.make} {this.state.details.model}</Typography>
              <Typography variant='s2'>{this.state.details.year}</Typography>
              <Divider  style={{width: '100%', marginBottom: 8}}/>
              <Typography>{this.state.details.vehicleType}</Typography>
              <Typography>{this.state.details.cc}</Typography>
              {this.state.details.axles ? (<Typography>Axles: {this.state.details.axles}</Typography>) : null}
              <Typography>{this.state.details.fuel}</Typography>
            </div>
          </Paper>

          <Paper style={{marginTop: 8, padding: 8, flex: 1, display: 'flex', flexDirection: 'column'}}>
            <Typography variant='h5' style={{alignSelf: 'flex-start'}}>Service History</Typography>
            <ServiceHistory history={this.state.history} />
          </Paper>
        </div>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', paddingLeft: 4}}>
          <VehicleInfo details={this.state.details} />
          <ServiceRequests /> 
        </div>
        <ServiceModal 
          onClose={this.modalClosed.bind(this)} 
          show={this.state.showModal} 
          details={this.state.details}
          plate={this.props.match.params.plate} />
        <Fab color="primary" style={{position: 'absolute', right: 16, bottom: 16}} onClick={() => this.setState({showModal: true})}>
          <Icon>add</Icon>
        </Fab>
      </div>
    );
  }
}
