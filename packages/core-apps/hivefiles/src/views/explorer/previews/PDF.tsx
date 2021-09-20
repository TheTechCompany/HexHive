import { Box } from 'grommet';
import React from 'react';
import { FileViewer } from '@hexhive/ui';

export const  PDFPreview : React.FC<any> = (props) => {
    return (
        <Box>
            <FileViewer files={[{
                url: `${process.env.REACT_APP_API || 'http://localhost:7000'}/api/files/ipfs/${props.file.cid}`,
                mimeType: 'application/pdf',
            }]} />
        </Box>
    )
}