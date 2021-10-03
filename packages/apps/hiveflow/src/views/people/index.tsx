import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import {PeopleList} from './list';
import {PeopleSingle} from './single';

export default (props: any) => (
         <Switch>
            <Route exact path={`${props.match.url}`} component={PeopleList} />
            <Route path={`${props.match.url}/:employeeId`} component={PeopleSingle}/>
         </Switch>
      );
