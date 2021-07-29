import React, { useEffect, useState } from 'react';
import ReactDocViewer, { IDocument, DocViewerRenderers } from 'react-doc-viewer'

export interface FileViewerProps {
    documents?: IDocument[];

    documentUrl?: string;

    documentType?: string;
}

export const DocViewer : React.FC<FileViewerProps> = (props) => {

    const [ documents, setDocuments ] = useState<IDocument[]>([])

    useEffect(() => {
        if(props.documents){
            setDocuments(props.documents)
        }
    }, [props.documents])

    useEffect(() => {
        if(props.documentUrl){
            setDocuments([{uri: props.documentUrl, fileType: props.documentType}])
        }
    }, [props.documentUrl, props.documentUrl])

    return (props.documents || props.documentUrl) ? (
        <ReactDocViewer
            config={{
                header: {
                    disableFileName: true,
                    disableHeader: true,
                    overrideComponent: () => <></>
                }
            }}
            documents={documents}
            pluginRenderers={DocViewerRenderers} />
    ) : null
}

export interface FileThumbnailProps {

}

export const FileThumbnail : React.FC<FileViewerProps> = (props) => {
    return (
        <ReactDocViewer
            config={{
                header: {
                    disableHeader: true,
                    disableFileName: true,
                    overrideComponent: () => <></>
                   }
            }}
            documents={props.documents || []}
            pluginRenderers={DocViewerRenderers} />
    )
}