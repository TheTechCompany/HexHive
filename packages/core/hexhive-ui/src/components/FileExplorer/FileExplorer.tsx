import { Box, Button, Layer } from 'grommet'
import { Apps, AppsRounded, DownloadOption, FormFolder, List, Update, UploadOption } from 'grommet-icons'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { Breadcrumbs } from './components/breadcrumbs'
import { ActionHeader } from './components/header'
import { PreviewDrawer } from './components/preview-drawer'
import { FileExplorerContext } from './context'
import { DEFAULT_ICONS } from './defaults/defaultIcons'
import { FolderModal } from './modals'
import { IAction } from './types/action'
import { IFile } from './types/file'
import { humanFileSize } from './utils'
import { GridView } from './views/grid'
import { ListView } from './views/list'
import { ThumbnailView } from './views/thumbnail'

import { useDropzone } from 'react-dropzone'
import { MissingPreview } from './components/missing-preview'
import { UploadDrawer } from './components/upload-drawer'
import _ from 'lodash'
import { history as historyRef, listenHistory } from './context/history'

export interface FileExplorerProps {
    files?: IFile[]

    uploading?: {name?: string, percent?: number}[]

    previewEngines?: {filetype: string, component: React.FC<{file: any}>}[];
    breadcrumbs: {name: string, id: string}[]

    actions?: IAction[];
    
    onDrop: (files: File[]) => void;
    onBreadcrumbClick: (crumb: {name: string, id: string}) => void;
    onClick?: (item: IFile) => void;

    onNavigate: (id: string) => void;
    selected?: string[];
    onSelect?: (id: string) => void;
    onDeselect?: (id: string) => void;
}

export const FileExplorer : React.FC<FileExplorerProps> = (props) => {
    
//    console.log("Histroy",  historyRef.index, historyRef.)
    const modes = [{key: 'list', icon: <List />}, {key: 'thumbnail', icon: <AppsRounded />}, {key: 'grid', icon: <Apps />}];

    const [navigationHistory, setNavigationHistory] = useState<{path: {name: string, id: string}[]}[]>([])
    const [ currentPath, setCurrentPath ] = useState<number>(-1)

    const [ view, setView ] = useState<string>('list');

    useEffect(() => {
        if(currentPath > -1 && !_.isEqual(props.breadcrumbs, navigationHistory[currentPath].path)){
            let history = navigationHistory.slice()
            history.push({path: props.breadcrumbs})
            setCurrentPath(history.length - 1)
            setNavigationHistory(history)
        }
    }, [props.breadcrumbs])

    useEffect(() => {
        listenHistory((location) => {
            console.log("location", location)

            props.onBreadcrumbClick({name: '', id: location.id})
        })
    }, [])

    const views : {[key: string]: JSX.Element} = {
        list: <ListView />,
        grid: <GridView />,
        thumbnail: <ThumbnailView />
    }

    const onNavigate = (id: string) => {
        historyRef.push(`/explore/${id}`, {id: id})
    }

    const [ preview, setPreview ] = useState<IFile  | undefined | null>(null)

    const goPrev = () => {
        historyRef.back()
        // onNavigate()
        // let history = navigationHistory.slice()
        // let prev = history[currentPath - 2]
        // setCurrentPath(currentPath - 1)
        // props.onBreadcrumbClick(prev.path[prev.path.length - 1])
    }

    const goNext = () => {
        historyRef.forward()
        // onNavigate()
        // let history = navigationHistory.slice()
        // let next = history[currentPath]
        // setCurrentPath(currentPath + 1)
        // props.onBreadcrumbClick(next.path[next.path.length - 1])
    }

    const formatFile = (file: IFile) => {
        return {
            ...file,
            icon: DEFAULT_ICONS(file)
        }
    }

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles)
        props.onDrop(acceptedFiles)
    }, [])
    
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, noClick: true})
    

    return (
        <FileExplorerContext.Provider value={{
            navigate: onNavigate,
            files: props.files?.map(formatFile) || [],
            uploading: props.uploading || [],
            selected: props.selected,
            clickFile: props.onClick,
            selectFile: (id, checked) => id && ((checked) ? props.onSelect?.(id) : props.onDeselect?.(id)),
            view, 
            setView,
            actions: props.actions || [{key: 'download', icon: <DownloadOption />, disabled: (state) => (state.files?.length || 0) < 2}, {key: 'upload', icon: <UploadOption />}, {key: 'convert', icon: <Update />}, {key: 'organise', icon: <FormFolder />}]
        }}>
            <FolderModal open={false} />
            <Box 
                overflow={"hidden"}
                elevation="small"
                focusIndicator={false}
                round={'xsmall'}
                flex
                style={{position: 'relative'}}
                background="neutral-1"
                direction="column">
                <ActionHeader
                    onNext={goNext}
                    onPrev={goPrev}/>
                <Box   
                    pad={{horizontal: 'xsmall'}}
                    margin={{top: 'xsmall'}}
                    align="center"
                    justify="between"
                    direction="row">
                <Breadcrumbs 
                    onBreadcrumbClick={props.onBreadcrumbClick}
                    breadcrumbs={props.breadcrumbs || []} />

                    <Box 
                        round={{size: 'small'}}
                        background="brand" 
                        direction="row" 
                        align="center">
                    {modes.map((mode) => (
                        <Button 
                            color="brand"
                            plain
                            style={{padding: 4}}
                            active={view == mode.key}
                            size="small" 
                            icon={React.cloneElement(mode.icon, {size: '20px'})} 
                            onClick={() => setView(mode.key)} />
                    ))}
                    </Box>
                </Box>
                
                <Box 
                    focusIndicator={false}
                    {...getRootProps()}
                    border={isDragActive ? {size: 'small', color: 'accent-2'} : undefined}
                    overflow="scroll"
                    pad="xsmall"
                    background="inherit"
                    flex>
                    <input {...getInputProps()} />
                    {props.files?.length == 1 && !props.files?.[0]?.isFolder ? props.previewEngines?.find((a) => a.filetype == (props.files?.[0]?.name?.split('.')[1] || 'glb'))?.component({file: props.files?.[0]}) || <MissingPreview file={props.files?.[0]} /> : views[view]}
                </Box>
                {(props.uploading || []).length > 0 && <UploadDrawer />}

                {preview ? (<PreviewDrawer data={preview} />) : null}
            </Box>
        </FileExplorerContext.Provider>
    )
}