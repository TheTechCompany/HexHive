import React, {
  Component
} from 'react';

import { 
  Time as AccessTime
} from 'grommet-icons'
import { DatePicker } from '@material-ui/pickers';
import Typography from '@material-ui/core/Typography';

export default class MaterialDateRange extends Component {

  constructor(props){
    super(props);
    this.state ={ 
      start: null,
      end: null,
      ...props,
      datePickers:{
        start: false,
        end: false
      },
    }
  }

  _datePickerOpen(key){
    let pickers = this.state.datePickers; 
    pickers[key] = true;
    this.setState({datePickers: pickers})
  }

  _datePickerClose(key){
    let pickers = this.state.datePickers;
    pickers[key] = false;
    this.setState({datePickers: pickers})
  }

  onDateChanged(key, value){
    let state = this.state;
    state[key] = value;
    state.datePickers[key] = false;
    this.setState({...state})

    this.props.onChange(key, value)
  } 

  render(){
    return (
      <div style={{
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'row'
      }}>
      <AccessTime
        style={{
          marginRight: '8px',
        }}/>
      <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>

        <DatePicker 
          onOpen={this._datePickerOpen.bind(this, 'start')}
          onClose={this._datePickerClose.bind(this, 'start')}
          open={this.state.datePickers.start}
          disableToolbar
          variant="inline"
          id="start-date-selector"
          format="DD/MM/YY"
          value={this.state.start || new Date()}
          onChange={(val) => {this.onDateChanged('start', val)}} />
        <Typography>-</Typography>
        <DatePicker 
          onOpen={this._datePickerOpen.bind(this, 'end')}
          onClose={this._datePickerClose.bind(this, 'end')}
          open={this.state.datePickers.end}
          disableToolbar
          variant="inline"
          id="end-date-selector"
          format="DD/MM/YY"
          value={this.state.end || new Date()}
          onChange={(val) => {this.onDateChanged('end', val)}} />
      </div>
    </div>

    );
  }
} 
