import React, {
  Component, useMemo, useState 
} from 'react';

import {
  Close as Clear
} from 'grommet-icons'

import FileCard from './file';
// import './index.css';
import { Box, DataTable, Text, Spinner, List, CheckBox } from 'grommet';
import { FileGrid } from './grid';
import { FileList } from './list'

export interface RobustFileListProps {
  loading?: any[];
  uploading?: any[];

  files?: {
    _id: string;
    name: string;
    cid: string
  }[];
  cols: any;

  onSelect?: (selection: any[]) => void;
  onClick?: any;
  onDeleteClick?: any;

  grid?: boolean;
}

export const RobustFileList : React.FC<RobustFileListProps> = (props) => {
  const [ sort, setSort ] = useState<{property: string, direction: "asc" | "desc"}>()

  const [ checked, setChecked ] = useState<string[]>([])

  const sortedFiles = useMemo(() => {
    if(!sort) return props.files || []
    
    return (props.files || []).map((x) => ({...x})).sort((a: any, b : any) => {
      let first = a[sort.property] || ''
      let next = b[sort.property] || ''
        return sort.direction == 'asc' ?
          first == next ? 0 : first > next ? 1 : -1 
          :
          first == next ? 0 : first < next ? 1 : -1
    })
  
  }, [JSON.stringify(props.files), sort])


  console.log(sortedFiles, props.files)


    return props.grid ? (
      <FileGrid 
        files={props.files} />
    ) : (
      <FileList 
        files={props.files} />
    )
}

export default RobustFileList
