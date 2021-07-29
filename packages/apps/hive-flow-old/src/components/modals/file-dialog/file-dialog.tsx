import React, {
  useEffect, useState
} from 'react';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';

import {
  CloudDownload
} from 'grommet-icons'
import { connect } from 'react-redux';
import moment from 'moment';
import utils from '../../../utils';
import { Text, Select, Heading, Button as GButton, Box, Layer} from 'grommet'
import * as Icons from 'grommet-icons'
import './file-dialog.css';
import { StoreState } from '../../../reducers';
import { FileViewer } from '../../file-viewer';
import { File } from '../../../gqless';
import { dateFromObjectID } from '../../../utils/mongo';
var conf = require('../../../conf')
var download = require('downloadjs');


export interface FileDialogProps {
  open: boolean;
  onClose?: any;
  onSubmit?: (files: File[]) => void;

  job?: any;
  files?: File[];

  token?: string;

}
const BaseFileDialog : React.FC<FileDialogProps> = (props) =>{

  const [ expanded, setExpanded ] = useState<boolean>(true);

  const [ files, setFiles ] = useState<File[]>([])

  useEffect(() => {
    if(props.files){
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
      utils.job.getFile(props.job, `${file?._id}${file?.extension ? file.extension : ''}`).then((r) => {
        if(r){
          download(r, `${file?.name}${file?.extension ? file.extension : ''}`, file?.mimeType);
        }
      })
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
    _id: ' ',
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
          <GButton
            onClick={() => setExpanded(!expanded)}
            title="View file">
            <Icons.Expand />
          </GButton>
        </Box>
        <Box 
          flex
          direction="row">
          <div style={{flex: 1, marginRight: 5, display: 'flex', flexDirection: 'column'}}>
            <div style={{flex: 1}} className="file-dialog__content">
              <FileViewer files={files} token={props.token} />
            
            </div>
            {files?.length == 1 && expanded ? (
            <Button style={{marginTop: '8px'}} color="primary" variant="contained" onClick={downloadFile}>
              <CloudDownload color="light-1" style={{ marginRight: '10px'}} />
              Download
            </Button>
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
              <TextField 
                fullWidth 
                label="File title"
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
              <Typography variant="subtitle2" style={{color: 'gray'}}>File type: {file && file.mimeType}</Typography>
              <Typography variant="subtitle2" style={{color: 'gray'}}>Uploaded By: {file && file.owner?.name}</Typography>
              {file._id && dateFromObjectID(file._id).getTime() > 0 && <Typography variant="subtitle2" style={{color: 'gray'}}>Upload Date: {file && moment(dateFromObjectID(file._id)).format("hh:mma DD/MM/YYYY")}</Typography>}
            </div>
          </div>

        </Box>
        <Box margin={{top: 'small'}} direction="row" justify="end">
          <Button onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" onClick={onSubmit}>
            Save
          </Button>
        </Box>
        </Box>
      </Layer>
    ) : null;
}

export const FileDialog = connect((state: StoreState) => {
  console.log(state)
  return {
  token: state.auth.token
  }
})(BaseFileDialog)
