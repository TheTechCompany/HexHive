import React, { useState } from 'react';

import { FileExplorerModal } from '@hexhive/ui';
import { gql, useQuery } from '@apollo/client';

export interface FileModalProps {
    open: boolean
    onClose?: () => void;
    onSubmit?: (file: any[]) => void;
}

export const FileModal : React.FC<FileModalProps> = (props) => {
  
    const [ selected, setSelected ] = useState<string[]>([])
  
    const [ lastCwd, setLastCwd ] = useState<string>('')
    const [ cwd, _setCwd ] = useState<string>('')

    const setCwd = (_cwd: string) => {
        setLastCwd(cwd)
        _setCwd(_cwd)
    }
    const {data} = useQuery(gql`
        query Q {
            fileSystems (where: {name: "Shared FS"}){
                files ${cwd ? `(where: {id: "${cwd}"})` : ''} {
                    id
                    name
                    isFolder
                    path
                    children {
                        id
                        name
                        isFolder
                        path
                    }
                }
            }
        }
    `)
    const files = cwd ? data?.fileSystems?.[0]?.files?.[0]?.children : data?.fileSystems?.[0]?.files;

    return (
        <FileExplorerModal 
            cwd={data?.fileSystems?.[0]?.files?.[0]?.path?.split('/').map((x) => ({name: x}))}
            files={files}
            selected={selected}
            onSubmit={() => {
                console.log(selected, files)
                props.onSubmit(selected.map((option) => {
                    return files.find((a) => a.id == option)
                }))
            }}
            onClick={(file) => {
                if(file.isFolder){
                    setCwd(file.id)
                }
            }}
            onBack={() => {
                if(lastCwd && lastCwd.length > 0) setCwd(lastCwd)
            }}
            onSelect={(id) => {
                let s = selected.slice()
                s.push(id)
                setSelected(s)
            }}
            onDeselect={(id) => {
                let s = selected.slice()
                s.splice(s.indexOf(id), 1)
                setSelected(s)
            }}
            onClose={props.onClose}
            open={props.open}>
            

        </FileExplorerModal>
    )
}