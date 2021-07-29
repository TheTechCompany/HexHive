import React, {
	Component, useEffect, useState
} from 'react';

import { Tabs, Text, Tab, Box, Heading, Spinner } from 'grommet';


// import SharedFiles from '@hexhive/auth-ui';


import moment from 'moment';

// import utils from '../../../utils';

import './style.css';
import { Kanban, FileDialog, SharedFiles } from '@hexhive/ui';

import { useMutation, refetch, useQuery, File } from '../../../gqless';

export interface FocusedJobProps{
  match?: any;
}

const STATUS = [ "Issued", "Workshop", "Finished" ];


export const SingleJob : React.FC<FocusedJobProps> = (props) => {

  const [ loadingFiles, setLoadingFiles ] = useState<any[]>([])
  const [ uploadingFiles, setUploadingFiles ] = useState<any[]>([])

  const [ dialogOpen, openDialog ] = useState<boolean>(false)

  const [ showFiles, setShowFiles ] = useState<any[]>([]);

  const [ assignedEmployees, setAssignedEmployees ] = useState<any[]>([])

  const [ comment, setComment ] = useState<string>('')
  const [ uploadFile, setUploadFile ] = useState<string>('')
  const [ files, setFiles ] = useState<any[]>([])

  const [ description, setDescription ] = useState<string>('')

  const job_id = props.match.params.job;


  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: true
  })

  const [ removeFile, {isLoading}] = useMutation((mutation, args: {id: string, project: string}) => {
    const result = mutation.removeFileFromProject({id: args.id, project: args.project})

    return {
      item: result,
      error: null
    }
  }, {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ProjectById({id: job_id})],
    suspense: false,
    awaitRefetchQueries: true
  } )

  const [ updateFile, info] = useMutation((mutation, args: {id: string, name?: string, status?: string}) => {
    const result = mutation.updateFile({id: args.id, name: args.name, status: args.status})
    return {
      item: {
        ...result
      },
      error: null
    }
  },  {
    onCompleted(data) {},
    onError(error) {},
    refetchQueries: [query.ProjectById({id: job_id})],
    suspense: false,
    awaitRefetchQueries: true
  })


  const job = query.ProjectById({id: job_id})

  useEffect(() => {
    console.log("JOB Changed")
    if(job && job.files){
      console.log(job.files)
      setFiles(job.files || [])
    }
  }, [job])

  const _tabs = [
    {
      title: "Files",
      component: (
      <SharedFiles
        loading={loadingFiles}
        uploading={uploadingFiles}

        onClick={(item) => {
          setShowFiles([item])
          openDialog(true)
        }}
        files={files || []}
        onDelete={async (_files) => {
          console.log(_files)
          await Promise.all(_files.map(async (file) => {
            if(job?.id) await removeFile({args: {project: job?.id, id: file._id}})
          }))

        }}
        onEdit={(files) => {
          openDialog(true)
          setShowFiles(files)
        }}
        onView={(files) => {
          openDialog(true)
          setShowFiles(files)
        }}
        onChange={(files) => setFiles(files)}
        jobId={job_id} />)
    },
    {
      title: "Project board",
      component: <Kanban 
      onDrag={(result) => {
        console.log(result.destination?.droppableId)
        if(result.destination?.droppableId != undefined){
          let f = files.slice()
          let f_ix = f.map((x) => x._id).indexOf(result.draggableId)
          f[f_ix].status = STATUS[parseInt(result.destination?.droppableId || '')]
          setFiles(f)

          const loaded = UseLoading(result.draggableId)

          updateFile({args: {id: result.draggableId, status: STATUS[parseInt(result.destination?.droppableId)]}}).then(() => {
           
            loaded()
            setLoadingFiles(f)
          })
        
        /*  utils.job.updateFile(job_id, result.draggableId, {status: STATUS[parseInt(result.destination?.droppableId)]}).then(() => {
            //TODO reset if error  
          })*/

        }
      }}
      renderCard={(item) => {
        return (
        <Box 
          onClick={() => {
            setShowFiles([item])
            openDialog(true)
          }}
          direction="column"
          background="light-2"
          round="xsmall"
          pad="small">
          <Text>{item.name}</Text>
        </Box>
      )}}
      columns={STATUS.map((x) => ({
        id: x,
        title: x,
        rows: files.filter((a: any) => a.status == x).map((x)=> ({...x}))
      }))} />
    }
  ]

  const UseLoading = (id: string) => {
    setLoadingFiles(Array.from(new Set([...loadingFiles, id])))

    return () => {
      let f = loadingFiles.slice() || [];
      let ix = f.indexOf(id)

      f.splice(ix, 1)
      setLoadingFiles(f)
    }
  }

  useEffect(() => {
    if(props.match.params.job){
    /* utils.job.getDetails(props.match.params.job).then((job) => {
        console.log("JOB", job)
        setJob(job[0])
      })
*/

      // utils.job.getFiles(props.match.params.job)
    }
  }, [props.match.params.job]) 





  const renderJobDuration = () => {
    if(job?.startDate){
      let startDate = moment(job?.startDate, 'DD/MM/YYYY');
      let endDate = moment(job?.endDate, 'DD/MM/YYYY') //.add(job.Duration, job.DurationType);
      return (
        <Text style={{fontSize: 14}}>{startDate.format('DD/MM/YYYY')} - {endDate.format('DD/MM/YYYY')}</Text> 
      );
    }else{
      return null;
    }
  }

   const renderJobDescription = () => {
      return (
        <Box style={{flex: 0.5}}> 
          <Box className="job-description">
            <Text style={{textAlign: 'left'}}>{job?.name}</Text>
            {renderJobDuration()}
          </Box>
        </Box>
      );
   }

	const renderBody = () => {
		return(
			<div className="job-body" style = {{flex: 0.7, display: 'flex', flexDirection: 'column'}}> 
			   {renderJobDescription()}	
			</div>
		);	
	}

  return (
			<Box
        direction="column"
        background="light-1"
        round="xsmall"
        pad={{horizontal: 'small'}}
        className="job-one-container" style={{flex: 1, display: 'flex'}}>
          <FileDialog
              open={dialogOpen}
              onSubmit={async (_files: File[]) => {
                if(_files.length == 1){
                  let file = _files[0]

                  if(file._id){
                    const loaded = UseLoading(file._id);

                    updateFile({args: {id: file._id, name: file.name || '', status: file.status || ''}}).then(({item}) => {
                      console.log(item)

                      let f = files?.slice()
                      let ix = f.map((x: any) => x.id).indexOf(file._id)

                      item._id = file._id;

                      if(ix > -1){
                        f[ix] = {
                          ...item
                        }
                      }

                      loaded()
                    })
                  }
                  /*
                  utils.job.updateFile(job?.id, file.id, file).then((resp) => {
                    console.log("Updated", resp)
                    let f = files?.slice()
                    let ix = f.map((x: any) => x.id).indexOf(file.id)

                    console.log(f, ix, file )
                    if(ix > -1){
                      f[ix] = {
                        ...file
                      }
                    }

                    setFiles(f)
                  })*/
                }else if(_files.length > 1){
                  const results = await Promise.all(_files.map(async (file :any) => {
                    await updateFile({args: {id: file._id, status: file.status}})
                  }))

               
                }

              }}
              onClose={() => {
                console.log("CLose")
                openDialog(false)
                setShowFiles([])
              }}
              files={showFiles} 
              job={job?.id} />

          <Box 
            pad={{horizontal: 'small'}}
            direction="column"
            align="start">
            <Heading level='4' margin="small">{job?.id} - {job?.name || "Job Title"}</Heading>
            
          </Box>
        
          <Tabs
              alignControls="start"
              flex>
                {_tabs.map((tab, ix) => (
                  <Tab
                    key={`tab-${ix}`}
                    title={tab.title}>
                      {query.$state.isLoading ? (
                      <Box 
                        flex
                        justify="center"
                        align="center">
                          <Spinner size="medium" />
                      </Box>
                    ): (<Box
                        height="100%"
                        flex>
                          {tab.component}
                        </Box>)}
                    </Tab>
                ))}
          </Tabs>
        
  
			</Box>
		);
	
}

// export default connect((state: StoreState) => ({
//   token: state.auth.token
// }))(FocusedJob);
