import React, {
  Component
} from 'react';

import DnDList from '../../../dnd-list';

export default class StaffTab extends Component {

  not(a, b){
    return a.filter(value => b.indexOf(value) === -1);
  }
  
  onAdd(items){
    let selected = this.props.selected;
    this.props.onChange(selected.concat(items));
  }

  onRemove(items){
    let selected = this.props.selected;
    this.props.onChange(this.not(selected, items));
  }

  render(){
    const { inputData, selected } = this.props;

    return (
      <div className="staff-tab">
        <DnDList
          assignedKey={inputData.assigned.key}
          assignedList={inputData.assigned.data}
          labelKey={inputData.labelKey}
          options={inputData.data}
          selected={selected}
          onAdd={this.onAdd.bind(this)}
          onRemove={this.onRemove.bind(this)} v/>
      </div>
    );
  }
}
