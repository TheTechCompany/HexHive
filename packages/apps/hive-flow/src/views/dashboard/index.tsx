import React, { Component, useState} from 'react';

import { Link, Route , generatePath, matchPath, Routes, useNavigate} from 'react-router-dom';

import logo from '../../logo.svg';

//views, logo
import { Sidebar} from '@hexhive/ui';

// import RoutedView from '../../components/primatives/routed-view';

import {
  Calendar as Schedule,
  People,
  Timeline as TimelineIcon,
  Estimates,
  Projects,
  Equipment,
  Hiveflow
} from '../../assets'

import { Box, Grommet, Spinner, Text } from 'grommet';
import { ProjectList } from '../projects/list';
import { ProjectSingle } from '../projects/single';
import { PeopleList } from '../people/list';
import {Schedule as ScheduleView } from '../schedule';
import {PeopleSingle} from '../people/single';
import { EquipmentList } from '../equipment/list';
import Quotes from '../quotes';
import { BaseStyle } from '@hexhive/styles';

const Timeline = React.lazy(() => import('../timeline/Timeline'))

// const Schedule = React.lazy(() => import('../schedule'))
// const Quotes = React.lazy(() => import('../quotes'))
// const Jobs = React.lazy(() => import('../jobs'))
// const Employees = React.lazy(() => import('../staff'))
// // const MonthView = React.lazy(() => import('../../components/workhub/planning-calendar'))
// const Plant = React.lazy(() => import('../plant'))


export const Dashboard = (props: any) => { 

  //  const [ view, setView ] = React.useState('schedule')
  // const [ alerts, setAlerts ] = useState<string[]>([])

  const alerts = []
  const active = window.location.pathname.replace(process.env.PUBLIC_URL, '')

  console.log(active)

  const navigate = useNavigate()

  const views = () => {
    let login_type =  'email' //props.user.login_type;
    let views = []
    if(login_type == 'email'){
      views = [{
                  icon: <Schedule filter="invert(1)" />,
                  label: "Schedule",
                  path: "schedule",
                  component: <> </>,
                },
                {
                  icon: <TimelineIcon filter="invert(1)" />,
                  label: "Timeline",
                  path: "timeline",
                  component: <></>
                },
                {
                  icon: <Estimates filter="invert(1)" />,
                  label: "Estimates",
                  path: "estimates",
                  component: <></>,
                },
                {
                  icon: <Projects filter="invert(1)" />,
                  label: "Projects",
                  path: "projects",
                  component: <></>
                },
                {
                  icon: <People filter="invert(1)" />,
                  label: "People",
                  path: "people",
                  component: <></>
                }, 
                { 
                  icon: <Equipment filter="invert(1)" />,
                  label: "Equipment",
                  path: "equipment",
                  alerts: alerts.length,
                  component: <></>
                }
      ]
    }else{
      views = [
          {
            icon: "schedule",
            label: "Schedule",
            path: "/schedule",
            component: <></>,
          },
          {
            icon: 'check_circle_outline',
            label: "Projects",
            path: "/projects",
            component: <></>
          },
          {
            icon: 'people',
            label: "People",
            path: "/people",
            component: <></>
          }, 
          { 
            icon: 'directions_car',
            label: "Equipment",
            alerts: alerts.length,
            path: "/equipment",
            component: <></>
          }

      ]
    }
    return views;
  }


  // componentDidMount(){

  //   utils.plant.getAll().then((plants) => {
  //     console.log(plants)
  //     if(!plants.error){
  //       this.setState({
  //         alerts: (plants || []).filter((a) => utils.plant.getStatus(a.details) != "VALID"),
  //       })
  //     }
  //   })
  //     //Using testauth instead of actual route, change when
  //     //there is dashboard information for organizations
  //  }
      

      return (
        <Grommet  
          
        style={{display: 'flex', width: '100%', height: '100%'}}
        plain 
        theme={BaseStyle}>  

         <Box 
          direction="row"
          flex 
          className="dashboard">
              <Sidebar
                active={views().map((x) => matchPath(active, x.path) != null ).indexOf(true)}
                menu={views()} 
                onSelect={(x: any) => {
                  let path = generatePath(`/:path`, {path: x.path.toLowerCase()})

                  navigate(path)
                }}/>

            <Box 
              background="neutral-4"
              flex 
              pad="xsmall">
            <React.Suspense fallback={(
              <Box 
                align="center"
                justify="center"
                flex>
                <Spinner size="medium" />
                <Text>Loading ...</Text>
              </Box>
            )}>
              <Routes>
                <Route path={`/schedule`} element={ScheduleView} />
                <Route path={`/projects`} element={ProjectList} >
                  <Route path={`/projects/:id`} element={ProjectSingle} />

                </Route>
                <Route path={`/estimates`} element={Quotes} />
                <Route path={`/people`} element={PeopleList}>
                  <Route path={`/people/:id`} element={PeopleSingle} />
                </Route>
                <Route path={`/equipment`} element={EquipmentList} />
                <Route path={`/timeline`} element={Timeline} />
              </Routes>
            </React.Suspense>
            </Box>
                {/*<div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingRight: '10px'}}>
               <UserIcon style={{fontSize: '30px', cursor: 'pointer'}} onClick={() => {this.props.history.push('/admin')}}/>
                </div>*/}

 
         </Box>
        </Grommet>
      );
  
}

/*
<RoutedView 
                views={views()} />
*/

// export default connect((state) => {
//   let token = state.auth.token;
//   if(token){
//     return {user: jwtDecode(token)}
//   }else{
//     return {user: {}}
//   }
// }, (dispatch) => ({

// }))(App);
