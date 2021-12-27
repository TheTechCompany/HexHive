import React, {
  lazy,
	Component, useEffect, useState
} from 'react';

import { Tabs, Text, Tab, Box, Heading, Spinner, Button } from 'grommet';


// import SharedFiles from '@hexhive/auth-ui';

import { files as fileActions } from '../../../actions'

import moment from 'moment';

// import utils from '../../../utils';

import { Kanban, FileDialog, SharedFiles } from '@hexhive/ui';

import { useMutation, useQuery, useRefetch } from '@hexhive/client';
import { KanbanModal } from './KanbanModal';
import { useApolloClient } from '@apollo/client'
import { useParams } from 'react-router-dom';

// const FileExplorer = lazy(() => {
//   //@ts-ignore
//   return import('hexhive_hivefiles/Explorer').then((r) => {
//     console.log(r)
//     return {default: r.Explorer}
//   })
// })

export interface ProjectSingleProps {
  match?: {
    id?: any,
    job?: any;
  }
}

const STATUS = [ "Issued", "Workshop", "Finished" ];


export const ProjectSingle : React.FC<ProjectSingleProps> = (props) => {

const client = useApolloClient()

  const [ kanbanMenuVisible, showKanbanMenu ] = useState<boolean>(false);

  const [ selectedColumn, setSelectedColumn ] = useState<any>();

  const [ selectedTab, setSelectedTab ] = useState<number>(0)

  const [ loadingFiles, setLoadingFiles ] = useState<any[]>([])
  const [ uploadingFiles, setUploadingFiles ] = useState<any[]>([])

  const [ dialogOpen, openDialog ] = useState<boolean>(false)

  const [ showFiles, setShowFiles ] = useState<any[]>([]);

  const [ assignedEmployees, setAssignedEmployees ] = useState<any[]>([])

  const [ comment, setComment ] = useState<string>('')
  const [ uploadFile, setUploadFile ] = useState<string>('')
  const [ files, setFiles ] = useState<any[]>([])

  const [ description, setDescription ] = useState<string>('')

  const {id: job_id, jobParam} = useParams() 


  const query = useQuery({
    suspense: false,
    staleWhileRevalidate: true
  })

  const refetch = useRefetch();

  // const [ removeFile, {isLoading}] = useMutation((mutation, args: {id: string, project: string}) => {
  //   const result = mutation.removeFileFromProject({id: args.id, project: args.project})

  //   return {
  //     item: result,
  //     error: null
  //   }
  // }, {
  //   onCompleted(data) {},
  //   onError(error) {},
  //   refetchQueries: [query.projects({where: {id: job_id}})],
  //   suspense: false,
  //   awaitRefetchQueries: true
  // } )

  // const [ updateFile, info] = useMutation((mutation, args: {id: string, name?: string, status?: string}) => {
  //   const result = mutation.updateFile({id: args.id, name: args.name, status: args.status})
  //   return {
  //     item: {
  //       ...result
  //     },
  //     error: null
  //   }
  // },  {
  //   onCompleted(data) {},
  //   onError(error) {},
  //   refetchQueries: [query.projects({where: {id: job_id}})],
  //   suspense: false,
  //   awaitRefetchQueries: true
  // })

  // const [ updateFiles, filesUpdate] = useMutation((mutation, args: {ids: string[], status?: string}) => {
  //   const result = mutation.updateFiles({ids: args.ids, status: args.status})
  //   return {
  //     item: result?.slice(),
  //     error: null
  //   }
  // },  {
  //   onCompleted(data) {},
  //   onError(error) {},
  //   refetchQueries: [query.projects({where: {id: job_id}})],
  //   suspense: false,
  //   awaitRefetchQueries: true
  // })

  const [ parentId, setParentId ] = useState<string>(undefined)

  const job = query.projects({where: {id: job_id}})?.[0]

  useEffect(() => {
    console.log("JOB Changed")
    // if(job && job.files){
    //   console.log(job.files)
    //   setFiles(job.files || [])
    // }
  }, [JSON.stringify(job)])

  const _tabs = [
    // {
    //   title: "Files",
    //   component: (
    //     <FileExplorer 
    //         apolloClient={client}
    //         parentId={parentId}

    //         application={"HiveFlow"}
    //         mountPath={`/Projects/${job_id}`}
    //         onNavigate={(path) => {
    //           setParentId(path.id)
    //           // props.history.push(path.path)
    //         }}
    //       />
    //   ) 
    //   // (
    //   // <SharedFiles
    //   //   loading={loadingFiles}
    //   //   uploading={uploadingFiles}

    //   //   onClick={(item) => {
    //   //     setShowFiles([item])
    //   //     openDialog(true)
    //   //   }}
    //   //   files={(files || []).filter((a) => {
    //   //     if(a.status == "Finished"){
    //   //       let ttl = 14 * 24 * 60 * 60 * 1000;
    //   //       return Date.now() - dateFromObjectID(a.id).getTime() < ttl;
    //   //     }
    //   //     return true;
    //   //   })
    //     // }
    //     // onDelete={async (_files) => {
    //     //   console.log(_files)
    //     //   await Promise.all(_files.map(async (file) => {
    //     //     // if(job?.id) await removeFile({args: {project: job?.id, id: file._id}})
    //     //   }))

    //     // }}
    //     // onUpload={(files) => {
    //     //   fileActions.addFilesToJob(job_id, files).then(async (result) => {
    //     //     console.log("Upload result", result)
    //     //     await refetch(query.projects({where: {id: job_id}}))
    //     //   })
    //     // }}
    //     // onEdit={(files) => {
    //     //   openDialog(true)
    //     //   setShowFiles(files)
    //     // }}
    //     // onView={(files) => {
    //     //   openDialog(true)
    //     //   setShowFiles(files)
    //     // }}
    //     // onChange={(files) => setFiles(files)}
    //     // jobId={job_id} />)
    // },
    {
      title: "Project board",
      component: <Kanban 
      onDrag={(result) => {
        console.log(result.destination?.droppableId)
        if(result.destination?.droppableId != undefined){
          let f = files.slice()
          let f_ix = f.map((x) => x.id).indexOf(result.draggableId)
          f[f_ix].status = STATUS[parseInt(result.destination?.droppableId || '')]
          setFiles(f)

          const loaded = UseLoading(result.draggableId)

          // updateFile({args: {id: result.draggableId, status: STATUS[parseInt(result.destination?.droppableId)]}}).then(() => {
           
          //   loaded()
          //   setLoadingFiles(f)
          // })
        

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
        ttl: x == "Finished" ? 14 * 24 * 60 * 60 * 1000 : undefined,
        menu: [
          {label: "Archive all cards", onClick:() => {}},
          {label: "Column Settings", onClick:() => {
            showKanbanMenu(true)
            setSelectedColumn(x)
          }}
        ],
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
    if(jobParam){
    /* utils.job.getDetails(props.match.params.job).then((job) => {
        console.log("JOB", job)
        setJob(job[0])
      })
*/

      // utils.job.getFiles(props.match.params.job)
    }
  }, [jobParam]) 





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
        gap="xsmall"
        direction="column"
        round="xsmall"
        className="job-one-container" style={{flex: 1, display: 'flex'}}>
          <Box 
            round="xsmall"
            background="accent-1"
            pad={{left: 'small'}}
            direction="row"
            justify="between">
            <Heading level='4' margin="small">{job?.id} - {job?.name || "Job Title"}</Heading>
            
            <Box gap="xsmall" direction="row">
              <Button
                onClick={() => setSelectedTab(0)}
                style={{borderBottom: selectedTab == 0 ? '3px solid #E75D3D' : undefined, padding: 8}}
                plain
                 hoverIndicator
                 label="Files"/>
              <Button 
                onClick={() => setSelectedTab(1)}
                style={{borderBottom: selectedTab == 1 ? '3px solid #E75D3D' : undefined, padding: 8}}
                plain
                hoverIndicator 
                label="Project board" />
            </Box>
          </Box>
          <FileDialog
              open={dialogOpen}
              onSubmit={async (_files: any[]) => {
                console.log(_files)
                if(_files.length == 1){
                  let file = _files[0]

                  if(file.id){
                    const loaded = UseLoading(file.id);

                    // updateFile({args: {id: file.id, name: file.name || '', status: file.status || ''}}).then(({item}) => {
                    //   console.log(item)

                    //   let f = files?.slice()
                    //   let ix = f.map((x: any) => x.id).indexOf(file.id)

                    //   item.id = file.id;

                    //   if(ix > -1){
                    //     f[ix] = {
                    //       ...item
                    //     }
                    //   }

                    //   loaded()
                    // })
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
                  let ids = _files.map((x) => x.id)
                  // const results = await updateFiles({args: {ids: ids, status: _files[0].status}})

                  // console.log(results)


                  // const results = await Promise.all(_files.map(async (file :any) => {
                  //   await updateFile({args: {id: file.id, status: file.status}})
                  // }))

               
                }

              }}
              onClose={() => {
                console.log("CLose")
                openDialog(false)
                setShowFiles([])
              }}
              files={showFiles} 
              job={job?.id} />


          <Box round="xsmall" flex background="neutral-1">
            <Box
              height="100%"
              flex>
            {_tabs[selectedTab].component}
            </Box>
        
          </Box>
         
         <KanbanModal 
            column={selectedColumn}
            open={kanbanMenuVisible} 
            onClose={() => showKanbanMenu(false)}/>
  
			</Box>
		);
	
}

// export default connect((state: StoreState) => ({
//   token: state.auth.token
// }))(FocusedJob);
