import React, {
  Component
} from 'react';

import { Box, Button, Text } from 'grommet'

import {
  Previous as ChevronLeft, Next as ChevronRight
} from 'grommet-icons'

import moment from 'moment';
// import './index.css';

export class DateSelector extends Component<any, any> {
  
  change(direction: number){
    const { value, onChange, stepSize } = this.props;
    var m = moment(value).add(direction, stepSize || 'months');
    onChange(m);
  }

  render(){
    const { value, displayFormat } = this.props;
    return (
      <Box className="month-picker">
        <Button icon={<ChevronLeft />} onClick={this.change.bind(this, -1)} />
   
        <Text className="month-picker__display">{moment(value).format(displayFormat)}</Text>
        <Button icon={<ChevronRight />} onClick={this.change.bind(this, 1)} />

      </Box>
    );  
  }
}
