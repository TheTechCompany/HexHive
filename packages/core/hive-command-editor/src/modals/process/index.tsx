import { TextInput } from 'grommet';
import React, { useEffect } from 'react';

import { BaseModal } from '../base';

export interface ProgramModalProps {
  open: boolean;
  selected?: any;
  onSubmit?: Function;
  onClose?: Function;
}

export const ProcessModal : React.FC<ProgramModalProps> = (props) => {
  const [ name, setName ] = React.useState<string>('');
  const onClose = () => {
    if(props.onClose){
      props.onClose();
    }
    setName('')

  }

  const onSubmit = () => {
    if(props.onSubmit){
      props.onSubmit({
        name: name
      })

      setName('')
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
        title="Add process">
          <TextInput placeholder="Process name" value={name} onChange={(e) => setName(e.target.value)} />
     </BaseModal>
  );
}
