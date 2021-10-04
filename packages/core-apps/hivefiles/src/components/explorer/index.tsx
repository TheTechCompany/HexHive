import React, { useEffect, useState, useCallback } from 'react';
import { Text, Box, Collapsible, Spinner } from 'grommet'
import { FileExplorer } from '@hexhive/ui';
import { gql, useQuery, useApolloClient, ApolloClient, InMemoryCache } from '@apollo/client';
import { mutation, useMutation } from '@hexhive/client';
import { useMemo } from 'react';
import { uploadFiles } from '../../actions';
import { Folder, Download, CloudComputer, Inspect } from 'grommet-icons';
import { FolderModal } from '../../components/folder-modal';
import { ConvertModal } from '../../components/convert-modal';
import {  GLBPreview } from './previews/GLB'
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { PDFPreview } from './previews/PDF';
import { RouteComponentProps } from 'react-router-dom';
import { Duration, differenceInSeconds, intervalToDuration, formatDuration } from 'date-fns'
import { addFolder, runWorkflow } from '../../actions/filesystem';
import { useAuth } from '@hexhive/auth-ui';

export const Explorer: React.FC<{
	parentId?: string;
	onNavigate: (path: {id: string, path: string}) => void;
	apolloClient?: ApolloClient<InMemoryCache>
}> = ({
	onNavigate,
	parentId,
	apolloClient
}) => {
    const { activeUser } = useAuth()
    const [ inspector, setInspector ] = useState<boolean>(false)


    console.log(parentId)
    const exploreFolder = (folderId: string) => {

        console.log("EXPLORE", folderId)
        if (folderId && folderId != "null") {
			onNavigate({id: folderId, path: `/explore/${folderId}`})
        } else {
            onNavigate({id: undefined, path: `/`})
        }
    }


    const client = apolloClient || useApolloClient()

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
    }
    // {
    //     key: "Convert",
    //     icon: <CloudComputer />,
    //     onClick: () => openConvertModal(true),
    //     disabled: () => {
    //         return selected.length < 1
    //     }
    //}
]
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
        hiveFiles(where: ${parentId && parentId != "null" ? `{id: "${parentId}"}` : `{parent: null }`}){
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
    `, { fetchPolicy: 'no-cache', client: apolloClient})

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
      

    }


    useEffect(() => {
    
        fetchFiles();

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
            console.log("Uploading with slug", parentId) //ref.current.id)
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
            }, parentId).then((response) => {
                console.log(response)
                fetchFiles()
            })
    }
    
    const getDuration = (start: string, end?: string) => {
       
        let dur = intervalToDuration({
            start: new Date(start || new Date()),
            end: new Date(end || new Date())
        })

        return formatDuration(dur)
    }

    return (
        <Box
            round="xsmall"
            flex>
            <FolderModal
                onSubmit={(folder) => {
                    newFolder({ args: { organisation: (activeUser as any)?.organisation, name: folder.name, cwd: parentId && parentId != "null" ? parentId : undefined } }).then((resp) => {
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
                    console.log("Crums", breadcrumbs, crumb)
                    if(breadcrumbs.map((x) => x.id).indexOf(crumb.id) == 1){
                        exploreFolder("null")
                    }else{
                    exploreFolder(crumb.id)
          
                    }
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