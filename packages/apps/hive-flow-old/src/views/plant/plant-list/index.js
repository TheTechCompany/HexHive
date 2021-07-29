import React, {
  Component
} from 'react';

import AlertBox from './alerts'; 
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import SortedList from '../../../components/primatives/sorted-list';
import utils from '../../../utils';
import moment from 'moment';

import './index.css';

  
export default class Plant extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      alerts: [],
      emergencyAlerts: [],
      listKeys: [
        {key: 'ID', label: 'ID', type: 'int', width: 20},
        {key: 'Name', label: 'Name', type: 'string', width: 40},
        {key: 'Registration', label: 'Registration', type: 'string', width: 20},
        {key: 'status', label: 'Status', type: 'string', width: 10},
      ],
      listData: []
    }
  }

  statusColor(details){
    if(details){ 
      let status = utils.plant.getStatus(details);

      switch(status){
        case 'VALID':
          return null;
        case 'EXPIRING':
          return 'rgba(255, 121, 0, 1)';
        case 'EXPIRED':
          return 'rgba(255, 0, 0, 1)';
        default:
          return null;
      }
    }
  }

  componentDidMount(){
    utils.plant.getAll().then((plants) => {
      this.setState({
        emergencyAlerts: plants.filter((a) => utils.plant.getStatus(a.details) == "EXPIRED"),
        alerts: plants.filter((a) => utils.plant.getStatus(a.details) == "EXPIRING"),
        listData: plants.map((x) => ({
          ...x,
          VehicleType: x.details ? x.details.vehicleType : '',
          colour: this.statusColor(x.details),
          status: utils.plant.getStatus(x.details)
      }))})
    })
  }

  _selectPlant(p){
    if(p.Registration){
      this.props.history.push(`/dashboard/plant/${p.Registration}`)
    }
  }

  render(){
    return (
      <div className="plants-page">
        <SortedList 
          orderBy={"ID"}
          alerts={this.state.alerts}
          emergencyAlerts={this.state.emergencyAlerts}
          keys={this.state.listKeys}
          data={this.state.listData}
          onClick={this._selectPlant.bind(this)}
          /> 
      </div>
    );
  }
}
