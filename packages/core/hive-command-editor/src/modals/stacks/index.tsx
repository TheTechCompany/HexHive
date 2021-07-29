import React, { useEffect, useState } from 'react';
import { TextInput } from 'grommet';
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
    setName('')
    setType('')
  }

  const onSubmit = () => {
    if(props.onSubmit){
      props.onSubmit({
        name: name
      })

      setName('')
      setType('')
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
        title="Edit Stack">
          <TextInput placeholder="Stack name" value={name} onChange={(e) => setName(e.target.value)} />
     </BaseModal>
  );
}
