import React from 'react';
import { Previous } from 'grommet-icons'
import { BaseModal } from '../modals/base-modal'
import { Breadcrumbs } from './components/breadcrumbs';
import { FileExplorerContext } from './context';
import { DEFAULT_ICONS } from './defaults/defaultIcons';
import { IFile } from './types/file';
import { ListView } from './views/list';
import { Box, Button } from 'grommet';

export interface FileExplorerModalProps {
    open: boolean;
    onClose?: () => void;
    files?: IFile[];

    onSubmit?: () => void;

    cwd?: {name: string, id: string}[];
    selected?: string[]
    onClick?: (file: IFile) => void;
    onSelect?: (id: string) => void;
    onDeselect?: (id: string) => void;
    onBack?: () => void;
}
export const FileExplorerModal : React.FC<FileExplorerModalProps> = ( props ) => {
  
    const formatFile = (file: IFile) => {
        return {
            ...file,
            icon: DEFAULT_ICONS(file)
        }
    }

    
    return (
        <FileExplorerContext.Provider value={{
            files: props.files?.map(formatFile) || [],
            selected: props.selected,
            clickFile: props.onClick,
            selectFile: (id, checked) => id && ((checked) ? props.onSelect?.(id) : props.onDeselect?.(id)),
            
            // actions: props.actions || [{key: 'download', icon: <DownloadOption />, disabled: (state) => (state.files?.length || 0) < 2}, {key: 'upload', icon: <UploadOption />}, {key: 'convert', icon: <Update />}, {key: 'organise', icon: <FormFolder />}]
        }}>
        <BaseModal 
          
            title="File Explorer"
            open={props.open}
            onSubmit={props.onSubmit}
            onClose={props.onClose}>
           
           <Box 
             width={{min: "large"}}
            direction="row"
            align="center">
            <Button onClick={props.onBack} icon={<Previous size="20px" />} />
            <Breadcrumbs 
                breadcrumbs={props.cwd || []}
                onBreadcrumbClick={(crumb) => {

                }}
                />
            </Box>
            <Box
               height={{min: '33vh'}}
                >
                <ListView />
            </Box>


        </BaseModal>
        </FileExplorerContext.Provider>
    )
}