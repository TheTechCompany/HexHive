import React, { useState } from 'react';
import { BaseModal } from '../base';
import { TextInput, List, Button, Box, Select } from 'grommet';
import * as Icons from 'grommet-icons';

export interface PropertyModalProps {
    open: boolean;
    onSubmit?: (property: {name: string, type: string, options?: string[]}) => void;
    onClose?: () => void;
}

export const PropertyModal : React.FC<PropertyModalProps> = (props) => {

    const [ name, setName ] = useState<string>('');
    const [ type, setType ] = useState<string>('');
    
    const [ _enum, setEnum ] = React.useState<any[]>([])

    return (
        <BaseModal 
            width={"large"}
            title="State Property"
            onSubmit={() => {
                props.onSubmit?.({name: name, type: type, options: _enum})
            }}
            open={props.open}
            onClose={props.onClose}>
            <Box flex>
                <TextInput 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Property name" />
                <Select 
                    value={type}
                    onChange={({option}) => setType(option)}
                    options={["Text", "Number", "Enum", "Switch"]} />
                
                
                {type == 'Enum' && (
                <>
                <Box pad="xsmall" margin={{top: 'small'}}>
                   {_enum.map((_en, index) => (
                            <Box direction="row" align="center">
                                <TextInput
                                  
                                    reverse
                                    value={_enum[index] || ''}
                                    onChange={(e) => {
                                        console.log(index, _en)
                                        let en = _enum.slice()
                                        en[index] = e.target.value
                                        setEnum(en)
                                    }} 
                                    />
                                     
                                    <Button
                                    title="Remove item"
                                    onClick={() => {
                                        let en = _enum.slice()
                                        en.splice(index, 1)
                                        setEnum(en)
                                    }}
                                     icon={<Icons.Close 
                                        
                                         size="small" />} />
                            </Box>
                    ))}

                    <Button 
                        onClick={() => setEnum([..._enum, "" ])}
                        label="Add value"/>
                </Box>
                </>
                )}
            </Box>
        </BaseModal>
    )
}