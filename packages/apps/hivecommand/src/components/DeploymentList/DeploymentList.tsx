import React from 'react';
import { Box, DataTable, Text, CheckBox, Button } from 'grommet';
import moment from 'moment';
import { CommandDevice, CommandProgram, Maybe } from '@hexhive/client'
import * as Icons from 'grommet-icons'

export interface DeploymentListProps {
    onClickRow?: (row: any) => void;
    onEditRow?: (row: any) => void;

    programs?: CommandProgram[];
    devices?: CommandDevice[];

    selected?: string[];
}


export const DeploymentList : React.FC<DeploymentListProps> = (props) => {
    return (
        <Box 
            
            background={'neutral-1'}
            elevation="small"
            flex>
            <DataTable 
                
                onClickRow={props.onClickRow}
                data={props.devices?.map((x) => ({...x}))}
                columns={[
                    {
                        property: 'selected',
                        render: (datum) => <CheckBox checked={(props.selected || []).indexOf(datum.id) > -1} />,
                        header: <CheckBox />
                    },
                    {
                        property: 'name',
                        size: 'medium',
                        header: <Text>Name</Text>
                    },
                    {
                        property: 'activeProgram',
                        size: 'small',
                        render: (datum) => datum?.activeProgram?.name,
                        header: <Text>Program</Text>
                    },
                    {
                        size: 'small',
                        property: 'connected',
                        align: 'center',
                        header: <Text>Connection</Text>,
                        render: (datum) => (
                            <Box 
                                direction="row"
                                align="center"
                                round="small" 
                                pad="xsmall" >
                                <Box 
                                    margin={{right: 'small'}}
                                    width="7px" 
                                    height="7px" 
                                    round="small" 
                                    background={datum.online ? 'green' : 'red'} />
                                {datum.online ? 'Online' : 'Offline'}
                            </Box>
                        )
                    },
                    {  
                        property: 'lastSeen',
                        align: 'end',
                        size: 'small',
                        header: <Text>Last Seen</Text>,
                        render: (datum) => moment(datum.lastOnline).fromNow()
                    },
                    {
                        property: 'edit',
                        align: 'end',
                        size: 'small',
                        render: (datum) => (
                        <Button 
                            onClick={(e) => {   
                                e.stopPropagation();
                                props.onEditRow?.(datum)
                            }}
                            hoverIndicator icon={<Icons.MoreVertical />} />
                        )
                    }   
                ]} />
        </Box>
    )
}