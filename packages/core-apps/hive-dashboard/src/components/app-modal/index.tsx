import React from 'react';
import { BaseModal } from '@hexhive/ui'
import { Box, CheckBox, Layer, List, Text, TextInput} from 'grommet';
import { useState } from 'react';
import { useEffect } from 'react';

const apps = [
    {
        name: "HiveFlow",
        path: "/flow"
    },{
        name: "HiveCommand",
        path: "/command"
    },
    {
        name: "HiveFiles",
        path: "/files"
    },
    {
        name: "Hive3D",
        path: "/3d"
    },
    {
        name: "HiveAutomate",
        path: "/automate"
    },
    {
        name: "HiveBuild",
        path: "/build"
    },
    {
        name: "HiveMessage",
        path: "/message"
    }
]
export const AppModal : React.FC<any> = (props) => {
    const [ search, setSearch ] = useState<string>('')

    const [selected, setSelected] = useState<string>('')

    useEffect(() => {
        if(!props.open){
            setSelected('')
            setSearch('')
        }
    }, [props.open])

    return (
        <BaseModal 
            width="medium"
            title="Select application"
            open={props.open}
            onSubmit={() => {
                props.onSubmit({...apps.find((a) => a.path == selected)})
            }}
            onClose={props.onClose}>
            <TextInput 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ..." />
            <List
                onClickItem={({item}) => setSelected(item.path)}
                data={apps.filter((a) => a.name.indexOf(search) > -1)}>
                {(datum) => (
                    <Box gap="xsmall" direction="row">
                        <CheckBox checked={selected == datum.path} onChange={(event) => {
                            if(event.target.checked){
                                setSelected(datum.path)
                            }else{
                                setSelected(undefined)
                            }
                        }}/>
                        <Text>{datum.name}</Text>

                    </Box>
                )}
            </List>
        </BaseModal>
    )
}