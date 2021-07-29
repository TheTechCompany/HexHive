import React, {
  Component
} from 'react';


// import utils from '../../../utils';
import moment from 'moment';

import './index.css';
import { DataTable } from 'grommet';

  
export class PlantList extends Component<any, any> {
  
  constructor(props: any){
    super(props);
    this.state = {
      alerts: [],
      emergencyAlerts: [],
      listKeys: [
        {property: 'ID', header: 'ID' , sortable: true},
        {property: 'Name', header: 'Name'  , sortable: true},
        {property: 'Registration', header: 'Registration' , sortable: true},
        {property: 'status', header: 'Status' , sortable: true},
      ],
      listData: []
    }
  }

  statusColor(details: any){
    if(details){ 
      // let status = utils.plant.getStatus(details);

      // switch(status){
      //   case 'VALID':
      //     return null;
      //   case 'EXPIRING':
      //     return 'rgba(255, 121, 0, 1)';
      //   case 'EXPIRED':
      //     return 'rgba(255, 0, 0, 1)';
      //   default:
      //     return null;
      // }
    }
  }

  componentDidMount(){
    // utils.plant.getAll().then((plants) => {
    //   this.setState({
    //     emergencyAlerts: plants.filter((a) => utils.plant.getStatus(a.details) == "EXPIRED"),
    //     alerts: plants.filter((a) => utils.plant.getStatus(a.details) == "EXPIRING"),
    //     listData: plants.map((x) => ({
    //       ...x,
    //       VehicleType: x.details ? x.details.vehicleType : '',
    //       colour: this.statusColor(x.details),
    //       status: utils.plant.getStatus(x.details)
    //   }))})
    // })
  }

  _selectPlant(p: any){
    // if(p.Registration){
    //   this.props.history.push(`/dashboard/plant/${p.Registration}`)
    // }
  }

  render(){
    return (
      <div className="plants-page">
        <DataTable
          onClickRow={this._selectPlant.bind(this)}
          columns={this.state.listKeys}
          data={this.state.listData} />
        {/* <SortedList 
          orderBy={"ID"}
          alerts={this.state.alerts}
          emergencyAlerts={this.state.emergencyAlerts}
          keys={this.state.listKeys}
          data={this.state.listData}
          onClick={this._selectPlant.bind(this)}
          />  */}
      </div>
    );
  }
}
