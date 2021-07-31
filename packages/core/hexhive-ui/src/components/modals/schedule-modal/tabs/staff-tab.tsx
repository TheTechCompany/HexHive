import React, {
  Component
} from 'react';
import { Box } from 'grommet'
import {TransferList} from '../../../transfer-list';

export default class StaffTab extends Component<any, any> {

  not(a: any[], b: any[]){
    return a.filter(value => b.indexOf(value) === -1);
  }
  
  onAdd(items: any[]){
    let selected = this.props.selected.slice();
    this.props.onChange(selected.concat(items));
  }

  onRemove(items: any[]){
    let selected = this.props.selected.slice();
    this.props.onChange(this.not(selected, items));
  }

  render(){
    const { inputData, selected } = this.props;

    return (
      <Box height="100%">
        <TransferList
          assignedKey={inputData.assigned.key}
          assignedList={inputData.assigned.data}
          labelKey={inputData.labelKey}
          options={inputData.data}
          selected={selected}
          onAdd={this.onAdd.bind(this)}
          onRemove={this.onRemove.bind(this)} />
      </Box>
    );
  }
}
