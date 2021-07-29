import React, {
  Component
} from 'react';

import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import IconButton from '@material-ui/core/IconButton';
import { Checkmark as Check, Close as Clear, Down as ExpandMoreIcon } from 'grommet-icons'
import utils from '../../../utils';
import './service-request.css';

class ServiceRequest extends Component {

  cancel(){
    utils.plant.finishRequest(this.props.match.params.plate, this.props.request.id, false).then((r) => {
      if(r.success) this.props.onRefresh();
    })
  }

  complete(){
    utils.plant.finishRequest(this.props.match.params.plate, this.props.request.id, true).then((r) => {
      if(r.success) this.props.onRefresh();
    })
    
  }

  render(){
    const { onChange, expanded, request} = this.props;
    return (
      <ExpansionPanel style={{flex: 1}} expanded={expanded} onChange={onChange} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          >
          <Typography>{request.subject}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: 'flex', flexDirection: 'column', paddingBottom: 8, paddingRight: 8}}>
          <Typography>{request.description}</Typography>
          <div className="service-actions">
            <IconButton onClick={this.cancel.bind(this)}>
              <Clear style={{color: 'red'}} />
            </IconButton>
            <IconButton onClick={this.complete.bind(this)}>
              <Check style={{color: 'green'}} />
            </IconButton>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withRouter(ServiceRequest);
