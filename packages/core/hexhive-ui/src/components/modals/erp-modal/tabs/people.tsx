import React from 'react';
import { TransferList } from '../../../transfer-list';

export const PeopleTab  = (props: any) => {
    const { inputData, selected } = props;

      
  const not = (a: any[], b: any[]) => {
    return a.filter(value => b.indexOf(value) === -1);
  }

  const onAdd = (items: any[]) => {
    let selected = props.selected;
    props.onChange(selected.concat(items));
  }

  const onRemove = (items: any[]) => {
    let selected = props.selected;
    props.onChange(not(selected, items));
  }

    return (
        <TransferList
            assignedKey={inputData.assigned.key}
            assignedList={inputData.assigned.data}
            labelKey={inputData.labelKey}
            options={inputData.data}
            selected={selected}
            onAdd={onAdd}
            onRemove={onRemove}  />
    );
}