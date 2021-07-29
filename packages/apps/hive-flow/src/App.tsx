import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//MuiPicker
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

//Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import { Box, Grommet, Spinner, Text } from 'grommet';

import { AuthProvider } from '@hexhive/auth-ui'

// import firebase from 'firebase';
import './App.css';

const Dashboard = React.lazy(() => import('./views/dashboard'))



var jwtDecode = require('jwt-decode');
var conf = require('./conf');

const config = conf.firebase;

// firebase.initializeApp(config);

const SafeDashboard = (props: any) => {
  let state : any = store.getState();

  let token = state.auth.token; 
  
  return (<Dashboard {...props} />)
}



// const SafeLogin = (props: any) => {
//   let state : any = store.getState();
//   let token = state.auth.token;
//   if(token){
//     let decoded = jwtDecode(token);
//   }
//     return (<LoginForm {...props} />)
  
// }
export default class App extends Component {

  constructor(props: any){
    super(props);
  }

  componentDidMount(){
    let state : any= store.getState();
    
    console.log("Version", state.auth.version)
  }

  render() {
    return (
      <AuthProvider
        authorizationServer="https://api.hexhive.io"
        clientId="hexhive.io"
        clientSecret="tester"
        redirectUri="https://hexhive.io/dashboard/flow">
        <React.Suspense fallback={(
          <Box 
            flex
            align="center"
            justify="center">
            <Spinner size="large" />
            <Text>Loading Pencil In ...</Text>
          </Box>
        )}>
        <Grommet plain>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>  
              <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                  
                  <Route path="/" render={SafeDashboard} />
                </div>
              </Router>
            </PersistGate>
          </Provider>
        </MuiPickersUtilsProvider>
        </Grommet>
        </React.Suspense> 
      </AuthProvider>
    );
  }
}

/*
<Route path="/" exact render={SafeLogin} />
                <Route path="/login" render={SafeLogin} />
                <Route path="/invite/:id" component={Invite} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="/forgot-password" component={ForgotPassword} />
*/