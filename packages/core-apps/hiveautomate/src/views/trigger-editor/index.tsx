import { Box, Button, Collapsible, List, Spinner, Text } from 'grommet';
import { Uri } from 'monaco-editor';
import { Save } from 'grommet-icons'
import React, { useState } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";
import { mutation, useMutation } from '@hexhive/client';
import { RouteComponentProps } from 'react-router-dom';
import { useEffect } from 'react';
import { Add, Upload } from 'grommet-icons';
import { PortModal } from '../../modals/port-modal';
import { EventModal } from '../../modals/event-modal';
import { gql, useQuery } from '@apollo/client';

export interface TriggerEditorProps extends RouteComponentProps<{id: string}> {

}

export const TriggerEditor : React.FC<TriggerEditorProps> = (props) => {
    // const query = useQuery({suspense: false})


    const {data} = useQuery(gql`
        query Q {
            hivePipelineTriggers(where: {id: "${props.match.params.id}"}){
                name
                
                produces {
                    id
                    name
                }
                
            }
        }
    `)

    const [ saving, setSaving ] = useState<boolean>(false)
    
    const task = data?.hivePipelineTriggers
    // const task = query.hivePipelineTriggers({where: {id: props.match.params.id}})
    
    const [ updateTrigger, updateInfo ] = useMutation((mutation, args: {id: string, event: string, }) => {
        const trigger = mutation.updateHivePipelineTriggers({where: {id: args.id}, update: {
            event: args.event
        }})
        return {
            item: {
                ...trigger.hivePipelineTriggers[0]
            },
            err: null
        }
    })

        
    const [ addTriggerProduce, addInfo ] = useMutation((mutation, args: {id: string, name: string, type: string }) => {
        const trigger = mutation.updateHivePipelineTriggers({where: {id: args.id}, update: {
            produces: [{create: [{node: {name: args.name, type: args.type, direction: 'output'}}]}]
        }})
        return {
            item: {
                ...trigger.hivePipelineTriggers[0]
            },
            err: null
        }
    })
    // const [ publishTask, publishInfo ] = useMutation((mutation, args: {id: string}) => {
    //     const item = mutation.publishHiveTask({id: args.id})  
    //     return {
    //         item: {
    //             success: true
    //         },
    //         err: null
    //     }
    // })


    // const [ addTaskPort, portInfo ] = useMutation((mutation, args: {name: string, direction: string, type: string}) => {
    //     const create = [{
    //         create: [
    //             {node: {
    //                 name: args.name,
    //                 direction: args.direction,
    //                 type: args.type
    //             }}
    //         ]
    //     }]
    //     let update = {
    //         ports: create
    //     }
    //     const item = mutation.updateHiveProcesses({where: {id: props.match.params.id}, update: update})
    //     return {
    //         item: {
    //             ...item.hiveProcesses[0]
    //         },
    //         err: null
    //     }
    // })

    
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
            round="xsmall"
            overflow="hidden"
            onKeyDown={(e) => {
                if((e.metaKey || e.ctrlKey) && e.keyCode == 83){
                    e.stopPropagation()
                    e.preventDefault()
                    setSaving(true)
                    // updateTask({args: {task: taskDefinition}}).then(() => {
                    //     setSaving(false)
                    // })
                }
            }}
            flex>
            <Box 
                background="accent-2"
                align="center" justify="between" elevation="small" pad="xsmall" direction="row">
                <Text>{task?.[0]?.name}</Text>
                
                <Box direction="row">
                    <Button 
                        onClick={() => {
                            // publishTask({args: {id: props.match.params.id}})
                        }}
                        hoverIndicator
                        icon={<Upload />} />
                <Button 
                    onClick={() => {
                        setSaving(true)
                        // updateTask({args: {task: taskDefinition}}).then(() => {
                        //     setSaving(false)
                        // })
                    }}
                    style={{borderRadius: 7}} 
                    hoverIndicator 
                    icon={saving ? <Spinner /> : <Save />} />
                </Box>
                
            </Box>
            <Box
                flex
                direction="row">
                <EventModal
                    onClose={() => openMenu(undefined)} 
                    open={menuOpen == 'events'} />
                <PortModal 
                    open={menuOpen == 'produces'}
                    onSubmit={(port) => {
                        addTriggerProduce({args: {
                            id: props.match.params.id,
                            name: port.name,
                            type: port.type,
                        }})
                        // addTaskPort({args: {
                        //     name: port.name,
                        //     type: port.type,
                        //     direction: menuOpen
                        // }})
                        openMenu(undefined)
                    }}
                    onClose={() => openMenu(undefined)} />
                <Box background="neutral-4" width="small">
                    <Box
                        >
                        <Box align="center" justify="between" pad="xsmall" background="accent-1" direction="row">
                            <Text>Events</Text>
                            <Button
                                onClick={() => openMenu('events')}
                                hoverIndicator plain size="small" icon={<Add />} />
                        </Box>
                        <Collapsible open={true || menuOpen == 'input'}>
                            <List 
                                primaryKey="name"
                                data={[]} />
                        </Collapsible>
                    </Box>
                    <Box
                       >
                        <Box align="center" justify="between"  pad="xsmall" background="accent-1" direction="row">
                         <Text>Produces</Text>
                         <Button 
                            onClick={() => openMenu('produces')}
                            hoverIndicator plain size="small" icon={<Add />} />

                        </Box>
                        <Collapsible open={true || menuOpen == 'output'}>
                            <List 
                                primaryKey="name"
                                data={task?.[0]?.produces} />

                        </Collapsible>
                    </Box>

                </Box>
                <Box flex>
                    <AceEditor
                    value={''}
                    onChange={(e) => {}}
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