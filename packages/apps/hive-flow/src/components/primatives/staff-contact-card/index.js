import React, {
  Component
} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import UploadableImage from '../uploadable-image';
import Typography from '@material-ui/core/Typography';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import utils from '../../../utils';
import './index.css';

var conf = require('../../../conf');
class StaffContactCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      photo: null,
      contactDetails: {
        number: '',
        email: ''
      }
    }
  }

  componentDidMount(){
    utils.staff.getContact(this.props.id).then((details) => {
      if(details && details.photo){
        this.setState({photo: details.photo})
      }
      if(details && details.contact){
        this.setState({contactDetails: details.contact})
      }
    })
  }

  pushDetails(){
    utils.staff.updateContact(this.props.id, this.props.name, this.state.contactDetails).then((r) => {
      this.setState({contactChanged: false})
    })
  }

   updateDetails(key, value){
      let { contactDetails } = this.state;
      contactDetails[key] = value;
      this.setState({contactDetails: contactDetails, contactChanged: true})
   }


  render(){
    const { id, name } = this.props;
    return (
        <Card className="staff-contact-card">
          <CardContent>
            <div className="staff-info">
              <UploadableImage 
                placeholder={require('../../../assets/profile-placeholder.png')}
                src={(this.state.photo) ? `${conf.baseURL}/api/staff/${id}/photo?access_token=${this.props.token}` : null}
                onChange={(photo) => this.setState({photo: photo})}
                route={`${conf.baseURL}/api/staff/${id}/photo`} />
              <Typography variant='span'>
                {name}
              </Typography>
            </div>
            <div className="staff-contact">
              <Typography style={{display: 'flex'}} variant='span'>Contact Info</Typography>
                <Textfield 
                  label="Phone Number"
                  margin='normal'
                  fullWidth
                  value={this.state.contactDetails.number}
                  onChange={(e) => this.updateDetails('number', e.target.value)} />

                <Textfield 
                  fullWidth
                  label="Email Address"
                  margin='normal'
                  value={this.state.contactDetails.email}
                  onChange={(e) => this.updateDetails('email', e.target.value)}/>
                <div className="employee-contact__actions">
                  <Button onClick={this.pushDetails.bind(this)} disabled={!this.state.contactChanged} color="primary" variant="contained">
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
        </Card>
    );
  }
}
export default connect((state) => ({
  token: state.auth.token
}))(StaffContactCard)
