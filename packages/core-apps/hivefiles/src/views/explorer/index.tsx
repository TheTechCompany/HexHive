import React, { useEffect, useState, useCallback } from 'react';
import { Text, Box, Collapsible, Spinner } from 'grommet'
import { FileExplorer } from '@hexhive/ui';
import { gql, useQuery, useApolloClient } from '@apollo/client';
import { mutation, useMutation } from '@hexhive/client';
import { useMemo } from 'react';
import { uploadFiles } from '../../actions';
import { Folder, Download, CloudComputer, Inspect } from 'grommet-icons';
import { FolderModal } from '../../components/folder-modal';
import { ConvertModal } from '../../components/convert-modal';
import { SidePane } from './side-pane';
import {  GLBPreview } from './previews/GLB'
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { PDFPreview } from './previews/PDF';
import { RouteComponentProps } from 'react-router-dom';
import { Duration, differenceInSeconds, intervalToDuration, formatDuration } from 'date-fns'
import { addFolder, runWorkflow } from '../../actions/filesystem';

export const Explorer: React.FC<RouteComponentProps<{id: string}>> = (props) => {
    const parentRef = useRef<{id?: string}>({id: undefined})
    const [ inspector, setInspector ] = useState<boolean>(false)
    const [ parentId, _setParentId ] = useState<string>(undefined)

    const setParentId = (id: string) => {
        parentRef.current.id = id;
        _setParentId(id)
    }

    console.log(parentId)
    const exploreFolder = (folderId: string) => {
        setParentId(folderId)

        console.log("EXPLORE", folderId)
        if (folderId && folderId != "null") {
            props.history.push(`/explore/${folderId}`)
        } else {
            props.history.push(`/`)
        }
    }

    useEffect(() => {
        console.log(props.match.params.id)
        if(props.match.params.id) setParentId(props.match.params.id)
    }, [props.match.params.id])
    const client = useApolloClient()

    const toggleInspector = () => {
        setInspector(!inspector)
    }
    const actions = [
    {
        key: "Inspector",
        icon: <Inspect />,
        onClick: () => toggleInspector()
    },
    {
        key: "Create Folder",
        icon: <Folder />,
        onClick: () => openFolderModal(true)
    }, {
        key: "Download",
        icon: <Download />,
        disabled: () => {
            return selected.length < 1
        }
    }, {
        key: "Convert",
        icon: <CloudComputer />,
        onClick: () => openConvertModal(true),
        disabled: () => {
            return selected.length < 1
        }
    }]
    const [selected, setSelected] = useState<string[]>([])

    const [folderModal, openFolderModal] = useState<boolean>(false);
    const [convertModal, openConvertModal] = useState<boolean>(false);

    // const [ files, setFiles ] = useState<any[]>([])

    const [breadcrumb, setBreadcrumb] = useState<{ ids: string, names: string }>({ ids: '', names: '' })
    // const files = query.hiveFiles({where: {fs: {name: 'Shared FS'}}})

    const uploading = useRef<{loading?: {id?: string, name?: string, percent?: number}[]}>({loading: []})

    const [ _uploading, _setUploading ] = useState<any[]>();

    const setUploading = (items: any[]) => {
        uploading.current.loading = items;
        _setUploading(items)
    }
    
    const [ newFolder, newFolderInfo ] = useMutation(addFolder, {
        onCompleted(data) { },
        onError(error) { },
        refetchQueries: [],
        awaitRefetchQueries: true,
        suspense: false,
    })

    const [ startFlow, startFlowInfo ] = useMutation(runWorkflow, 
        {
            onCompleted(data) { },
            onError(error) { },
            refetchQueries: [],
            awaitRefetchQueries: true,
            suspense: false,
        })

    let query;

    const { data } = useQuery(gql`
      query GET_FILES {
        hiveFiles(where: ${parentId && parentId != "null" ? `{id: "${parentId}"}` : `{fs: {name: "Shared FS"}, parent: null }`}){
            id
            name
            path
            mimetype
            size
            isFolder
            path_id
            cid
            conversions {
                createdAt
                completedAt

                pipeline {
                    id
                    name
                }
            }
            views {
                id
                cid
                name
            }
            children {
                id
                name
                mimetype
                size

                isFolder
                path
                cid
                views {
                    id
                    cid
                    name
                }
                conversions {
                    createdAt
                    startedAt
                    completedAt
    
                    pipeline {
                        id
                        name
                    }
                }
            }
        }

      }
    `, { fetchPolicy: 'no-cache' })

    const files = useMemo(() => {
        return parentId && parentId != "null" ? 
            ( data?.hiveFiles?.[0]?.isFolder ? 
                    data?.hiveFiles?.[0]?.children || [] : 
                (data?.hiveFiles?.[0] ? 
                    data?.hiveFiles?.[0] : undefined )) 
            : data?.hiveFiles

    }, [data, parentId])

    console.log(files)

    const isFolder = data?.hiveFiles?.[0]?.isFolder;

    const fetchFiles = () => {
        client.refetchQueries({ include: ["GET_FILES"] })
        //     if(!props.match.params.id){
        //         const {data} = useQuery(gql`
        //         query Q {

        //           fileSystems(where: {name: "Shared FS"}){
        //             files(where: {parent: null}){
        //               id
        //               name
        //               path
        //               isFolder
        //               path_id
        //               children {
        //                   id
        //                   name
        //                   isFolder
        //                   path
        //               }
        //             }
        //           }
        //         }
        //       `)
        //       console.log(data)
        //     //   .then((data) => {
        //     //     setFiles(data.data.fileSystems[0].files)
        //     //     console.log(data)
        //     //   })    
        //   }else{
        //       const { data } = useQuery(gql`
        //       query Q {
        //           hiveFiles(where: {id: "${props.match.params.id}"}){
        //               id
        //               name
        //               path
        //               isFolder
        //               path_id
        //               children {
        //                   id
        //                   name
        //                   isFolder
        //                   path
        //               }
        //           }

        //       }
        //     `)
        //     console.log(data)
        // .then((data) => {
        //     setBreadcrumb({names: data.data.hiveFiles[0].path, ids: data.data.hiveFiles[0].path_id})
        //   setFiles(data.data.hiveFiles[0].children)
        //   console.log(data)
        // })  

    }


    useEffect(() => {
        //   client.mutate({mutation: gql`
        //   mutation M {
        //     updateFileSystems(where: {name: "Shared FS"}, update: {
        //       files: {
        //         where: {node: {name: "File"}}
        //         disconnect: {parent: {where: {node: {name: "Folder"}}}}
        //       }
        //     })
        //   }
        // `})
        //(where: {parent: {name: "Second Folder"}})

        fetchFiles();

        // addFileInFolder().then((fs) => console.log(fs))
        // moveFile().then((fs) => console.log(fs))
        // addFolder().then((fs) => console.log(fs.item))
        // addFile().then((fs) => console.log(fs))
    }, [parentId])

    const breadcrumbs = useMemo(() => {

        if (data?.hiveFiles?.[0] && parentId && parentId != "null") {
            let file = data?.hiveFiles?.[0];
            let crumb_name = file.path.split('/')
            let crumb_id = file.path_id.split('/')

            return crumb_name.map((x, ix) => ({ id: crumb_id[ix], name: x }))
        } else {
            return [{ id: "null", name: "/Shared FS" }]
        }
        return []
    }, [data])

    const onDrop = (files: File[]) => {
   
            let ids = breadcrumb.ids.split('/')
            console.log(ids)
            let uploads = uploading.current.loading.slice()
            
            let id = nanoid();
            uploads = uploads.concat(files.map((x) => ({id: id, name: x.name, percent: 0})))
            console.log("Uploading with slug", parentRef.current.id)
            setUploading(uploads)
            uploadFiles(files, (progress) => {
                 let u = uploading.current.loading.slice()
                 u = u.map((x) => {
                     if(x.id === id){
                         x.percent = progress * 100;
                     }
                     return x;
                 })
                 setUploading(u)
            }, parentRef.current.id).then((response) => {
                console.log(response)
                fetchFiles()
            })
    }
    
    const getDuration = (start: string, end?: string) => {
        let dur = intervalToDuration({
            start: new Date(start),
            end: new Date(end || new Date())
        })

        return formatDuration(dur)
    }

    return (
        <Box
            round="xsmall"
            flex
            pad="xsmall">
            <FolderModal
                onSubmit={(folder) => {
                    newFolder({ args: { name: folder.name, cwd: parentId && parentId != "null" ? parentId : undefined } }).then((resp) => {
                        console.log("Folder", resp)
                        fetchFiles()

                    })
                }}
                onClose={() => openFolderModal(false)}
                open={folderModal} />
            <ConvertModal
                onSubmit={(folder) => {
                    console.log(folder)
                    startFlow({args: {
                        files: files?.filter((a) => selected?.indexOf(a.id) > -1),
                        pipeline: folder.workflow
                    }}).then(() => {
                        openConvertModal(false)
                    })
                }}
                files={Array.isArray(files) ? files?.filter((a) => selected?.indexOf(a?.id) > -1) : [files]}
                onClose={() => openConvertModal(false)}
                open={convertModal} />
            <Box
                gap="xsmall"
                round="xsmall"
                flex
                direction="row">
            <FileExplorer
                onNavigate={(id) => {

                }}
                uploading={_uploading}
                previewEngines={[
                    {filetype: 'glb', component: GLBPreview},
                    {filetype: 'pdf', component: PDFPreview}
                ]}
                selected={selected}
                onSelect={(id) => {
                    setSelected([...selected, id])
                }}
                onDeselect={(id) => {
                    let s = selected.slice()
                    s.splice(s.indexOf(id), 1)
                    setSelected(s)
                }}
                actions={actions}
                onDrop={onDrop}
                onBreadcrumbClick={(crumb) => {
                    exploreFolder(crumb.id)
          
                    setSelected([])
                }}
                breadcrumbs={breadcrumbs}
    
                onClick={(file) => {
                    setSelected([])
                    exploreFolder(file.id)
                }}
                files={files} />
                <Collapsible 
                    direction="horizontal"
                    open={inspector}>
                    <Box 
                        gap="xsmall"
                        overflow="scroll" 
                        pad="xsmall" 
                        background="neutral-1" 
                        round="xsmall" 
                        elevation="small" 
                        width="small" 
                        height="100%">
                        {(Array.isArray(files) ? files?.filter((a) => selected.indexOf(a.id) > -1) : files ? [files] : []).map((file) => (
                            <Box overflow="hidden" round="xsmall" background="neutral-2" elevation="small">
                                <Box direction="row" background="accent-2" pad="xsmall"><Text>{file.name}</Text></Box>
                                {file.conversions.map((x) => (
                                    <Box align="center" direction="row">
                                      {!x.completedAt &&  <Spinner size="small" />}
                                    <Box>
                                        <Text size="small">{x.pipeline?.name}</Text>
                                        <Text size="xsmall">{getDuration(x.startedAt, x.completedAt)}</Text>
                                    </Box>
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Collapsible>
           
            </Box>
         
            {/* <BabylonViewer
          data={'2CylinderEngine.glb'}
          rootUrl={'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/2CylinderEngine/glTF-Binary/'} /> */}
        </Box>
    )
}