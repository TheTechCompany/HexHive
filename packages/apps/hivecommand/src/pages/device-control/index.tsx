import { IconNodeFactory } from '@hexhive/ui';
import { Box, Text } from 'grommet';
// import { FlowEditor } from '@hexhive/command-editor';
import { InfiniteCanvas } from '@hexhive/ui';
import React from 'react';
import { HMINodeFactory } from '../../components/hmi-node/HMINodeFactory';
import { useQuery, gql} from '@apollo/client';
import { RouteComponentProps } from 'react-router';
// import program from 'shared/hexhive-types/src/models/program';
import * as HMINodes from '../../assets/hmi-elements'

export interface DeviceControlProps extends RouteComponentProps<{id: string}>{

}

export const DeviceControl : React.FC<DeviceControlProps> = (props) => {

    const { data } = useQuery(gql`
        query Q ($id: ID){
            commandDevices(where: {id: $id}){
                activeProgram {
                    id
                    name
                    hmi{
                        id
                        nodes{
                            id
                            type
                            x
                            y
                        }
                    }
                }

            }
        }
    `, {
        variables: {
            id: props.match.params.id
        }
    })

    const program = data?.commandDevices?.[0]?.activeProgram || {};

    const hmi = program?.hmi?.[0]?.nodes || [];

    return (
        <Box
            round="xsmall"
            overflow="hidden"
            flex>
            <Box 
                pad="xsmall"
                background="accent-2"
                direction="row">
                <Text >{program.name}</Text>
            </Box>
            <InfiniteCanvas 
                editable={false}
                factories={[
                    new IconNodeFactory(),
                    new HMINodeFactory()
                ]}
                nodes={hmi.map((node) => ({
                    id: node.id,
                    type: 'hmi-node',
                    x: node.x,
                    y: node.y,
                    extras: {
                        icon: HMINodes[node.type]
                    }
                }))}
                paths={[]}
                   />
        </Box>
    )
}