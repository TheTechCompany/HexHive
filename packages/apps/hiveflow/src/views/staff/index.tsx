import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import {StaffList} from './employee-list';
import EmployeeView from './employee-one';

export default (props: any) => (
         <Switch>
            <Route exact path={`${props.match.url}`} component={StaffList} />
            <Route path={`${props.match.url}/:employeeId`} component={EmployeeView}/>
         </Switch>
      );
