import { FileStore } from "../de-file-store"

export default (fs: FileStore) => ({
	Campaign: {
		assets: async (root: any, ) => {
			console.log(root)
			try{
				return await fs.lsAsset(root.id)

			}catch(e){
				return []
			}
		}
	}	
})