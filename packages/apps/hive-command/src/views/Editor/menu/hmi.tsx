import { TreeView } from '@thetechcompany/live-ui';
import React, { useState } from 'react';
import { programActions } from '../../../actions';
import { ProcessModal } from '../../../components/modals/process';
import { FlowShard } from '../../../gqless';
import { makeTree } from '@hexhive/utils';

export interface HMIMenuProps {
    hmi?: FlowShard[]
    program?: string;
}

export const HMIMenu : React.FC<HMIMenuProps> = (props) => {
    const [ createNode, setCreateNode ] = useState<string>()
    const [ modalOpen, openModal ] = useState(false)
    
    const [ addHMIFlow, {isLoading} ] = programActions.useAddHMI(props.program)

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

                        addHMIFlow({
                            args: args
                        })
                    }
                    openModal(false)
                    setCreateNode(undefined)
                }}
                open={modalOpen} 
                onClose={() => openModal(false)}/>

        <TreeView
            onCreate={(selector) => {
                setCreateNode(selector)
                openModal(true)
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
    </>
    )
}