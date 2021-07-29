import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import EmployeeList from './employee-list';
import EmployeeView from './employee-one';

export default class Employees extends Component{
   render(){
      return (
         <Switch>
            <Route exact path={`${this.props.match.url}`} component={EmployeeList} />
            <Route path={`${this.props.match.url}/:employeeId`} component={EmployeeView}/>
         </Switch>
      );
   }
} 
