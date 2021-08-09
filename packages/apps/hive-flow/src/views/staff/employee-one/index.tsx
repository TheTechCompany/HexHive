import React, { Component } from 'react';
//import Schedule from '../../schedule';
import { Box } from 'grommet'


// import StaffContactCard from '../../../components/primatives/staff-contact-card';
// import UploadableImage from '../../../components/primatives/uploadable-image';
// import EmployeeSchedule from '../../../components/employee-schedule';
// import utils from '../../../utils';
import { useState } from 'react';
import { stringToColor } from '@hexhive/utils';


export default (props: any) => {
  const [ employees, setEmployees ] = useState<any[]>([])
  const [ contactDetails, setContactDetails ] = useState<{number: string, email: string}>({number: '', email: ''})
  const [ contactChanged, setContactChanged ] = useState<boolean>(false);
  
  // componentDidMount(){
  // }

  // componentWillMount(){
  //   utils.staff.getAll().then((res) => {
  //     this.setState({ employees : res});
  //   });
  // }


  // componentWillReceiveProps(newProps){
  //   if(this.props !== newProps){
  //     this.props = newProps;
  //     this.setState({
  //       ...newProps
  //     });
  //   }
  // }

  // updateDetails(key, value){
  //   let { contactDetails } = this.state;
  //   contactDetails[key] = value;
  //   this.setState({contactDetails: contactDetails, contactChanged: true})
  // }

  // pushDetails(){
  //   let id = this.props.match.params.employeeId;
  //   utils.staff.updateContact(id, this.state.contactDetails).then((r) => {
  //     console.log("Details update", r)
  //   })
  // }

  // render() {
  //   var id = this.props.match.params.employeeId;
  //   var employee = {} 
  //   for(var i = 0; i < this.state.employees.length; i++){
  //     if(this.state.employees[i].ID == id){
  //       employee = this.state.employees[i];
  //       break;
  //     }
  //   } 
    return (
      <div className="employee-view">
        <div className="employee-top">
         

          
        </div>
        <Box className="employee-schedule">
          <div className="employee-schedule-view">

          </div>
        </Box>
      </div>
    );
}

/*
 <StaffContactCard
            name={employee.Name}
            id={this.props.match.params.employeeId} />
*/

//            <EmployeeSchedule employee={this.props.match.params.employeeId} />
