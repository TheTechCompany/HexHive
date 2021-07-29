import React, {
  Component, useMemo, useState 
} from 'react';

import {
  Close as Clear
} from 'grommet-icons'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GridList from '@material-ui/core/GridList';

import FileCard from './file';
import './index.css';
import { DataTable, Text, Spinner, List, CheckBox } from 'grommet';

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

const RobustFileList : React.FC<RobustFileListProps> = (props) => {
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

  const _setChecked = (checked: string[]) => {
    setChecked(checked)
    props.onSelect?.(checked.map((x) => props.files?.find((a) => a._id == x)))
  }

  const onCheck = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (event.target.checked) {
      _setChecked([...checked, value]);
    } else {
      _setChecked(checked.filter(item => item !== value));
    }
  };

  const onCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    _setChecked(event.target.checked ? (props.files || []).map((datum) => datum._id) : []);
  }

    return props.grid ? (
      <GridList className="robust-file-list" cols={props.cols || 4} cellHeight={100}>
        {props.files?.map((x, ix) => (
          <GridListTile key={ix} className="file-tile" onClick={() => (x.cid) ? props.onClick(x) : () => {}}>
            {(x.cid) ? (<div className="file__delete-actions" onClick={(e) => {
              props.onDeleteClick(x)
              e.stopPropagation();
            }}>
              <Clear />
            </div>) : null}
            {(!x.cid) ? (<div className="file__upload-indicator"><Spinner /></div>) : null}
            <FileCard file={x as any}/>
            {(x.cid) ? (<GridListTileBar title={x.name} />) : null}
          </GridListTile>
        ))}
      </GridList>
    ) : (
      <DataTable
        step={50}
        paginate={true}
        onMore={() => console.log("More")}
        pin
        primaryKey={"_id"}
        columns={[
          {
            property: 'checkbox',
            render: datum => (
              (props.loading || []).indexOf(datum._id) > -1 || !datum.cid ? (
                <Spinner />
              ) : (
              <CheckBox 
                checked={checked.indexOf(datum._id) > -1}
                onChange={(e) => {
                  onCheck(e, datum._id)
                  e.preventDefault()
                  e.stopPropagation()
                }}/>)
            ),
            header: (
              <CheckBox
                onChange={onCheckAll}
                checked={checked.length == sortedFiles.length}
                indeterminate={checked.length > 0 && checked.length < sortedFiles.length} />
            ),
            sortable: false
          },
          {
            property: 'name',
            header: <Text>Name</Text>,
            sortable: true
          },
          {
            property: 'status',
            header: 'Status',
            sortable: true
          }
        ]}
        onSort={({property, direction}) => setSort({property, direction})}
        data={sortedFiles}
        onClickRow={({target, datum}) => {
          let tag : any = target;
          if(tag.tagName == "INPUT" && tag.type == "checkbox"){

          }else if(tag.getElementsByTagName('input').length > 0){
          
          }else{
            console.log(tag.tagName)
            props.onClick(datum)
          }
      }}
        />
    )
}

export default RobustFileList
