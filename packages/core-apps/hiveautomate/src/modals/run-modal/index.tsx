import { gql,useQuery } from '@apollo/client';
import { BaseModal, FileExplorerModal } from '@hexhive/ui';
import { Box, TextInput } from 'grommet';
import React, { useState } from 'react';
import { Document } from 'grommet-icons';
import { FileModal } from '../../components/file-modal';

export interface RunModalProps {
    open: boolean;
    onClose?: () => void;
    onSubmit?: (state: any) => void;
    params: {name: string, type: string}[]
}

export const RunModal : React.FC<RunModalProps> = (props) => {
    console.log(props.params)

    const [ exploreFiles, openExplorer ] = useState<string>(undefined);

    const [ workState, setWorkState] = useState<any>({})

    return (
        <BaseModal 
            title="Run workflow"
            onClose={props.onClose}
            onSubmit={() => {
                props.onSubmit?.(workState)
            }}
            open={props.open}>
            
            <Box 
                width={{min: 'medium'}}
                gap="xsmall" direction="column">
            {props.params?.map((param) => param.type == "File" ? ( 
                    <Box
                        direction="row"
                        align="center"
                        onClick={() => openExplorer(param.name)}
                        >
                            <Document />
                            {workState[param.name] ? workState[param.name].map((x) => x.name).join(', ') : param.name}
                    </Box>
                ): (
                <TextInput  
                    placeholder={param.name} />
            ))}
            </Box>


            <FileModal
                open={exploreFiles != undefined} 
                onSubmit={(ids) => {
                    console.log(ids)
                    let ws = workState;
                    ws[exploreFiles] = ids;
                    setWorkState(ws)
                    openExplorer(undefined)
                }}
                onClose={() => openExplorer(undefined)}/>
        </BaseModal>
    )
}