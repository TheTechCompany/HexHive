import { TextInput, Select } from 'grommet';
import React from 'react';
import { useState } from 'react';
import { BaseModal } from '../base';
import { EnumSelector } from './EnumSelector';
import { SIUnitSelector } from './SIUnit';

export interface IOSpecModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (ioSpec: any) => void;
}


export const IOSpecModal : React.FC<IOSpecModalProps> = (props) => {

    const [ name, setName ] = useState<string>('')
    const [ type, setType ] = useState<string>('')

    const [ typeData, setTypeData ] = useState<any>()

    const onClose = () => {
        setName('')
        setType('')
        setTypeData(undefined)

        props.onClose?.()
    }

    const renderSelector = () => {
        switch(type){
            case "S.I Unit":
                return <SIUnitSelector value={typeData} onChange={(value) => setTypeData(value)} />
            case 'Enum':
                return <EnumSelector value={typeData} onChange={(value) => setTypeData(value)} />
        }
    }

    const getInitialData = (option: string) => {
        switch(option){
            case "Enum": 
                return [""]
            case "S.I Unit":
                return "m/sec"
            default:
                return undefined
        }
    }

    return <BaseModal
            onSubmit={() => {
                props.onSubmit?.({
                    name,
                    type,
                    typeData
                })

                onClose()
            }}
            onClose={onClose}
            title="Add I/O point"
            open={props.open}>
        <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" />
        <Select
            value={type}
            onChange={({option}) => {
                setType(option)
                setTypeData(getInitialData(option))
            }}
            options={["S.I Unit", "Enum", "Number", "String"]} />
        {renderSelector()}
    </BaseModal>
}