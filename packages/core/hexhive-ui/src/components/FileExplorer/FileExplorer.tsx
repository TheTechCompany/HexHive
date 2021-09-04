import { Box, Layer } from 'grommet'
import { DownloadOption, FormFolder, Update, UploadOption } from 'grommet-icons'
import React from 'react'
import { useState } from 'react'
import { ActionHeader } from './components/header'
import { PreviewDrawer } from './components/preview-drawer'
import { FileExplorerContext } from './context'
import { DEFAULT_ICONS } from './defaults/defaultIcons'
import { IAction } from './types/action'
import { IFile } from './types/file'
import { humanFileSize } from './utils'
import { GridView } from './views/grid'
import { ListView } from './views/list'
import { ThumbnailView } from './views/thumbnail'

export interface FileExplorerProps {
    files?: IFile[]

    actions?: IAction[];
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

    return (
        <FileExplorerContext.Provider value={{
            files: props.files?.map(formatFile) || [],
            selectFile: (file?: IFile) => setPreview(file),
            view, 
            setView,
            actions: props.actions || [{key: 'download', icon: <DownloadOption />, disabled: (state) => (state.files?.length || 0) < 2}, {key: 'upload', icon: <UploadOption />}, {key: 'convert', icon: <Update />}, {key: 'organise', icon: <FormFolder />}]
        }}>
            <Box 
                background="neutral-2"
                direction="column">
                <ActionHeader />
                <Box 
                    overflow="scroll"
                    pad="xsmall"
                    background="neutral-2"
                    flex>
                    {views[view]}
                </Box>
                {preview ? (<PreviewDrawer data={preview} />) : null}
            </Box>
        </FileExplorerContext.Provider>
    )
}