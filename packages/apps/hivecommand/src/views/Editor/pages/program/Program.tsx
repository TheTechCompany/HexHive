import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';
import { IconNodeFactory, InfiniteCanvasNode, InfiniteCanvas, ZoomControls } from '@hexhive/ui';
import { HMINodeFactory } from '../../../../components/hmi-node/HMINodeFactory';
import { nanoid } from 'nanoid';
import { NodeDropdown  } from '../../../../components/node-dropdown';
import { Action, Trigger } from 'grommet-icons';
import { gql, useQuery } from '@apollo/client';

export const Program = (props) => {
	const [ nodes, setNodes ] = useState<InfiniteCanvasNode[]>([])

    const nodeMenu = [
        {
            icon: <Action />,
            label: "Action",
            extras: {
                label: "Action",
                icon: 'Action'
            },
        },
        {
            icon: <Trigger />,
            label: "Trigger",
            extras: {
                label: "Trigger",
                icon: 'Trigger'
            }
        }
    ] 

    const { data } = useQuery(gql`
    query Q ($id: ID){
        commandPrograms(where: {id: $id}){
            id
            name
            program {
                id
                name
                nodes {
                    id
                    type
                    x 
                    y
                }
            }
        }
    }
`, {
    variables: {
        id: props.match.params.id
    }
})

useEffect(() => {
    let program = data?.commandPrograms?.[0]
    if(program && props.activeProgram){
        setNodes( program.program.find((a) => a.id == props.activeProgram).nodes.map((x) => ({
            id: x.id,
            x: x.x,
            y: x.y,
            extras: {
                icon: x.type 
            },
            type: 'icon-node'
            
        })))
    }
}, [data?.commandPrograms?.[0], props.activeProgram])


	return (
		<Box flex>
			<InfiniteCanvas 
                editable={true}
                nodes={nodes}
                factories={[new IconNodeFactory(), new HMINodeFactory()]}
                onPathCreate={(path) => {
                    // console.log("CREATE", path)
                    // setPaths([...paths, path])


                    // updateRef.current?.addPath(path);
                }}
                onPathUpdate={(path) => {
                    // console.log("UPDATE", path)
                    // let p = paths.slice()
                    // let ix = p.map((x) => x.id).indexOf(path.id)
                    // p[ix] = path;
                    // setPaths(p)

                    // updateRef.current?.updatePath(path)
                }}
                onNodeUpdate={(node) => {
                    let n = nodes.slice()
                    let ix = n.map((x) => x.id).indexOf(node.id)
                    n[ix] = node;
                    setNodes(n)
                    // console.log("NODES", node)
                }}
                onDrop={(position, data) => {
                    // if(view == "Program"){
                    //     addProgramNode({args: {
                    //         x: position.x,
                    //         y: position.y,
                    //         type: data.extras.icon
                    //     }})
                    // }else{
                    //     addHMINode({args: {
                    //         x: position.x,
                    //         y: position.y,
                    //         type: data.extras.icon
                    //     }})
                    // }
                    console.log(position, data)

                    // if(view == "HMI"){
                    //     data.extras.icon = HMIIcons[data.extras.icon]
                    // }
                    // setNodes([...nodes, {
                    //     id: nanoid(),
                    //     x: position.x,
                    //     y: position.y,
                    //     extras: {
                    //         icon: data.extras.icon
                    //     },
                    //     type: view == "Program" ? IconNodeFactory.TAG : HMINodeFactory.TAG
                    // }])
                }}
                >
                <NodeDropdown
                    items={nodeMenu}
                    />
                <ZoomControls
                    anchor={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}  />
            </InfiniteCanvas>
		</Box>

	)
} 