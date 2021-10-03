import React, { useEffect, useState } from 'react';

import { TextInput } from 'grommet';
import { BaseModal } from '../base';

export interface StackItemModalProps {
  open: boolean;
  selected?: any;
  onSubmit?: Function;
  onClose?: Function;
}

export const StackItemModal : React.FC<StackItemModalProps> = (props) => {
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
        title="Edit Stack Item">
          <TextInput placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)} />
     </BaseModal>
  );
}
