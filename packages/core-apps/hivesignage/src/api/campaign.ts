import axios from "axios";

let apiUrl = process.env.NODE_ENV == 'production' ? (process.env.REACT_APP_API != undefined ? `${process.env.REACT_APP_API}` : '') : "http://localhost:9009"

export const uploadCampaignAssets = async (campaignId: string, files: Array<File>, loading?: (percent: number) => void) => {
	let fd = new FormData();

	files.forEach((file) => {
		fd.append('files', file);
	})

	fd.append('file_paths', files.map((x) => (x as any).path).join(', '))

	const result = await axios.post(`${apiUrl}/api/campaign/${campaignId}/assets`, fd, {
		onUploadProgress: (progressEvent) => {
			console.log(progressEvent)
			loading?.((progressEvent.loaded / progressEvent.total) * 100)
		}
	})
	return result.data
	// return fetch(`http://localhost:9009/api/campaign/${campaignId}/assets`, {
	// 	method: "POST",
	// 	body: fd,
	// 	mode: 'cors'
	// }).then((r) => r.json())
}

