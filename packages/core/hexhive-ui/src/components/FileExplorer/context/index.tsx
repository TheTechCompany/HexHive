import React from 'react';
import { useContext } from 'react';
import { IAction } from '../types/action';
import { IFile } from '../types/file';

export interface IFileExplorerContext {
    files?: IFile[]
    location?: string;
    selectFile?: (file?: IFile) => void;
    view?: string;
    setView?: (view: string) => void;

    actions?: IAction[]
}

export const FileExplorerContext = React.createContext<IFileExplorerContext>({})

export const useFileExplorer = () => useContext(FileExplorerContext)