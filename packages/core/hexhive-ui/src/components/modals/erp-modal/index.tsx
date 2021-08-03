import React from 'react';

import { Box, Button, DateInput, Layer, Select, TextInput, Text } from 'grommet'
import { useState } from 'react';
import { Add, Close } from 'grommet-icons'
import moment from 'moment';
import { useEffect } from 'react';

export interface ERPModalProps {
    open: boolean;
    selected?: any;
    onClose?: () => void;
    projects?: {
        id?: string | null;
        name?: string | null;
    }[]
    onSubmit?: (plan: { project?: string,
        startDate?: Date,
        endDate?: Date,
        items?: {
            location?: string;
            type?: string;
            estimate?: number;
        }[]}) => void;
}

export const ERPModal: React.FC<ERPModalProps> = (props) => {

    const [plan, setPlan] = useState<{
        project?: string,
        startDate?: Date,
        endDate?: Date,
        items?: {
            [key: string]: any;
            location: string;
            type: string;
            estimate?: number;
        }[]

    }>({items: []})

    useEffect(() => {
        console.log(props.selected)
        setPlan(props.selected ? {
            ...props.selected,
            project: props.selected.project.id
        } : {items: []})
    }, [props.selected])

    const [search, setSearch] = useState<string>('')

    const onClose = () => {
        props.onClose?.();
        setSearch('');
        setPlan({items: []})
    }

    const onSubmit = () => {
        let submit_plan = {
            ...plan,
            startDate: new Date(moment(plan.startDate).set('hours', 0).valueOf()),
            endDate: new Date(moment(plan.endDate).set('hours', 24).valueOf())
        }

        props.onSubmit?.(submit_plan);
        setPlan({items: []})
        setSearch('');
    }

    const addCapacityItem = () => {
        let items = plan.items?.slice() || [];

        items.push({type: '', location: '', estimate: undefined})
        setPlan({...plan, items: items})
    }

    const removeCapacityItem = (ix : number) => {
        let items = plan.items?.slice() || [];

        items.splice(ix, 1);
        setPlan({...plan, items: items})
    }

    const updateCapacityItem = (ix: number, field: string, value: any) => {
        let items = plan.items?.slice() || []
        items[ix][field] = value;
        setPlan({...plan, items: items})
    }


    return !props.open ? null : (
        <Layer
            onClickOutside={onClose}
            onEsc={onClose}>
            <Box
                height={{ min: '50vh', max: '80vh' }}
                round="xsmall"
                overflow={"hidden"}
                background="neutral-1"
                width="large"
                flex>

                <Box
                    height={{min: 'min-content'}}
                    background="accent-2"
                    pad={"xsmall"}
                    direction="row">
                    {/* Header */}
                    <Text weight="bold">Capacity Plan</Text>
                </Box>
                <Box
                    round="xsmall"
                    pad="xsmall"
                    gap="xsmall"
                    flex
                    height={{ max: '75vh' }}
                    direction="column">
                        
                    {/* Content */}
                    <Box height={{min: 'min-content'}} direction="column">
                        <Box direction="column">
                            <Text alignSelf="start" size="small">Project</Text>
                            <Select
                                onSearch={(searchString) => { setSearch(searchString) }}
                                onChange={({option}) => { setPlan({ ...plan, project: option.id }) }}
                                value={plan.project}
                                labelKey={(item) => item.id + ' - ' + item.name}
                                valueKey={{key: "id", reduce: true}}
                                options={props.projects?.filter((a) => !search || `${a.id} - ${a.name}`.indexOf(search) > -1) || []} />
                        </Box>
                        <Box gap="xsmall" direction="row">
                            <Box flex>
                                <Text alignSelf="start" size="small">Start Date</Text>
                                <DateInput
                                    value={plan.startDate instanceof Date ? plan.startDate.toISOString() : plan.startDate || ''}
                                    onChange={({ value }) => setPlan({ ...plan, startDate: value instanceof Date ? value : new Date(value as string) })}
                                    format="dd/mm/yyyy" />
                            </Box>
                            <Box flex>
                                <Text alignSelf="start" size="small">End Date</Text>
                                <DateInput
                                    value={plan.endDate instanceof Date ? plan.endDate.toISOString() : plan.endDate || ''}
                                    onChange={({ value }) => setPlan({ ...plan, endDate: value instanceof Date ? value : new Date(value as string) })}
                                    format="dd/mm/yyyy" />
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{ width: '100%', height: '1px', background: 'black' }} />
                    <Box
                        height={"100%"}
                        gap="xsmall" 
                        direction="column">
                        <Box
                            height={{min: 'min-content'}}
                            direction="row"
                            align="center"
                            justify="between">
                            <Text margin="none" weight="bold">Planned Capacity</Text>
                            <Button
                                onClick={addCapacityItem}
                                hoverIndicator 
                                icon={<Add size="small" />} />
                        </Box>
                    <Box 
                        gap="xsmall"
                        height={'min-content'}
                        overflow={'scroll'}>
                        {plan.items?.map((x, ix) => (
                            <Box key={ix} height={{min: '45px'}} align="center" direction="row">
                                <Box flex>
                                     <Select
                                        onChange={({option}) => updateCapacityItem(ix, 'type', option)}
                                        value={x.type}
                                        placeholder="Type"
                                        options={["Welder", "Fabricator", "TA"]} />
                                </Box>
                                <Box flex>
                                    <Select 
                                        value={x.location}
                                        onChange={({option}) => updateCapacityItem(ix, 'location', option)}
                                        placeholder="Location"
                                        options={["Site", "Workshop"]} />
                                </Box>
                                <Box flex>
                                    <TextInput  
                                        type="number"
                                        value={x.estimate}
                                        onChange={(e) => updateCapacityItem(ix, 'estimate', parseFloat(e.target.value))}
                                        placeholder="Estimated hours" />
                                </Box>
                                <Button onClick={() => removeCapacityItem(ix)} icon={<Close size="small" color="red" />} />
                            </Box>
                        ))}
                    </Box>
    

                    </Box>
                </Box>
                <Box height={{min: 'min-content'}} pad="xsmall" gap="xsmall" direction="row" justify="end">
                    {/* Actions */}
                    <Button onClick={onClose} label="Close"></Button>
                    <Button primary onClick={onSubmit} label="Save" ></Button>
                </Box>
            </Box>
        </Layer>
    );
}