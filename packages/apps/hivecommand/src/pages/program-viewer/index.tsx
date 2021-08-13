import React, { useEffect, useMemo, useState } from 'react';

import styled from 'styled-components'


import { Maybe, Program, useQuery } from '../../gqless';
import { InfiniteCanvasNode, InfiniteCanvasPath } from '@hexhive/ui';

export interface ProgramViewerProps {
    className?: string;

    match?: any;
}


export const BaseProgramViewer : React.FC<ProgramViewerProps> = (props) => {
    
    const [ plantState, setPlantState ] = useState<any>({})

    const [ deviceState, setDeviceState ] = useState<any>({
        "SC101": "start",
        "AV101": "open",
        "SC301": "start",
        "AV301": "open",
        "AV302": "open",
        "AV402": "open",
        "AV401": "close",
        "BLO701": "start"
    })

    const query = useQuery({
        suspense: false,
        staleWhileRevalidate: true
    })

    const stacks = query.StackMany()

    const device = query.DeviceById({_id: props.match.params.id})

    const program = useMemo(() => {
        if(device?.program){
            let p = query.ProgramById({_id: device?.program})
            return {
                ...p
            }
        }
    }, [JSON.stringify(device)])
    

    //const program : Maybe<Program> = query.ProgramById({_id: device?.program })


    return query.$state.isLoading ? null: (
        <div className={props.className}>
    
      
                {/*state={deviceState}
                colr="green" />*/}
        </div>
    )
}

export const ProgramViewer = styled(BaseProgramViewer)`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-height: 100%;

    svg{
        flex: 1;
    }
`