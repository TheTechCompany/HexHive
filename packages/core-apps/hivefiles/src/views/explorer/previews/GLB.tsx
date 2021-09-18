import React from 'react';
import { BabylonViewer } from '@hexhive/ui'

export const GLBPreview : React.FC<{file: any}> = ( props ) => {
    console.log(props)
    return (
         <BabylonViewer rootUrl={`${process.env.REACT_APP_API || 'http://localhost:7000'}/api/files/ipfs/`} data={props.file?.cid} />
    )
}