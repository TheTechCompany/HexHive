import { IconNodeFactory } from '@hexhive/ui';
import { Box, Button, Text } from 'grommet';
// import { FlowEditor } from '@hexhive/command-editor';
import { InfiniteCanvas } from '@hexhive/ui';
import React, { useState } from 'react';
import { HMINodeFactory } from '../../components/hmi-node/HMINodeFactory';
import { useQuery, gql} from '@apollo/client';
import { RouteComponentProps } from 'react-router';
// import program from 'shared/hexhive-types/src/models/program';
import * as HMINodes from '../../assets/hmi-elements'
import { identity } from 'core/hive-command-editor/node_modules/@types/lodash';
import { CommandHMINode } from 'core/hexhive-client/src/gqty/schema.generated';

export interface DeviceControlProps extends RouteComponentProps<{id: string}>{

}

export const DeviceControl : React.FC<DeviceControlProps> = (props) => {

    const [ selected, setSelected ] = useState<{key?: string, id?: string}>(undefined)
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

    const nodes = hmi.map((node) => ({
        id: node.id,
        type: 'hmi-node',
        x: node.x,
        y: node.y,
        extras: {
            iconString: node.type,
            icon: HMINodes[node.type]
        }
    }))

    const renderActions = () => {
       let node : CommandHMINode = hmi.find((a) => a.id == selected?.id)

       if(!node) return ;

       return (
           <Box>
               {node.type}

               <Text size="small">Reading: 0.0C</Text>

               <Button label="Toggle state" />
            </Box>
       )

    }

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
            <Box                
                flex
                direction="row">
            <InfiniteCanvas 
                editable={false}
                factories={[
                    new IconNodeFactory(),
                    new HMINodeFactory()
                ]}
                onSelect={(key, id) => {
                    setSelected({key, id})
                }}
                nodes={nodes}
                paths={[]}
                   />
            <Box 
                width="small"
                background="neutral-1">
                {renderActions()}
            </Box>
            </Box>
        </Box>
    )
}