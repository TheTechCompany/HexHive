import React, {
  Component
} from 'react';

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import moment from 'moment';

export default class ServiceHistory extends Component {
  render(){
    const { history } = this.props;
    return ( 
      <List style={{flex: 1}}>
        {history.map((x) => {
          let type = x.serviceType.replace('-', ' ').trim();
          let subtype = type.split(' ')[0]
          if(subtype == "ruc" || subtype == "cof" || subtype == "wof")
            subtype = subtype.toUpperCase();
          else
            subtype = subtype.charAt(0).toUpperCase() + subtype.substring(1);
        
          let fmtted = `${subtype} ${type.split(' ').slice(1).join(' ')} `
          let ts = moment(new Date(x.ts)).format("DD/MM/YYYY")
          return [(
            <ListItem style={{display: 'flex', flexDirection: 'column'}}>
              {fmtted}
              {ts}
          
          </ListItem>
          ), (
            <Divider fullWidth style={{width: '100%'}}/>
          )]
        })}
      </List>
    );
  }
}

