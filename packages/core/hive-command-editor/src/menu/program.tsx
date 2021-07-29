import React, { useState } from 'react';
import { ProcessModal } from '../modals/process';
import { FlowShard } from '@hive-flow/types';
import { makeTree } from '@hive-flow/utils';
import { useContext } from 'react';
import { EditorContext } from '../context';
import { ADD_PROGRAM } from '../store/actions';
import { TreeView } from '../components/tree-view'
import { nanoid } from 'nanoid';

export interface ProgramMenuProps {
    program_shards?: FlowShard[]
    program: string;

    onSelect?: (selector: string) => void;

    onCreate?: (program: any) => void;
}

export const ProgramMenu : React.FC<ProgramMenuProps> = (props) => {
    const { state, dispatch } = useContext(EditorContext)

    const [ expanded, setExpanded ] = useState<string[]>([])

    const [ modalOpen, openModal ] = useState(false);
    
    const [ createNode, setCreateNode ] = useState<string>()

    const addProcess = (args: {
            program_id: string,
            name: string, 
            parent?: string,
            nodes: any[]
        }) => {
        
            console.log("Add proc")
        
            let newProc : any = {
                _id: nanoid(),
                program: args.program_id, 
                name: args.name, 
                nodes: args.nodes,
            }
            if(args.parent) newProc.parent = args.parent;
        props.onCreate?.(newProc)

        // dispatch?.({type: ADD_PROGRAM, data: {
        //     program: args.program_id, 
        //     name: args.name, 
        //     nodes: args.nodes,
        //     parent: args.parent
        // }})
    }

    return (
        <>
         <ProcessModal 
                onSubmit={(process: any) => {
                    
                    if(props.program) {
                        let args : any = {
                            program_id: props.program.toString(), 
                            name: process.name, 
                            nodes: {origin: {id: 'origin', type: 'start-node', ports: [], x: 20, y: 20}},
                            paths: {}
                        }

                        if((createNode || '').indexOf('.') > -1) {
                            let parts = createNode?.split('.') || []
                            args.parent = parts[parts.length -1]
                        }else if(!createNode || createNode == 'root'){
                            //args.parent = props.program;
                        }else{
                            args.parent =  createNode
                        }

                        addProcess(args)
                    }
                    openModal(false)
                    setCreateNode(undefined)
                }}
                open={modalOpen} 
                onClose={() => openModal(false)}/>

                <TreeView 
                    width="100%"
                    onAddItem={(node) => {
                        console.log("Create node", node)
                        setCreateNode(node)
                        openModal(true)
                    }}
                    onClickRow={(row) => {
                        props.onSelect?.(row)
                        console.log(row)
                    }}
                    nodes={[{
                        id: 'root',
                        name: "Program", 
                        children: (props.program_shards?.map((x) => ({
                            id: x._id, 
                            name: x.name,
                            children: []
                        })) as any)
                    }]} />
       
    </>
    )
}

/*
 <TreeView
            expanded={expanded.length > 0 ? expanded : ["root"]}
            onExpansion={(expanded) => {
                setExpanded(expanded)
            }}
            onSelect={(selector) => {
                props.onSelect?.(selector)
            }}
            onCreate={(selector) => {
                setCreateNode(selector)
                openModal(true)
            }}
            items={[{
                id: 'root',
                label: "Program", 
                items: makeTree(props.program_shards?.map((x) => ({
                    ...x, 
                    id: x._id, 
                    label: x.name
                }) as any))
            }, {
                id: 'controls',
                label: "Controls"
            }]}
    />
*/