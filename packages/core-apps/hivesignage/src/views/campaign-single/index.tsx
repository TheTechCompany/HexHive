import { Box, List, Button, Text } from 'grommet';
import React, {useCallback, useState} from 'react';
import { ScreenPreview } from '../../components/screen-preview';
import { Upload, Analytics, Add, Document, Qr, MoreVertical} from 'grommet-icons';
import { UploadPlaceholder } from '../../components/upload-placeholder';
import { useMutation, useQuery } from '@hexhive-api/signage';
import { useDropzone } from 'react-dropzone';
import { uploadCampaignAssets } from '../../api/campaign';
import { useQuery as useApolloQuery, gql } from '@apollo/client';
import { CreateAnalyticModal } from '../../modals/create-analytic';
import { mutation } from '@hexhive/client';
import QRCode from 'qrcode.react'

export const CampaignSingle = (props) => {

	const [ view, setView ] = useState<'analytics' | 'files'>('files')
	const query = useQuery()

	const [ analyticModalOpen, setAnalyticModalOpen ] = useState(false)
	const [ selectedAnalytic, setSelectedAnalytic ] = useState(false)
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

				analytics {
					id
					name
					type
					data
				}
			}
		}
	`, {
		variables: {
			id: props.match.params.id,
		}
	})

	console.log(data)
	const files = data?.campaigns?.[0]?.assets || [];
	const analytics = data?.campaigns?.[0]?.analytics || [];
	
	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		console.log(acceptedFiles)
		uploadCampaignAssets(props.match.params.id, acceptedFiles).then(() => {
			// setFiles(acceptedFiles)
		})

	}, [])

	const [ createCampaignAnalytic, createAnalyticInfo ] = useMutation((mutation, args: {id?: string, name: string, type: string, data: string}) => {
		let update = undefined;

		if(args.id){
			update = {
					where: {node: {id: args.id}},
					update: {
						node: {
							name: args.name,
							type: args.type,
							data: args.data
						}
					}
				}
			
		}else{
			update = {
				create: [{
					node: {
						name: args.name,
						type: args.type,
						data: args.data,
					}
				}]
			}
		}
			
		
		const item = mutation.updateCampaigns({
			where: {id: props.match.params.id},
			update: {
				analytics: [update]
			}
		})
		return {
			item: {
				...item.campaigns?.[0]
			}
		}
	})
	const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

	  
	return (
		<Box 
			gap="xsmall"
			direction="row"
			round="xsmall"
			flex>

			<CreateAnalyticModal
				open={analyticModalOpen}
				selected={selectedAnalytic}
				onClose={() => {
					setAnalyticModalOpen(false)
				}}
				onSubmit={(analytic) => {
					createCampaignAnalytic({
						args: {
							id: analytic.id,
							name: analytic.name,
							type: analytic.type,
							data: analytic.data,
						}
					}).then(() => {
						setAnalyticModalOpen(false)

					})

				}}
				/>
				
			<ScreenPreview
				previewUrl={files.length > 0 && `http://localhost:9009/api/campaign/${props.match.params.id}/preview/index.html`} />

			<Box
				overflow="hidden"
				round="xsmall"
				background="light-1"
				 flex>
				<Box direction="row" justify="between" align="center" pad="xsmall" background="accent-2">
					<Text>{campaign.name}</Text>

					<Button 
						hoverIndicator 
						plain 
						onClick={() => setView(view === 'analytics' ? 'files' : 'analytics')}
						style={{padding: 6, borderRadius: 3}} 
						icon={view === 'files' ? <Analytics size="small" /> : <Document size="small" />} />
				</Box>
				{view == 'files' ?  <Box {...getRootProps() as any} overflow="scroll" flex>
					<input {...getInputProps() as any} />

					{files.length > 0 ? (
						<List data={files} primaryKey="path" />
					): (<UploadPlaceholder />)}
				</Box>

				: (
						<Box flex>
							<Box pad="xsmall" align="center" justify="between" direction="row">
								<Text>Analytics</Text>
								<Button 
									hoverIndicator
									plain 
									onClick={() => setAnalyticModalOpen(true)}
									style={{padding: 6, borderRadius: 3}} 
									icon={<Add size="small" />} />
							</Box>
							<Box flex>
							<List
								primaryKey="id"
								data={analytics}
							>
								{(datum) => (
									<Box direction="row" align="center" justify='between'>
										<Box gap="xsmall" direction="row" align="center" flex>
											<Box elevation="small" round="xsmall" overflow="hidden">
												<QRCode size={50}  value={datum.data || ''} />
											</Box>
											<Text>{datum.name}</Text>
										</Box>
										<Button 
											onClick={() => {
												setSelectedAnalytic(datum)
												setAnalyticModalOpen(true)
											}}
											plain 
											style={{padding: 6, borderRadius: 3}} 
											hoverIndicator 
											icon={<MoreVertical size="small" />} />
									</Box>
								)}
							</List>
							</Box>
						</Box>
					)}
				
			</Box>
		</Box>
	)
}