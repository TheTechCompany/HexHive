import React, {
  Component
} from 'react';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {
  Previous as ChevronLeft, Next as ChevronRight
} from 'grommet-icons'

import moment from 'moment';
import './index.css';

export default class MonthPicker extends Component {
  
  change(direction){
    const { value, onChange, stepSize } = this.props;
    var m = moment(value).add(direction, stepSize || 'months');
    onChange(m);
  }

  render(){
    const { value, displayFormat } = this.props;
    return (
      <div className="month-picker">
        <IconButton onClick={this.change.bind(this, -1)}>
          <ChevronLeft />
        </IconButton>
        <Typography className="month-picker__display" variant="span">{moment(value).format(displayFormat)}</Typography>
        <IconButton onClick={this.change.bind(this, 1)}>
          <ChevronRight />
        </IconButton>
      </div>
    );  
  }
}
