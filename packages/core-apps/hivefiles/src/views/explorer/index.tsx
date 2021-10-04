import React, { useEffect, useState, useCallback } from 'react';
import { Text, Box, Collapsible, Spinner } from 'grommet'
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
import { useAuth } from '@hexhive/auth-ui';
import { Explorer as FileExplorer } from '../../components/explorer'

export const Explorer: React.FC<RouteComponentProps<{id: string}>> = (props) => {
   
   
    const parentRef = useRef<{id?: string}>({id: undefined})
    const [ parentId, _setParentId ] = useState<string>(undefined)

    const setParentId = (id: string) => {
        parentRef.current.id = id;
        _setParentId(id)
    }

    useEffect(() => {
        console.log(props.match.params.id)
        if(props.match.params.id) setParentId(props.match.params.id)
    }, [props.match.params.id])

    return (
        <FileExplorer
            parentId={parentId} />
    )
}