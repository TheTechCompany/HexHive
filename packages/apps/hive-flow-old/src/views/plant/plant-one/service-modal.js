import React, {
  Component
} from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';

import Button from '@material-ui/core/Button';
import MaterialSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import utils from '../../../utils';
export default class ServiceModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      serviceType: 'odometer-reading',
      odometer: 0,
      datePickers: {
        wof: false,
        cof: false,
        rego: false
      },
      serviceRequest:{
        subject: '',
        description: ''
      }
    }
  }

  _datePickerOpen(key){
    let datePickers = this.state.datePickers;
    datePickers[key] = true;
    this.setState({datePickers: datePickers})
  }

  _datePickerClose(key){
    let datePickers = this.state.datePickers;
    datePickers[key] = false;
    this.setState({datePickers: datePickers})
  }

  onDateChanged(key, val){
    let state = this.state;
    state[key] = val;
    this._datePickerClose(key);
    this.setState({...state})
  }

  serviceRequest(key, val){
    let state = this.state;
    state.serviceRequest[key] = val;
    this.setState({...state})
  }

  _renderForm(){
    switch(this.state.serviceType){
      case 'odometer-reading':
        return [(
          <TextField 
            label="Current Kilometers"
            fullWidth
            value={this.state.odometer.toLocaleString()} onChange={(e) => {
              if(e.target.value.length == 0){
              return this.setState({odometer: ''})
              }
                let value = parseInt(e.target.value.replace(/,/g, ''));
              if(value.toString() != "NaN" && value.toString() != "-NaN"){
                console.log(value);
                this.setState({odometer: value})
              }
              

          }}/>
        )];
        break;
      case 'wof-renewal':
        return [( 
          <KeyboardDatePicker
            fullWidth
            
            label="WOF Expiry"
            disableToolbar
            variant="inline"
            id="wof-expiry-selector"
            format="DD/MM/YY"
            value={this.state.wof || new Date()}
            onChange={(val) => {this.onDateChanged('wof', val)}} />
        )];
        break;
      case 'ruc-renewal':
        var v = (this.state.ruc != null) ? this.state.ruc : this.props.details.rucExpiry;
        return [(
          <TextField 
            label="RUC Expiry (kms)"
            fullWidth
            value={(v) ? v.toLocaleString() : 0} onChange={(e) => {
              if(e.target.value.length == 0){
              return this.setState({ruc: 0})
              }
                let value = parseInt(e.target.value.replace(/,/g, ''));
              if(value.toString() != "NaN" && value.toString() != "-NaN"){
                console.log(value);
                this.setState({ruc: value})
              }
              

          }}/>
        )];
        break;
      case 'cof-renewal':
        return [( 
          <KeyboardDatePicker
            fullWidth
            
            label="COF Expiry"
            disableToolbar
            variant="inline"
            id="cof-expiry-selector"
            format="DD/MM/YY"
            value={this.state.cof || this.props.details.cofExpiry}
            onChange={(val) => {this.onDateChanged('cof', val)}} />
        )];
        break;
      case 'rego-renewal': 
        return [( 
          <KeyboardDatePicker
            fullWidth
            label="Registration Expiry"
            disableToolbar
            variant="inline"
            id="rego-expiry-selector"
            format="DD/MM/YY"
            value={this.state.rego || this.props.details.regoExpiry}
            onChange={(val) => {this.onDateChanged('rego', val)}} />
        )];
        break;
      case 'service-record':
        break;
      case 'service-request':
        return [(
          <TextField 
            fullWidth
            label="Subject"
            value={this.state.serviceRequest.subject}
            onChange={(e) => this.serviceRequest('subject', e.target.value)}/>
        ), (
          <TextField 
            fullWidth
            multiline
            rows="4"
            label="Description"
            value={this.state.serviceRequest.description}
            onChange={(e) => this.serviceRequest('description', e.target.value)}/>
        )];
        break;
      default:
        return null;
    }
  }

  updateDetails(){
    let updateType = this.state.serviceType;
    let expiry;
    let subject;
    let description;

    switch(updateType){
      case 'wof-renewal':
        expiry = this.state.wof
        break;
      case 'cof-renewal':
        expiry = this.state.cof;
        break;
      case 'ruc-renewal':
        expiry = this.state.ruc
        break;
      case 'rego-renewal':
        expiry = this.state.rego
        break;
      case 'service-request':
        subject = this.state.serviceRequest.subject;
        description = this.state.serviceRequest.description;
          
    }
    let details = {
      expiry: expiry,
      subject: subject,
      description: description,
      reading: this.state.odometer
    }

    utils.plant.updateDetails(this.props.plate, updateType, details).then((r) => {
      if(r.success){
        this.props.onClose();
      }
    });
  }

  render(){
    const { details, show, plate } = this.props;
    return (
      <Dialog open={show}>
        <DialogTitle>Update {plate} details</DialogTitle>
        <DialogContent> 
          <MaterialSelect style={{marginBottom: 8}} className="material-select" fullWidth value={this.state.serviceType} inputProps={{name: 'serviceType', id: 'service-type'}} onChange={(e) => this.setState({serviceType: e.target.value})}>
            <MenuItem value={"odometer-reading"}>
              Odometer Reading
            </MenuItem>

            <MenuItem value={"service-request"}>
              Service Request
            </MenuItem>
            <MenuItem value={"service-record"}>
              Service Record
            </MenuItem>
            {details.ruc == "Yes" ? (
            <MenuItem value={"ruc-renewal"}>
              RUC License
            </MenuItem>): null}
            {details.wof == "Yes" ? (
            <MenuItem value={"wof-renewal"}>
              WOF Renewal
            </MenuItem>) : null}
            {details.cof == "Yes" ? (
            <MenuItem value={"cof-renewal"}>
              COF Renewal
            </MenuItem>) : null}
            <MenuItem value={"rego-renewal"}>
              Rego Renewal
            </MenuItem>
          </MaterialSelect>
          {this._renderForm()}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.props.onClose()}>Cancel</Button>
          <Button color="primary" variant="contained" onClick={this.updateDetails.bind(this)}>Update</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
