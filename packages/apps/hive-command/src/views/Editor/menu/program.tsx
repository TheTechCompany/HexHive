import { TreeView } from '@thetechcompany/live-ui';
import React, { useState } from 'react';
import { programActions } from '../../../actions';
import { ProcessModal } from '../../../components/modals/process';
import { FlowShard } from '../../../gqless';
import { makeTree } from '../../../utils';

export interface ProgramMenuProps {
    program_shards?: FlowShard[]
    program: string;

    onSelect?: (selector: string) => void;
}

export const ProgramMenu : React.FC<ProgramMenuProps> = (props) => {
    const [ modalOpen, openModal ] = useState(false);
    
    const [ createNode, setCreateNode ] = useState<string>()

    const [ addProcess, {isLoading} ] = programActions.useAddProcess(props.program)

    return (
        <>
         <ProcessModal 
                onSubmit={(process: any) => {
                    
                    if(props.program) {
                        let args : any = {
                            program_id: props.program, 
                            name: process.name, 
                            nodes: [{id: 'origin', type: 'start-node', x: 20, y: 20}]
                        }

                        if(createNode) {
                            if(createNode.indexOf('.')) {
                                let parts = createNode.split('.')
                                args.parent = parts[parts.length -1]
                            }else{
                                args.parent = createNode
                            }
                        }

                        addProcess({
                            args: args
                        })
                    }
                    openModal(false)
                    setCreateNode(undefined)
                }}
                open={modalOpen} 
                onClose={() => openModal(false)}/>

        <TreeView
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
            }]}
    />
    </>
    )
}