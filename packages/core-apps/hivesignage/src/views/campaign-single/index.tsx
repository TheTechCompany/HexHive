import { Box, List, Text } from 'grommet';
import React, {useCallback, useState} from 'react';
import { ScreenPreview } from '../../components/screen-preview';
import { Upload } from 'grommet-icons';
import { UploadPlaceholder } from '../../components/upload-placeholder';
import { useQuery } from '@hexhive-api/signage';
import { useDropzone } from 'react-dropzone';
import { uploadCampaignAssets } from '../../api/campaign';
import { useQuery as useApolloQuery, gql } from '@apollo/client';

export const CampaignSingle = (props) => {

	const query = useQuery()

	const campaign = query.campaigns({where: {id: props.match.params.id}})?.[0]

	// const [files, setFiles] = useState<any[]>([])

	const { data } = useApolloQuery(gql`
		query Q ($id: ID) {
			campaigns(where: {id: $id}) {
				id
				assets {
					name
					type
					cid
					path
				}
			}
		}
	`, {
		variables: {
			id: props.match.params.id,
		}
	})

	const files = data?.campaigns?.[0]?.assets || [];
	
	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		console.log(acceptedFiles)
		uploadCampaignAssets(props.match.params.id, acceptedFiles).then(() => {
			// setFiles(acceptedFiles)
		})

	}, [])

	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	  
	return (
		<Box 
			gap="xsmall"
			direction="row"
			round="xsmall"
			flex>
				
			<ScreenPreview
				previewUrl={files.length > 0 && `http://localhost:9009/api/campaign/${props.match.params.id}/preview/index.html`} />

			<Box
				overflow="hidden"
				round="xsmall"
				background="light-1"
				 flex>
				<Box pad="xsmall" background="accent-2">
					<Text>{campaign.name}</Text>
				</Box>
				<Box {...getRootProps() as any} overflow="scroll" flex>
					<input {...getInputProps() as any} />

					{files.length > 0 ? (
						<List data={files} primaryKey="path" />
					): (<UploadPlaceholder />)}
				</Box>
			</Box>
		</Box>
	)
}