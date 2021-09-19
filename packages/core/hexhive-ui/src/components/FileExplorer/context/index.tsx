import React from 'react';
import { useContext } from 'react';
import { IAction } from '../types/action';
import { IFile } from '../types/file';

export interface IFileExplorerContext {
    files?: IFile[]
    uploading?: {name?: string, percent?: number}[]
    location?: string;
    selected?: string[];
    clickFile?: (file: IFile) => void;
    selectFile?: (file?: string, checked?: boolean) => void;
    view?: string;
    setView?: (view: string) => void;

    actions?: IAction[]
}

export const FileExplorerContext = React.createContext<IFileExplorerContext>({})

export const useFileExplorer = () => useContext(FileExplorerContext)