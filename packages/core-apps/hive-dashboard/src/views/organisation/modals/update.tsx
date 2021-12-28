import { Box, Button,Text, Layer, TextInput } from 'grommet';
import { Close } from 'grommet-icons';

import React from 'react';

export const UpdateModal : React.FC<any> = (props) => {
    return props.open ? (
        <Layer 
            onClickOutside={props.onClose}
            onEsc={props.onClose}
            modal={true}>
           <Box width="large" pad="small" gap="small">
                <Box align="center" justify="between" direction="row">
                    <Text>Invite Users</Text>
                    <Button hoverIndicator={true} size='small' onClick={props.onClose} icon={<Close size="small" />} />
                </Box>
                
                <Box gap="xsmall">
                    <TextInput value={"Name"} />
                    <TextInput value={"Email"} />
                    <TextInput value={"Role"} />
                </Box>

                <Box>
                    <Button primary label="Update" />
                </Box> 
            </Box>
        </Layer>
    ) : null;
}