import React, { useEffect, useState } from 'react';

import { CheckBox, TextInput } from 'grommet';
import { BaseModal } from '../base';

export interface StackModalProps {
  open: boolean;
  selected?: any;
  onSubmit?: Function;
  onClose?: Function;
}

export const StackModal : React.FC<StackModalProps> = (props) => {
  const [ name, setName ] = React.useState<string>('');

  const [ type, setType ] = useState('')

  const onClose = () => {
    if(props.onClose){
      props.onClose();
    }
  }

  const onSubmit = () => {
    if(props.onSubmit){
      props.onSubmit({
        name: name
      })
    }
  }

  useEffect(() => {
    if(props.selected){
      setName(props.selected.name)
    }
  }, [props.selected])

  return (
    <BaseModal 
        open={props.open}
        onClose={onClose}
        onSubmit={onSubmit}
        title={(props.selected ? "Edit" : "Create") +  " Plugin"}>
          <TextInput placeholder="Plugin name" value={name} onChange={(e) => setName(e.target.value)} />
          <CheckBox label="Public"  />
     </BaseModal>
  );
}
