import { Box, Button, Collapsible, List, Spinner, Text } from 'grommet';
import { Uri } from 'monaco-editor';
import { Save } from 'grommet-icons'
import React, { useState } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";
import { mutation, useMutation, useQuery } from '@hexhive/client';
import { RouteComponentProps } from 'react-router-dom';
import { useEffect } from 'react';
import { Add, Upload } from 'grommet-icons';
import { PortModal } from '../../modals/port-modal';

export interface TaskEditorProps extends RouteComponentProps<{id: string}> {

}

export const TaskEditor : React.FC<TaskEditorProps> = (props) => {
    const query = useQuery({suspense: false})

    const [ saving, setSaving ] = useState<boolean>(false)
    const task = query.hiveProcesses({where: {id: props.match.params.id}})
    const taskPorts = query.hiveProcessPorts({where: {
        process: {id: props.match.params.id}
    }})
    const [ updateTask, updateInfo ] = useMutation((mutation, args: {task: string}) => {
        const item = mutation.updateHiveProcesses({where: {id: props.match.params.id}, update: {
            task: args.task
        }})
        return {
            item: {
                ...item.hiveProcesses[0]
            },
            err: null
        }
    })

    const [ publishTask, publishInfo ] = useMutation((mutation, args: {id: string}) => {
        const item = mutation.publishHiveTask({id: args.id})  
        return {
            item: {
                success: true
            },
            err: null
        }
    })


    const [ addTaskPort, portInfo ] = useMutation((mutation, args: {name: string, direction: string, type: string}) => {
        const create = [{
            create: [
                {node: {
                    name: args.name,
                    direction: args.direction,
                    type: args.type
                }}
            ]
        }]
        let update = {
            ports: create
        }
        const item = mutation.updateHiveProcesses({where: {id: props.match.params.id}, update: update})
        return {
            item: {
                ...item.hiveProcesses[0]
            },
            err: null
        }
    })

    const [ taskDefinition, setTaskDefinition ] = useState<string>('')

    useEffect(() => {
        setTaskDefinition(task?.[0]?.task)
    }, [task])

    const [ menuOpen, openMenu ] = useState<string>(undefined)

    const toggleMenu = (menu: string) => {
        if(menuOpen == menu){
            openMenu(undefined)
        }else{
            openMenu(menu)
        }
    }
    return (
        <Box 
            onKeyDown={(e) => {
                if((e.metaKey || e.ctrlKey) && e.keyCode == 83){
                    e.stopPropagation()
                    e.preventDefault()
                    setSaving(true)
                    updateTask({args: {task: taskDefinition}}).then(() => {
                        setSaving(false)
                    })
                }
            }}
            flex>
            <Box align="center" justify="between" elevation="small" pad="xsmall" direction="row">
                <Text>{task?.[0]?.name}</Text>
                
                <Box direction="row">
                    <Button 
                        onClick={() => {
                            publishTask({args: {id: props.match.params.id}})
                        }}
                        hoverIndicator
                        icon={<Upload />} />
                <Button 
                    onClick={() => {
                        setSaving(true)
                        updateTask({args: {task: taskDefinition}}).then(() => {
                            setSaving(false)
                        })
                    }}
                    style={{borderRadius: 7}} 
                    hoverIndicator 
                    icon={saving ? <Spinner /> : <Save />} />
                </Box>
                
            </Box>
            <Box
                flex
                direction="row">
                <PortModal 
                    open={menuOpen != undefined}
                    onSubmit={(port) => {
                        addTaskPort({args: {
                            name: port.name,
                            type: port.type,
                            direction: menuOpen
                        }})
                        openMenu(undefined)
                    }}
                    onClose={() => openMenu(undefined)} />
                <Box background="neutral-4" width="small">
                    <Box
                        >
                        <Box align="center" justify="between" pad="xsmall" background="accent-1" direction="row">
                            <Text>Inputs</Text>
                            <Button
                                onClick={() => openMenu('input')}
                                hoverIndicator plain size="small" icon={<Add />} />
                        </Box>
                        <Collapsible open={true || menuOpen == 'input'}>
                            <List 
                                primaryKey="name"
                                data={taskPorts.filter((a) => a.direction == 'input')} />
                        </Collapsible>
                    </Box>
                    <Box
                       >
                        <Box align="center" justify="between"  pad="xsmall" background="accent-1" direction="row">
                         <Text>Outputs</Text>
                         <Button 
                            onClick={() => openMenu('output')}
                            hoverIndicator plain size="small" icon={<Add />} />

                        </Box>
                        <Collapsible open={true || menuOpen == 'output'}>
                            <List 
                                primaryKey="name"
                                data={taskPorts.filter((a) => a.direction == 'output')} />

                        </Collapsible>
                    </Box>

                </Box>
                <Box flex>
                    <AceEditor
                    value={taskDefinition}
                    onChange={(e) => setTaskDefinition(e.toString())}
                    style={{flex: 1}}
                    width={"100%"}
                    height={"100%"}

                    mode="yaml"
                    theme="github"
                    name="UNIQUE_ID_OF_DIV" />
                </Box>

            </Box>
  
        </Box>
    )
}