import { Box, List, Button, Text } from 'grommet';
import React, {useCallback, useState} from 'react';
import { ScreenPreview } from '../../components/screen-preview';
import { Upload, Analytics, Add, Tools, Document, Qr, MoreVertical} from 'grommet-icons';
import { UploadPlaceholder } from '../../components/upload-placeholder';
import { useMutation, useQuery } from '@hexhive-api/signage';
import { useDropzone } from 'react-dropzone';
import { uploadCampaignAssets } from '../../api/campaign';
import { useQuery as useApolloQuery, useApolloClient, gql } from '@apollo/client';
import { CreateAnalyticModal } from '../../modals/create-analytic';
import { mutation } from '@hexhive/client';
import QRCode from 'qrcode.react'
import { matchPath, Route, Switch } from 'react-router-dom';
import { FilesPage } from './pages/files';
import { AnalyticsPage } from './pages/analytics';
import { ToolsPage } from './pages/tools';
import { CampaignSingleProvider } from './context';

export const CampaignSingle = (props) => {

	const client = useApolloClient()

	const query = useQuery()

	const [ analyticModalOpen, setAnalyticModalOpen ] = useState(false)
	const [ selectedAnalytic, setSelectedAnalytic ] = useState(false)
	const campaign = query.campaigns({where: {id: props.match.params.id}})?.[0]

	const setView = (path: string) => {
		props.history.push(`${props.match.url}${path}`)
	}

	const menu = [
		{
			route: '/files',
			label: 'Files',
			icon: <Document size="small" />,
		},
		{
			route: '/analytics',
			label: "Analytics",
			icon: <Analytics size="small" />,
		},
		{
			route: '/tools',
			label: "Tools",
			icon: <Tools size="small" />
		}
	]
	// const [files, setFiles] = useState<any[]>([])

	const { data } = useApolloQuery(gql`
		query Q ($id: ID) {
			campaigns(where: {id: $id}) {
				id
				views
				interactions

				interactionTimeline {
					time
					interactions
				}

				assetFolder
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
	const views = data?.campaigns?.[0]?.views
	const files = data?.campaigns?.[0]?.assets || [];
	const analytics = data?.campaigns?.[0]?.analytics || [];
	
	const interactions = data?.campaigns?.[0]?.interactions
	const interactionTimeline = data?.campaigns?.[0]?.interactionTimeline

	const active = menu.map((item) => matchPath(window.location.pathname.replace(`/dashboard/signage`, ''), {
		path: `${props.match.url}${item.route}`,
	}) != null).indexOf(true)

	return (
		<CampaignSingleProvider value={{
			campaign,
			files,
			analytics,
			views,
			interactions,
			interactionTimeline,
			refresh: () => {
				client.refetchQueries({include: ['Q']})
			}
		}}>
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
				<Box direction="row" justify="between" align="center" pad="xsmall" background="accent-2">
					<Text>{campaign.name}</Text>

					<Box direction="row" gap="xsmall">
						{menu.map((item, ix) => (
							<Button 
							active={ix == active}
							hoverIndicator 
							plain 
							onClick={() => setView(item.route)}
							style={{padding: 6, borderRadius: 3}} 
							icon={item.icon} />
						))}
					</Box>
					
				</Box>

				<Box flex>
					<Switch>
						<Route path={`${props.match.url}/`} exact component={AnalyticsPage} />
						<Route path={`${props.match.url}/files`} component={FilesPage} />
						<Route path={`${props.match.url}/analytics`} component={AnalyticsPage} />
						<Route path={`${props.match.url}/tools`} component={ToolsPage} />
					</Switch>
				</Box>

				
			</Box>
		</Box>
		</CampaignSingleProvider>
	)
}