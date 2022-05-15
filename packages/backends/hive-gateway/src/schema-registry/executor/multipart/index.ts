import { extractFiles } from "./utils";
import FormData from "form-data";
export const handleMultipart = async (query: any, variables: any) => {

        
			const {files, variables: newVariables} = extractFiles(variables)

			let formData = new FormData();
			formData.append('operations', JSON.stringify({query, variables: newVariables}));

			let map : any = {};
			files.forEach((path, ix) => {
				map[ix+1] = [`variables.${path.key}`]
				
			})
			formData.append('map', JSON.stringify(map));

			await Promise.all(files.map(async (path, ix) => {
				const {createReadStream, filename, mimetype: contentType } = await path.file;
				formData.append(`${ix + 1}`, createReadStream(), {
					contentType,
					filename,
					/*
					  Set knownLength to NaN so node-fetch does not set the
					  Content-Length header and properly set the enconding
					  to chunked.
					  https://github.com/form-data/form-data/pull/397#issuecomment-471976669
					*/
					knownLength: Number.NaN,
				})
			}));

            return formData

}