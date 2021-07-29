import React, { useEffect } from 'react';

import { BaseModal } from '../base';
import { Select, TextInput } from 'grommet';

export interface ProgramModalProps {
  open: boolean;
  selected?: any;
  onSubmit?: Function;
  onClose?: Function;
  
  types?: string[];

}

export const IOModal : React.FC<ProgramModalProps> = (props) => {
  const [ name, setName ] = React.useState<string>('');

  const [ type, setType ] = React.useState<string>('')

  const onClose = () => {
    if(props.onClose){
      props.onClose();
    }
  }

  const onSubmit = () => {
    if(props.onSubmit){
      props.onSubmit({
        name: name,
        type: type
      })
    }
  }

  useEffect(() => {
    if(props.selected){
      setName(props.selected.name)
      setType(props.selected.type)
    }
  }, [props.selected])

  return (
    <BaseModal 
        open={props.open}
        onClose={onClose}
        onSubmit={onSubmit}
        title="Edit IO">
          <TextInput placeholder="I/O name" value={name} onChange={(e) => setName(e.target.value)} />
          <Select 
            placeholder="Type"
            value={type}
            onChange={({option}) => setType(option)}
            options={props.types || []}  />
     </BaseModal>
  );
}
