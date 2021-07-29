import { Box, Select, Button } from 'grommet';
import React from 'react';
import * as Icons from 'grommet-icons'
import { TextInput } from 'grommet';

export interface ConditionColumn {
    label?: string;
    key?: string;
    labelKey?: string;
    valueKey?: string;
    options?: string | any[] | ((state: any) => any[])
}

export interface ConditionBuilderProps {
    cols?: ConditionColumn[]
    onChange?: (conditions: any[]) => void;
    onAdd?: () => void;
    conditions?: any[]
}

export const ConditionSelector = (props: any) => {
    return 
}

export const ConditionBuilder : React.FC<ConditionBuilderProps> = (props) => {

    const changeCondition = (ix: number, key: string, option: any) => {
        let conds = props.conditions?.slice() || []
        conds[ix][key || ''] = option;
        props.onChange?.(conds)
    }

    return (
        <Box gap="small">
            {props.conditions?.map((condition, condition_ix) => 
                <Box 
                    elevation="small"
                    background="light-2"
                    round="medium"
                    direction="row">
                    {props.cols?.map((column, col_ix) => typeof(column.options) === 'string' ? (

                        <TextInput
                            plain
                            type={column.options}
                            value={condition[column.key || '']}
                            onChange={(e) => { 
                                changeCondition(condition_ix, column.key || '', e.target.value)
                            }} />
                    ) : (
                        <Select 
                            placeholder={column.label}
                            plain
                            size="small"
                            labelKey={column.labelKey}
                            valueKey={column.valueKey}
                            options={column.options != undefined ? (Array.isArray(column.options)) ? (column.options || []): (column.options(props.conditions?.[condition_ix]) || []) : []} 
                            value={condition[column.key || '']}
                            onChange={({option}) => {
                                changeCondition(condition_ix, column.key || '', option) 
                            }} />
                    ))}
                </Box>
            )}
            <Button  onClick={props.onAdd} label="Add condition" />
        </Box>
    )
}