import React, { useEffect } from 'react';

import { BaseModal } from '../base';
import { Box, Select, TextInput } from 'grommet';

export interface ActionModalProps {
  open: boolean;
  selected?: any;
  onSubmit?: Function;
  onClose?: Function;
  
  types?: string[];
  devices?: any[];
}

export const ActionModal : React.FC<ActionModalProps> = (props) => {
  const [ device, setDevice ] = React.useState<string>('');

  const [ action, setAction ] = React.useState<string>('')

  const onClose = () => {
    if(props.onClose){
      props.onClose();
    }
  }

  const onSubmit = () => {
    if(props.onSubmit){
      props.onSubmit({
        device,
        action
      })
    }
  }

  useEffect(() => {
    if(props.selected){
      setDevice(props.selected.device)
      setAction(props.selected.action)
    }
  }, [props.selected])

  return (
    <BaseModal 
        open={props.open}
        onClose={onClose}
        onSubmit={onSubmit}
        title="Edit Action">
          <Box 
            gap="xsmall"
            direction="row" 
            align="center">
            <Box
              round="small"
              background="neutral-1" 
              pad="xsmall">
              <Select 
                plain
                placeholder="Device"
                labelKey="name"
                value={device}
                onChange={({value}) => setDevice(value)}
                valueKey={{reduce: true, key: 'id'}}
                options={props.devices} />
            </Box>
            <Select 
              placeholder="Action"
              value={action}
              onChange={({value}) => setAction(value)}
              options={props.types || ["open", "close"]}  />
          </Box>
     </BaseModal>
  );
}
