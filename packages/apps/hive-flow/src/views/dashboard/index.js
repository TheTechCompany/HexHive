import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Switch, Link, Route , generatePath} from 'react-router-dom';

import logo from '../../logo.svg';

import utils from '../../utils';
import moment from 'moment';
//views, logo
import Sidebar from '../../components/primatives/sidebar';

import RoutedView from '../../components/primatives/routed-view';

import { Box, Spinner, Text } from 'grommet';
import './index.css';

const Timeline = React.lazy(() => import('../timeline/Timeline'))

const Schedule = React.lazy(() => import('../schedule'))
const Quotes = React.lazy(() => import('../quotes'))
const Jobs = React.lazy(() => import('../jobs'))
const Employees = React.lazy(() => import('../staff'))
const MonthView = React.lazy(() => import('../../components/workhub/planning-calendar'))
const Plant = React.lazy(() => import('../plant'))


var conf = require('../../conf');
var jwtDecode = require('jwt-decode');

class App extends Component {

   constructor(props){
      super(props);
     
     this.state = {
       view : "schedule",
       alerts: []
     };
   }


  get views(){
    let login_type = this.props.user.login_type;
    let views = []
    if(login_type == 'email'){
      views = [{
                  icon: "schedule",
                  label: "Schedule",
                  component: Schedule,
                },
                {
                  icon: 'fast_forward',
                  label: "Planner", 
                  component: MonthView
                },
                {
                  icon: 'fast_forward',
                  label: "Timeline",
                  component: Timeline
                },
                {
                  icon: 'help_outline',
                  label: "Quotes",
                  component: Quotes,
                },
                {
                  icon: 'check_circle_outline',
                  label: "Jobs",
                  component: Jobs
                },
                {
                  icon: 'people',
                  label: "Staff",
                  component: Employees
                }, 
                { 
                  icon: 'directions_car',
                  label: "Plant",
                  alerts: this.state.alerts.length,
                  component: Plant
                }
      ]
    }else{
      views = [
          {
            icon: "schedule",
            label: "Schedule",
            component: Schedule,
          },
          {
            icon: 'check_circle_outline',
            label: "Jobs",
            component: Jobs
          },
          {
            icon: 'people',
            label: "Staff",
            component: Employees
          }, 
          { 
            icon: 'directions_car',
            label: "Plant",
            alerts: this.state.alerts.length,
            component: Plant
          }

      ]
    }
    return views;
  }

   componentWillReceiveProps(newProps){
      if(this.props !== newProps){
         this.props = newProps;
      }
   }

  componentDidMount(){

    utils.plant.getAll().then((plants) => {
      console.log(plants)
      if(!plants.error){
        this.setState({
          alerts: (plants || []).filter((a) => utils.plant.getStatus(a.details) != "VALID"),
        })
      }
    })
      //Using testauth instead of actual route, change when
      //there is dashboard information for organizations
   }
      
  get active (){
    return window.location.pathname.replace(this.props.match.url, '')
  }

   render() {
      return (
         <div className="dashboard">
              <Sidebar
                logo={"/assets/logo.png"}
                active={this.active}
                menu={this.views} 
                onSelect={(x) => {
                  let path = generatePath(`${this.props.match.url}:path`, {path: x.toLowerCase()})
                  this.props.history.push(path)
                }}/>

            <React.Suspense fallback={(
              <Box 
                align="center"
                justify="center"
                flex>
                <Spinner size="medium" />
                <Text>Loading ...</Text>
              </Box>
            )}>

              <RoutedView 
                views={this.views} />
            </React.Suspense>

                {/*<div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingRight: '10px'}}>
               <UserIcon style={{fontSize: '30px', cursor: 'pointer'}} onClick={() => {this.props.history.push('/admin')}}/>
                </div>*/}

 
         </div>
      );
  }
}

export default connect((state) => {
  let token = state.auth.token;
  if(token){
    return {user: jwtDecode(token)}
  }else{
    return {user: {}}
  }
}, (dispatch) => ({

}))(App);
