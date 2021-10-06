import React, { ReducerAction } from 'react';

import { Box, Button, DateInput, Layer, Select, TextInput, Text } from 'grommet'
import { useState } from 'react';
import { Capacity, Notes, Add, Close } from 'grommet-icons'
import moment from 'moment';
import { useEffect } from 'react';
import { ColorDot } from '../../color-dot';
import { CapacityItem } from './CapacityItem';
import {CapacityTab} from './tabs/capacity'
import {NoteTab} from './tabs/notes'

export interface ERPModalProps {
    open: boolean;
    type: "Projects" | "People" | "Estimates",
    selected?: any;
    onClose?: () => void;
    onDelete?: () => void;
    projects?: {
        id?: string | null;
        name?: string | null;
        type?: string;
    }[]
    onSubmit?: (plan: { 
        project?: {id?: string, type?: string},
        startDate?: Date,
        endDate?: Date,
        notes?: string,
        items?: {
            location?: string;
            type?: string;
            estimate?: number;
        }[]}) => void;
}

const tab_options = [<Capacity />, <Notes />]

export const ERPModal: React.FC<ERPModalProps> = (props) => {

    const [ tab, setTab ] = useState<number>(0);

    const [plan, setPlan] = useState<{
        project?: string,
        startDate?: Date,
        endDate?: Date,
        notes?: string,
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
            ...Object.assign({}, props.selected),
            project: props.selected?.project?.id
        } : {items: []})
    }, [props.selected])

    const [search, setSearch] = useState<string>('')

    const onClose = () => {
        props.onClose?.();
        setSearch('');
        setPlan({items: []})
    }

    const onDelete = () => {
        props.onDelete?.();
        // onClose();
    }

    const onSubmit = () => {
        let submit_plan = {
            ...plan,
            project: {
                type: props.projects?.find((a) => a.id == plan.project)?.type,
                id: plan.project
            },
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
        items[ix] = Object.assign(items[ix], {[field]: value});
        setPlan({...plan, items: items})
    }

    const updateNotes = (e: any) => {
        setPlan({...plan, notes: e.target.value})
    }


    const renderTab = () => {
        switch(tab){
            case 0:
                return (
                    <CapacityTab
                    addCapacityItem={addCapacityItem}
                    plan={plan}
                    removeCapacityItem={removeCapacityItem}
                    updateCapacityItem={updateCapacityItem}
                    type={props.type}/>
                    );
            case 1:
                return (
                    <NoteTab
                        notes={plan.notes}
                        updateNotes={updateNotes} />
                )
        }
    }

    return !props.open ? null : (
        <Layer
            onClickOutside={onClose}
            onEsc={onClose}>
            <Box
                height={{ min: '50vh', max: '80vh' }}
                round="xxsmall"
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
                        {props.type == "Projects" && <Box direction="column">
                            <Text alignSelf="start" size="small">Project</Text>
                            <Select
                                onSearch={(searchString) => { setSearch(searchString) }}
                                onChange={({option}) => { setPlan({ ...plan, project: option.id }) }}
                                value={plan.project}
                                labelKey={(item) => item.id + ' - ' + item.name}
                                valueKey={{key: "id", reduce: true}}
                                options={props.projects?.filter((a) => !search || `${a.id} - ${a.name}`.indexOf(search) > -1) || []}>
                                {(option) => (
                                    <Box pad="small" direction="row" align="center">
                                        <ColorDot color={option.type == "Project" ? '#A3B696': '#edc25c'} size={10}/>
                                        <Text>{option.id} - {option.name}</Text>
                                    </Box>
                                )}
                            </Select>
                        </Box>}
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
                    <Box 
                        height="100%"
                        direction="row" >
                        <Box background="accent-1" direction="column">
                            {tab_options.map((x, ix) => <Button icon={x} active={ix == tab} onClick={() => setTab(ix)} />)}
                            
                        </Box>
                    <Box
                        margin={{left: 'xsmall'}}
                        flex
                        overflow={"scroll"}
                        height={{min: '30vh', max: "100%"}}
                        gap="xsmall" 
                        direction="column">
                       
                       {renderTab()}
      

                    </Box>
                    </Box>
                </Box>
                <Box height={{min: 'min-content'}} pad="xsmall" gap="xsmall" direction="row" justify="end">
                    {/* Actions */}
                    {props.selected ? (<Button color="red" label="Delete" onClick={onDelete}></Button>) : null}
                    <Button onClick={onClose} label="Close"></Button>
                    <Button primary onClick={onSubmit} label="Save" ></Button>
                </Box>
            </Box>
        </Layer>
    );
}