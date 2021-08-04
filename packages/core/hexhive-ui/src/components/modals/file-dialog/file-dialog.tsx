import React, {
  useEffect, useState
} from 'react';

import {
  CloudDownload, Expand
} from 'grommet-icons'
import moment from 'moment';

import { Button, Text, Select, Heading,  Box, Layer, TextInput} from 'grommet'
// import './file-dialog.css';
import { IFile as HexFile } from '@hexhive/types'
import { dateFromObjectID } from '@hexhive/utils'
import { FileViewer } from '../../file-viewer';
import { FileContent } from './FileContent';
import { isEqual } from 'lodash';


export interface FileDialogProps {
  open: boolean;
  onClose?: any;
  onSubmit?: (files: HexFile[]) => void;

  job?: any;
  files?: HexFile[];

  token?: string;

}

export const FileDialog : React.FC<FileDialogProps> = (props) =>{

  const [ expanded, setExpanded ] = useState<boolean>(true);

  const [ files, setFiles ] = useState<HexFile[]>([])

  useEffect(() => {
    if(props.files && !isEqual(files, props.files)){
      setFiles(props.files)
    }
  }, [props.files])

  /*
   * Make this handle all files properly
   */
  const downloadFile = () => {
    let files = props.files;
    if(files && files.length == 1){
      let file = files[0]
      // utils.job.getFile(props.job, `${file?._id}${file?.extension ? file.extension : ''}`).then((r) => {
      //   if(r){
      //     download(r, `${file?.name}${file?.extension ? file.extension : ''}`, file?.mimeType);
      //   }
      // })
    }else{
      //TODO download batch
    }
  }

  const onSubmit = () => {
    if(files){
      //console.log(props.file)
      props.onSubmit?.(files)
    }

    onClose()
  /*()
    let update: any = {
      ...file
    }
    utils.job.updateFile(props.job, props.file.id, update).then((resp) => {
      console.log("Updated", resp)
    })
    onClose()*/
  }

  const onClose = () => {
    if(props.onClose){
      props.onClose();
    }
  }

  
  const updateFile = (key: string, value: any) => {
    let f = files.slice()

    if(f.length == 1){
      f[0] = {
        ...f[0],
        [key]: value
      }
    }else if(f.length > 1){
      if(key == 'status'){
        f = f.map((x) => ({...x, [key]: value}))
      }
    }

    setFiles(f)
  }


  const file = files.length == 1 ? files[0] : {
    id: ' ',
    name: "Multiple files",
    mimeType: "Mutliple",
    owner: {name: "Multiple uploaders"},
    status: files[0] ? files[0].status : '',
    timestamp: 0
  }
    return props.open ? (
      <Layer
        onEsc={onClose}
        onClickOutside={onClose}
        >
        <Box 
          height="80vh"
          width="xlarge" 
          pad="small">
        <Box direction="row" justify="between">
          <Heading level='4' margin={{bottom: 'small', top: 'none'}}>File Details</Heading>
          <Button
            icon={<Expand />}
            onClick={() => setExpanded(!expanded)}
            label="View file" />
        </Box>
        <Box 
          flex
          direction="row">
          <div style={{flex: 1, marginRight: 5, display: 'flex', flexDirection: 'column'}}>
            <FileContent files={files} token={props.token} />
            {files?.length == 1 && expanded ? (
            <Button icon={<CloudDownload />} label="Download" style={{marginTop: '8px'}}  onClick={downloadFile} />
          ) : null}
          </div>
          <div style={{
              overflow: 'hidden',
              width: !expanded ? '0px' : 'auto',
              transition: 'flex 250ms ease-in',
              flex: !expanded ? 0 : 1, 
              marginLeft: 5, 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between'
            }}>

            <Box 
              gap="small"
              direction="column">
              <TextInput 
                placeholder="File title"
                onChange={(e) => updateFile('name', e.target.value)}
                value={file?.name} />

              <Text margin='none' size='small'>Status</Text>
              <Select                
                value={file?.status || ''}
                onChange={({value, option}) => updateFile('status', value)}
                options={['Issued', 'Workshop', 'Finished']}
                />
            </Box>
            <div style={{display: 'flex', flexDirection: 'column'}}> 
              <Text style={{color: 'gray'}}>File type: {file && file.mimeType}</Text>
              <Text style={{color: 'gray'}}>Uploaded By: {file && file.owner && file.owner?.name}</Text>
              {file.id && <Text style={{color: 'gray'}}>Upload Date: {file && moment(file.timestamp || dateFromObjectID(file.id)).format("hh:mma DD/MM/YYYY")}</Text>}
            </div>
          </div>

        </Box>
        <Box margin={{top: 'small'}} direction="row" justify="end">
          <Button label="Cancel" onClick={onClose} />
          <Button primary label="Save" onClick={onSubmit} />
        </Box>
        </Box>
      </Layer>
    ) : null;
}

// export const FileDialog = connect((state: StoreState) => {
//   console.log(state)
//   return {
//   token: state.auth.token
//   }
// })(BaseFileDialog)
