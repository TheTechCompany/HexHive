import React, { useEffect } from 'react';

import { TextInput } from 'grommet';
import { BaseModal } from '../base';

export interface ProgramModalProps {
  open: boolean;
  selected?: any;
  onSubmit?: Function;
  onClose?: Function;
}

export const ProgramModal : React.FC<ProgramModalProps> = (props) => {
  const [ name, setName ] = React.useState<string>('');
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
        title="Edit Program">
          <TextInput placeholder="Program name" value={name} onChange={(e) => setName(e.target.value)} />
     </BaseModal>
  );
}
