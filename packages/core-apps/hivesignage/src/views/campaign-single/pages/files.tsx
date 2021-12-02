import React, { useCallback, useContext, useState } from 'react';
import { uploadCampaignAssets } from '../../../api/campaign';

import { Box, List, Meter, Text } from 'grommet'
import { useDropzone } from 'react-dropzone'
import { UploadPlaceholder } from '../../../components/upload-placeholder';
import { CampaignSingleContext } from '../context';

export const FilesPage = (props: any) => {

	const {	campaign, files, refresh } = useContext(CampaignSingleContext);

	const [ loadingPercent, setLoadingPercent ] = useState<number>(0);
	const [ uploading, setUploading ] = useState<any[]>([])

	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		console.log(acceptedFiles)
		setUploading(acceptedFiles.map((file: File) => ({
			...file,
			path: `/${file.name}`
		})))
		uploadCampaignAssets(campaign.id, acceptedFiles, (percent) => {
			setLoadingPercent(percent)
		}).then(() => {
			// setFiles(acceptedFiles)
			setLoadingPercent(0)
			setUploading([])

			refresh()
		})

	}, [])


	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	  
	
	return (
		<Box {...getRootProps() as any} overflow="scroll" flex>
			{uploading.length > 0 && (<Meter  max={100} size="full" thickness="xsmall" type="bar" value={loadingPercent} />)}
			<input {...getInputProps() as any} />

			{files.length > 0  ? (
				<List data={files} primaryKey="path">
					{(datum) => (
						<Box color={uploading && "gray"} direction="row">
							<Text>{datum.path}</Text>
						</Box>
					)}
				</List>
			): (<UploadPlaceholder />)}
		</Box>
	)
}