import React, { useEffect, useState } from 'react';
import { Select, TextInput } from 'grommet';
import { BaseModal } from '../base';
import { StackItems } from '@hexhive/types/dist/interfaces';

export interface StackItemModalProps {
  open: boolean;
  selected?: any;
  onSubmit?: Function;
  onClose?: Function;
}

export const StackItemModal : React.FC<StackItemModalProps> = (props) => {

  const [ item, setItem ] = useState<StackItems & any>()

  const onClose = () => {
    if(props.onClose){
      props.onClose();
    }
   
    setItem({
      name: '',
      type: undefined
    })
  }

  const onSubmit = () => {
    if(props.onSubmit){
     props.onSubmit(item)
    
      setItem({
        name: '',
        type: undefined
      })
    }
  }

  useEffect(() => {
    if(props.selected){
      setItem(props.selected)
    }
  }, [props.selected])

  return (
    <BaseModal 
        open={props.open}
        onClose={onClose}
        onSubmit={onSubmit}
        title={`${props.selected ? "Edit" : "Add"} Plugin Item`}>
          <TextInput placeholder="Item name" value={item?.name} onChange={(e) => setItem({...item, name: e.target.value})} />
          <Select
            labelKey="value"
            valueKey={{key: "id", reduce: true}}
            value={item?.type}
            onChange={({value, option}) => setItem({...item, type: option.id})}
            options={[{id: 'ui', value: "UI"}, {id: 'block', value: "Code"}]}/>
     </BaseModal>
  );
}
