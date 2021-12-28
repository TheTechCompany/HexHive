import React, { Component } from 'react';
import { Route, Routes} from 'react-router-dom'
import {PeopleList} from './list';
import {PeopleSingle} from './single';

export default (props: any) => (
   <Routes>
            <Route path={`${props.match.url}`} element={PeopleList} >
               
               <Route path={`/:employeeId`} element={PeopleSingle}/>
            </Route>
    </Routes>
      );
