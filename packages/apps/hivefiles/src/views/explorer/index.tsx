import React, { useEffect, useState } from 'react';
import { Text, Box } from 'grommet'
import { FileExplorer } from '@hexhive/ui';
import { gql, useQuery, useApolloClient } from '@apollo/client';
import { mutation, useMutation } from '@hexhive/client';
import { useMemo } from 'react';
import { uploadFiles } from '../../actions';
import { Folder, Download, CloudComputer } from 'grommet-icons';
import { FolderModal } from '../../components/folder-modal';
import { ConvertModal } from '../../components/convert-modal';
import { SidePane } from './side-pane';

export const Explorer: React.FC<any> = (props) => {

    const client = useApolloClient()

    const actions = [{
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


    const [moveFile, moveInfo] = useMutation((mutation) => {
        const fs = mutation.updateHiveFiles({
            where: { name: 'Second Folder' },
            disconnect: {
                parent: { where: { node: { name: 'Folder' } } }
            },
            connect: {
                parent: { where: { node: { name: "FoldersInFolders" } } }
            }
        })

        return {
            item: {
                ...fs.hiveFiles[0]
            }
        }
    })

    const [addFolder, addFolderInfo] = useMutation((mutation, args: { name: string, cwd: string }) => {
        let fs;
        if (args.cwd) {
            console.log(args.cwd)
            let file = mutation.updateHiveFiles({
                where: { id: args.cwd },
                create: {
                    children: [{ node: { name: args.name, isFolder: true } }]
                    //   files: [{where: {node: {id: args.cwd}}, update: {
                    //       node: {children: [{create: [{node: {name: args.name, isFolder: true}}]}]}
                    //   }


                    //   [{node: {name: args.name, isFolder: true}}]
                }
            })
            return {
                item: {
                    ...file.hiveFiles[0]
                }
            }

        } else {
            fs = mutation.updateFileSystems({
                where: { name: 'Shared FS' }, create: {
                    files: [{ node: { name: args.name, isFolder: true } }]
                }
            })
            return {
                item: {
                    ...fs.fileSystems[0]
                }
            }
        }

    },
        {
            onCompleted(data) { },
            onError(error) { },
            refetchQueries: [],
            awaitRefetchQueries: true,
            suspense: false,
        })

    const [ runWorkflow, runInfo ] = useMutation((mutation, args: {files: string[], pipeline: string}) => {
        const item = mutation.convertFiles({
            files: args.files,
            pipeline: args.pipeline
        })
        return {
            item: {
                ...item
            },
            err: null
        }
    }, {
        suspense: false,
        awaitRefetchQueries: true
    })

    let query;

    const { data } = useQuery(gql`
      query GET_FILES {
        hiveFiles(where: ${props.match.params.id ? `{id: "${props.match.params.id}"}` : `{parent: null, fs: {name: "Shared FS"} }`}){
            id
            name
            path
            isFolder
            path_id
            children {
                id
                name
                isFolder
                path
            }
        }

      }
    `, { fetchPolicy: 'no-cache' })

    const files = useMemo(() => {
        return props.match.params.id ? data?.hiveFiles?.[0]?.children || [] : data?.hiveFiles
    }, [data, props.match.params.id])

    console.log(data)
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
        console.log(props.match.params)
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
    }, [props.match.params.id])

    const breadcrumbs = useMemo(() => {

        if (data?.hiveFiles?.[0] && props.match.params.id) {
            let file = data?.hiveFiles?.[0];
            let crumb_name = file.path.split('/')
            let crumb_id = file.path_id.split('/')

            return crumb_name.map((x, ix) => ({ id: crumb_id[ix], name: x }))
        } else {
            return [{ id: "null", name: "/Shared FS" }]
        }
        return []
    }, [data])

    const onDrop = (files) => {
            let ids = breadcrumb.ids.split('/')
            console.log(ids)
            uploadFiles(files, props.match.params.id).then((response) => {
                console.log(response)
                fetchFiles()
            })
        }
    

    return (
        <Box
            round="xsmall"
            flex
            pad="xsmall">
            <FolderModal
                onSubmit={(folder) => {
                    addFolder({ args: { name: folder.name, cwd: props.match.params.id } }).then((resp) => {
                        console.log("Folder", resp)
                        fetchFiles()

                    })
                }}
                onClose={() => openFolderModal(false)}
                open={folderModal} />
            <ConvertModal
                onSubmit={(folder) => {
                    console.log(folder)
                    runWorkflow({args: {
                        files: selected,
                        pipeline: folder.workflow
                    }}).then(() => {
                        openConvertModal(false)
                    })
                }}
                files={files?.filter((a) => selected?.indexOf(a.id) > -1)}
                onClose={() => openConvertModal(false)}
                open={convertModal} />
            <Box
                round="xsmall"
                flex
                direction="row">
   <FileExplorer
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
                    if (crumb.id != "null") {
                        props.history.push(`/explore/${crumb.id}`)
                    } else {
                        props.history.push(`/`)
                    }
                    setSelected([])
                }}
                breadcrumbs={breadcrumbs}
                onClick={(file) => {
                    setSelected([])
                    props.history.push(`/explore/${file.id}`)
                }}
                files={files} />
                <SidePane
                    selected={files?.filter((a) => selected.indexOf(a.id) > -1)} />
            </Box>
         
            {/* <BabylonViewer
          data={'2CylinderEngine.glb'}
          rootUrl={'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/2CylinderEngine/glTF-Binary/'} /> */}
        </Box>
    )
}