import React from 'react';
import { Box, DataTable, Text, CheckBox, Button } from 'grommet';
import moment from 'moment';
import { Maybe, Program } from '@hexhive/client'
import * as Icons from 'grommet-icons'

export interface DeploymentListProps {
    onClickRow?: (row: any) => void;
    onEditRow?: (row: any) => void;

    programs?: Program[];
    devices?: {
        _id: string;
        name?: Maybe<string>;
        program?: string;
        connected?: boolean | null;
        lastSeen?: Date;
    }[];

    selected?: string[];
}

const mockData = [{
    _id: '1',
    name: 'mk1',
    version: '0.0.1',
    connected: true,
    lastCheckin: new Date()
},
{
    _id: '2',
    name: 'hashy-apple',
    version: '0.0.1',
    connected: false,
    lastCheckin: new Date()
}]

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
                        render: (datum) => <CheckBox checked={(props.selected || []).indexOf(datum._id) > -1} />,
                        header: <CheckBox />
                    },
                    {
                        property: 'name',
                        size: 'medium',
                        header: <Text>Name</Text>
                    },
                    {
                        property: 'program',
                        size: 'small',
                        render: (datum) => props.programs?.find((a) => a._id == datum.program)?.name,
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
                                    background={datum.connected ? 'green' : 'red'} />
                                {datum.connected ? 'Online' : 'Offline'}
                            </Box>
                        )
                    },
                    {  
                        property: 'lastSeen',
                        align: 'end',
                        size: 'small',
                        header: <Text>Last Seen</Text>,
                        render: (datum) => moment(datum.lastSeen).fromNow()
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