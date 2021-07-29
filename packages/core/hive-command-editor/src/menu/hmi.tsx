import React, { useState } from 'react';
import { ProcessModal } from '../modals/process';
import { FlowShard } from '@hexhive/types/dist/interfaces';
import { makeTree } from '@hexhive/utils';
import { useContext } from 'react';
import { EditorContext } from '../context';
import { ADD_HMI } from '../store/actions';
import { TreeView } from '../components/tree-view'
export interface HMIMenuProps {
    hmi?: FlowShard[]
    program?: string;

    onSelect?: (hmi_id: string) => void;
}

export const HMIMenu: React.FC<HMIMenuProps> = (props) => {

    const { state, dispatch } = useContext(EditorContext)

    const [expanded, setExpanded] = useState<string[]>([])

    const [createNode, setCreateNode] = useState<string>()
    const [modalOpen, openModal] = useState(false)

    const addHMIFlow = (args: { program_id: string, name: string, nodes: any[], parent?: string }) => {
        dispatch?.({
            type: ADD_HMI, data: {
                program: args.program_id,
                name: args.name,
                nodes: args.nodes,
                parent: args.parent
            }
        })
    }

    console.log(props.program, createNode)
    return (
        <>

            <ProcessModal
                onSubmit={(process: any) => {
                    console.log(process)
                    if (props.program) {
                        console.log("Submit")
                        let args: any = {
                            program_id: props.program,
                            name: process.name,
                            nodes: []
                        }

                        console.log(createNode)
                        if ((createNode || '').indexOf('.') > -1) {
                            let parts = createNode?.split('.') || []
                            args.parent = parts[parts.length - 1]
                        } else if (!createNode || createNode == 'root') {
                            //args.parent = props.program;
                        } else {
                            args.parent = createNode
                        }


                        addHMIFlow(args)
                    }
                    openModal(false)
                    setCreateNode(undefined)
                }}
                open={modalOpen}
                onClose={() => openModal(false)} />

            <TreeView
                width="100%"
                onAddItem={(selector) => {
                    setCreateNode(selector)
                    openModal(true)
                }}
                onClickRow={(selector) => {
                    let parts = selector.split('.')
                    if(parts.length > 1){
                        props.onSelect?.(parts[parts.length - 1])
                    }
                }}
                nodes={[{
                    id: 'root',
                    name: "Controls",
                    children: makeTree(props.hmi?.map((x) => ({
                        id: x._id,
                        name: x.name,
                        children: []
                    }) as any))
                }]} />

        </>
    )
}

/*
 <TreeView
            expanded={expanded.length > 0 ? expanded : ['root']}
            onExpansion={(expanded) => {
                setExpanded(expanded)
            }}
            onCreate={(selector) => {
                setCreateNode(selector)
                openModal(true)
            }}
            onSelect={(selector) => {
                let parts = selector.split('.')
                if(parts.length > 1){
                    props.onSelect?.(parts[parts.length - 1])
                }
            }}
            items={[{
                id: 'root',
                label: "HMI",
                items: makeTree(props.hmi?.map((x) => ({
                    ...x,
                    id: x._id,
                    label: x.name
                }) as any))
            }]}
    />
*/