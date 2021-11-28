export const uploadCampaignAssets = (campaignId: string, files: Array<File>) => {
	let fd = new FormData();

	files.forEach((file) => {
		fd.append('files', file);
	})

	fd.append('file_paths', files.map((x) => (x as any).path).join(', '))

	return fetch(`http://localhost:9009/api/campaign/${campaignId}/assets`, {
		method: "POST",
		body: fd,
		mode: 'cors'
	}).then((r) => r.json())
}

