import { FileStore } from "../de-file-store"

export default (fs: FileStore) => ({
	Campaign: {
		assets: async (root: any, ) => {
			console.log(root)
			console.log("Asset", await fs.lsAsset(root.id))

			return await fs.lsAsset(root.id)
		}
	}	
})