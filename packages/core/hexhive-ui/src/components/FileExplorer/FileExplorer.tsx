import { Box, Layer } from 'grommet'
import { DownloadOption, FormFolder, Update, UploadOption } from 'grommet-icons'
import React, { useCallback } from 'react'
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

export interface FileExplorerProps {
    files?: IFile[]
    breadcrumbs: {name: string, id: string}[]
    onDrop: (files: File[]) => void;
    onBreadcrumbClick: (crumb: {name: string, id: string}) => void;
    onClick?: (item: IFile) => void;
    actions?: IAction[];

    selected?: string[];
    onSelect?: (id: string) => void;
    onDeselect?: (id: string) => void;
}

export const FileExplorer : React.FC<FileExplorerProps> = (props) => {
    const [ view, setView ] = useState<string>('list');
    const views : {[key: string]: JSX.Element} = {
        list: <ListView />,
        grid: <GridView />,
        thumbnail: <ThumbnailView />
    }

    const [ preview, setPreview ] = useState<IFile  | undefined | null>(null)


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
            files: props.files?.map(formatFile) || [],
            selected: props.selected,
            clickFile: props.onClick,
            selectFile: (id, checked) => id && ((checked) ? props.onSelect?.(id) : props.onDeselect?.(id)),
            view, 
            setView,
            actions: props.actions || [{key: 'download', icon: <DownloadOption />, disabled: (state) => (state.files?.length || 0) < 2}, {key: 'upload', icon: <UploadOption />}, {key: 'convert', icon: <Update />}, {key: 'organise', icon: <FormFolder />}]
        }}>
            <FolderModal open={false} />
            <Box 
                focusIndicator={false}
                round={'xsmall'}
                flex
                background="neutral-2"
                direction="column">
                <ActionHeader />
                <Breadcrumbs 
                    onBreadcrumbClick={props.onBreadcrumbClick}
                    breadcrumbs={props.breadcrumbs} />
                <Box 
                    focusIndicator={false}
                    {...getRootProps()}
                    border={isDragActive ? {size: 'small', color: 'accent-2'} : undefined}
                    overflow="scroll"
                    pad="xsmall"
                    background="neutral-2"
                    flex>
                    <input {...getInputProps()} />
                    {views[view]}
                </Box>
                {preview ? (<PreviewDrawer data={preview} />) : null}
            </Box>
        </FileExplorerContext.Provider>
    )
}