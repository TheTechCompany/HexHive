import React, {
  Component, useState
} from 'react';


// import utils from '../../../utils';
import moment from 'moment';

import { Box, DataTable } from 'grommet';
import { PlantHeader } from './header';
import { useQuery } from '@hexhive/client';


export const PlantList: React.FC<any> = (props) => {

  const [search, setSearch] = useState<string>('');

  const listKeys = [
    { property: 'id', header: 'ID', size: 'small', sortable: true },
    { property: 'name', header: 'Name', sortable: true },
    { property: 'registration', header: 'Registration', sortable: true },
    { property: 'status', header: 'Status', sortable: true },
  ]

  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: true
  });


  const [ direction, setDirection ] = useState<"asc" | "desc" | undefined>()
  const [ property, setProperty ] = useState<string>()


  const sortEquipment = (left: any, right: any) => {
    if(property && direction){
      return (direction == 'asc' ?
          (left[property] == right[property] ? 0 : (left[property] > right[property] ? 1 : -1))
          : (left[property] == right[property] ? 0 : (left[property] < right[property] ? 1 : -1)))
    }else{
      return 0;
    }
  }

  const filterEquipment = (item: any) => {

    if (search.length > 0) {
        let name = item?.name?.toLowerCase() || ''
        let registration = item?.registration?.toLowerCase() || ''
        let id = `${item?.id}`.toLowerCase() || ''

        let _search = search.toLowerCase() || ''


        return registration.indexOf(_search) > -1 || name?.indexOf(_search) > -1 || id?.indexOf(_search) > -1 || `${id} ${name}`.indexOf(_search) > -1
    }

    return true;

   // return items.map((x) => ({...x, price: formatter.format(x.price)}))
  }

  const listData = query?.EquipmentMany() || [];

  // constructor(props: any){
  //   super(props);
  //   this.state = {
  //     alerts: [],
  //     emergencyAlerts: [],
  //     listKeys: ,
  //     listData: []
  //   }
  // }

  const statusColor = (details: any) => {
    if (details) {
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

  // componentDidMount(){
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
  // }

  // _selectPlant(p: any){
  // if(p.Registration){
  //   this.props.history.push(`/dashboard/plant/${p.Registration}`)
  // }
  // }

  const selectPlant = (item: any) => {

  }
  return (
    <Box
      flex
      className="plants-page">
      <PlantHeader filter={search} onFilterChange={(search) => setSearch(search)} />
      <Box
        round="xsmall"
        overflow="scroll"
        flex
        background="neutral-1"
      >
        <DataTable
          pin
          onSort={({property, direction}) => {
            setProperty(property)
            setDirection(direction)
          }}
          onClickRow={selectPlant}
          columns={listKeys}
          data={listData.filter(filterEquipment).sort(sortEquipment)} />
      </Box>

      {/* <SortedList 
          orderBy={"ID"}
          alerts={this.state.alerts}
          emergencyAlerts={this.state.emergencyAlerts}
          keys={this.state.listKeys}
          data={this.state.listData}
          onClick={this._selectPlant.bind(this)}
          />  */}
    </Box>
  );

}
