import React, { Component } from 'react';
//import Schedule from '../../schedule';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  Textfield  from '@material-ui/core/TextField';
import StaffContactCard from '../../../components/primatives/staff-contact-card';
import UploadableImage from '../../../components/primatives/uploadable-image';
import EmployeeSchedule from '../../../components/employee-schedule';
import utils from '../../../utils';
import './index.css';


export default class EmployeeView extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props,
      employees : [],
      contactDetails: {
        number: '',
        email: ''
      },
      contactChanged: false
    };
  }

  componentDidMount(){
  }

  componentWillMount(){
    utils.staff.getAll().then((res) => {
      this.setState({ employees : res});
    });
  }


  componentWillReceiveProps(newProps){
    if(this.props !== newProps){
      this.props = newProps;
      this.setState({
        ...newProps
      });
    }
  }

  updateDetails(key, value){
    let { contactDetails } = this.state;
    contactDetails[key] = value;
    this.setState({contactDetails: contactDetails, contactChanged: true})
  }

  pushDetails(){
    let id = this.props.match.params.employeeId;
    utils.staff.updateContact(id, this.state.contactDetails).then((r) => {
      console.log("Details update", r)
    })
  }

  render() {
    var id = this.props.match.params.employeeId;
    var employee = {} 
    for(var i = 0; i < this.state.employees.length; i++){
      if(this.state.employees[i].ID == id){
        employee = this.state.employees[i];
        break;
      }
    } 
    return (
      <div className="employee-view">
        <div className="employee-top">
          <StaffContactCard
            name={employee.Name}
            id={this.props.match.params.employeeId} />

          <Card style={{flex: 1, marginLeft: 10}}>
            <CardContent>

            </CardContent>
          </Card>
        </div>
        <Paper className="employee-schedule">
          <div className="employee-schedule-view">

            <EmployeeSchedule employee={this.props.match.params.employeeId} />
          </div>
        </Paper>
      </div>
    );
  }
}
