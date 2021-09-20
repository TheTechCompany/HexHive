import { Box, Text } from 'grommet';
import * as Icons from 'grommet-icons'
import React from 'react';
import { DocViewer } from './DocViewer';


export interface FileViewerProps {
    files: {url?: string, mimeType?: string, id?: string, extension?: string}[]

    token?: string;
}

export const FileViewer: React.FC<FileViewerProps> = ({
    files = [],
    token
}) => {
    if (files && files.length == 1) {
        let file = files[0]
        let mimetype = file.mimeType ? file.mimeType : 'text/plain'
        console.log(file)
        let url = file.url // `${process.env.REACT_APP_API && process.env.REACT_APP_API.length > 0 ? process.env.REACT_APP_API : window.location.origin}/api/files/${file.id}${file?.extension ? file?.extension : ''}?access_token=${token}`;

        let main = mimetype.split('/')[0];
        let sub = mimetype.split('/')[1];

        switch (main) {
            case "video":
                return (
                    <video autoPlay={false} src={url} />
                );
            case "image":
                return (<img style={{ width: '100%' }} src={url} />)
            case "application":
                switch (sub) {
                    case "pdf":
                    case "word":
                    case "spreadsheet":
                    case "vnd.openxmlformats-officedocument.wordprocessingml.document":
                    case "vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                        console.log(url, `${main}/${sub}`)
                        return (
                            <DocViewer
                                documentUrl={url}
                                documentType={`${main}/${sub}`} />

                        )
                    case "zip":
                    case "octet-stream":
                    case "x-zip-compressed":
                    case "x-rar-compressed":
                        return (
                        <Box flex align="center" justify="center">
                            <Icons.DocumentZip size="large" />
                        </Box>
                        );
                    default:
                        return null;
                }

            default:
                return null;
        }

    } else {
        return (
            <Box
                flex
                align="center"
                justify="center">
                <Icons.Multiple size="large" />
                <Text margin={{ top: 'small' }} size="medium">{files.length} files</Text>
            </Box>
        )
        //TODO render multi file placeholder
        return null;
    }
}