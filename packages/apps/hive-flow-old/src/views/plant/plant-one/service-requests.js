import React, {
  Component
} from 'react';

import {withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import ServiceRequest from './service-request';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import utils from '../../../utils';

class ServiceRequests extends Component {

  constructor(props){
    super(props);
    this.state = {
      requests: []
    }
  }

  componentDidMount(){
    this.loadRequests();
  }

  loadRequests(){
    utils.plant.getRequests(this.props.match.params.plate).then((requests) => {
      this.setState({requests: requests})
    })
  }

  render(){
    return (
      <Paper style={{flex: 1, marginTop: 8, display: 'flex', padding: 8, flexDirection: 'column'}}>
        <Typography variant="h5" style={{alignSelf: 'flex-start'}}>Service Requests</Typography>
        <List>
          {this.state.requests.map((x, ix) => (
            <ListItem>
              <ServiceRequest 
                onRefresh={this.loadRequests.bind(this)}
                request={x} 
                expanded={this.state.expanded == ix} 
                onChange={(evt, isExpanded) => this.setState({expanded: isExpanded ? ix : -1})} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

export default withRouter(ServiceRequests);
