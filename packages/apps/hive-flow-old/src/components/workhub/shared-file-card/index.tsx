import React, {
  Component, useEffect, useState
} from 'react';

import { Add } from 'grommet-icons'

import RobustFileList from '../robust-file-list';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Dropzone from 'react-dropzone';
import { CloudUpload } from 'grommet-icons'
import moment from 'moment';
import utils from '../../../utils';
import './index.css';
import { Box, Button } from 'grommet';
import * as Icons from 'grommet-icons'
import { StoreState } from '../../../reducers';
import { connect } from 'react-redux';
import * as prefActions from '../../../actions/preference'
import { useRefetch, query } from '../../../gqless';
import { v4 } from 'uuid';

export interface SharedFileCardProps {

  loading?: any[];
  uploading?: any[];

  jobId?: string;
  style?: any;

  files?: any[];
  onChange?: (files: any[]) => void;
  
  onClick?: (item?: any) => void;

  onView?: (items: any[]) => void;
  onEdit?: (items: any[]) => void;
  onDelete?: (items: any[]) => void;
  prefs?: any;
  updatePrefs?: (update: any) => void;
}

const SharedFileCard : React.FC<SharedFileCardProps> = ({
  files = [],
  onChange,
  jobId,
  style,
  onClick,
  onDelete,
  onEdit,
  onView,
  prefs = {isGrid: false},
  updatePrefs,
  loading,
  uploading
}) =>  {

  console.log(prefs)
  const [ showFile, setShowFile ] = useState<any>(null)
  console.log("SHOW FILE", showFile)

  const [ selectedFiles, setSelectedFiles ] = useState<any[]>([])

  const [ dialogOpen, openDialog ] = useState<boolean>(false)

  const isGrid = prefs.isGrid;
  const setIsGrid = (val: boolean) => updatePrefs?.({isGrid: val})
 // const [ isGrid, setIsGrid ] = useState<boolean>(false)

 const refetch = useRefetch()


  const filesDropped = (dropped_files: File[]) => {

    let _files = dropped_files.map((x) => ({
      _id: v4(),
      file: x,
      name: x.name,
      uploaded: false
    }))

    if(!jobId) return;
    utils.job.uploadFiles(jobId, dropped_files).then((r) => {

      if(r.success){
      
        let f = files.slice().filter((a) => _files.map((x) => x._id).indexOf(a._id) < 0)
    
        onChange?.(f.concat(r.file))

      //refetch(() => query.ProjectById({id: jobId}))
      }
      
      /*utils.job.getFiles(jobId).then((files) => {
        onChange?.(files.map((x: any) => ({
          ...x,
          uploaded: true
        })))
        
      })*/
    })

    onChange?.(files?.concat(_files))
  }


  const removeFile = (file : any) => {
    if(!jobId) return;
    utils.job.removeFile(jobId, file.id).then((r) => {
      refetch(() => query.ProjectById({id: jobId}))

    })
  }

  const _onView = () => {
    onView?.(selectedFiles)
  } 

  const _onEdit = () => {
    onEdit?.(selectedFiles)

  }
  
  const _onDelete = () => {
    onDelete?.(selectedFiles)

  }

    return (
      <Box 
        flex
        direction="column" 
        style={{...style}}>
        <Box 
          flex
          style={{position: 'relative'}}>
          <Box 
            direction="row"
            justify="between">
              <Box
                round={{corner: 'top', size: 'small'}}
                background="light-3"
                direction="row">
             {/*   <Button
                  onClick={_onView}
                  size="small"
                  disabled={selectedFiles.length == 0}
             icon={<Icons.View />} />*/}
                <Button
                  onClick={_onEdit}
                  size="small"
                  disabled={selectedFiles.length == 0}
                  icon={<Icons.Edit />}/>
                <Button 
                  onClick={_onDelete}
                  size="small"
                  disabled={selectedFiles.length == 0}
                  icon={<Icons.Trash  color="status-critical"/>} />
              </Box>
              <Box
                overflow="hidden"
                round={{corner: 'top', size: 'small'}}
                background="light-3"
                direction="row"
                elevation="3"
                gap="small">
              <Button
                active={!isGrid}
                icon={<Icons.List />}
                onClick={() => setIsGrid(false)}
                />
              <Button
                active={isGrid}
                icon={<Icons.Grid />}
                onClick={() => setIsGrid(true)}
                />
              </Box>
          </Box>
          <Divider />
            <Dropzone noClick={true} noKeyboard={true} onDrop={filesDropped}>
              {({getRootProps, getInputProps, isDragActive, open}) => (
                <section style={{flex: 1, display: 'flex', outline: 'none', overflowY: 'scroll'}}>
                  
                  <div className={`file-list ${files?.length > 0 ? '' : 'empty'}`} {...getRootProps()}>
                    <input id="file-list__input" {...getInputProps()} />
                    
                    {(files?.length > 0) ? (
                      <RobustFileList 
                        grid={isGrid}
                        cols={4}
                        loading={loading}
                        uploading={uploading}
                        onSelect={(selection) => setSelectedFiles(selection)}
                        onClick={onClick}
                        onDeleteClick={removeFile}
                        files={files || []} /> 
                    ) : (

                      <div className="upload-helper">
                        <CloudUpload /><Typography variant="subtitle2">Drag files here to upload</Typography>
                      </div>
                    )}

                  </div>

                    
                    <div className={`file-list__drop ${isDragActive ? 'active' : ''}`}>
                      <CloudUpload style={{marginRight: '10px'}}/>
                      <Typography variant="subtitle2">Drop files to upload</Typography> 
                    </div>
                  <Fab style={{position: 'absolute', right: 10, bottom: 10}} color="primary" onClick={() => {
                    let fileInput = document.createElement('input')
                    fileInput.type = 'file'
                    fileInput.multiple = true;
                    fileInput.onchange = (e: any) => {
                      let fileArray = []
                      let files = e.target.files;
                      for(var i = 0; i < files.length; i++){
                        fileArray.push(files[i])
                      }

                      filesDropped(fileArray);
                    }
                    fileInput.click();
                  }} >
                    <Add style={{stroke: 'white'}} />
                  </Fab>
                </section>
              )} 
            </Dropzone>
        
        </Box>
      </Box>
    );
  
}


export default connect((state: StoreState) => {
  return {
    prefs: state?.preferences?.config
  }
}, (dispatch) => {
  return {
    updatePrefs: (update: any) => dispatch(prefActions.updatePrefs(update))
  }
})(SharedFileCard)