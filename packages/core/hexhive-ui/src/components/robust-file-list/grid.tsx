import React from 'react';
import { Clear } from 'grommet-icons'
import FileCard from './file'
import { Box, Text, Spinner } from 'grommet'

export interface FileGridProps {
  files?: {
    cid?: string;
    name?: string;
  }[]
  onDeleteClick?: any;
  onClick?: any;
}

export const FileGrid : React.FC<FileGridProps> = (props) => {
    return (
        <Box 
            direction="row"
            wrap
            className="robust-file-list">
        {props.files?.map((x, ix) => (
          <Box key={ix} className="file-tile" onClick={() => (x.cid) ? props.onClick(x) : () => {}}>
            {(x.cid) ? (<div className="file__delete-actions" onClick={(e) => {
              props.onDeleteClick(x)
              e.stopPropagation();
            }}>
              <Clear />
            </div>) : null}
            {(!x.cid) ? (<div className="file__upload-indicator"><Spinner /></div>) : null}
            <FileCard file={x as any}/>
            {(x.cid) ? <Text>{x.name}</Text> : null}
          </Box>
        ))}
      </Box>
    );
}