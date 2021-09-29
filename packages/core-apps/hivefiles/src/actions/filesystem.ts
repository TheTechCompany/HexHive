import { Mutation, useMutation } from "@hexhive/client";

export const moveFile = (mutation: Mutation) => {
	const fs = mutation.updateHiveFiles({
		where: { name: 'Second Folder' },
		disconnect: {
			parent: { where: { node: { name: 'Folder' } } }
		},
		connect: {
			parent: { where: { node: { name: "FoldersInFolders" } } }
		}
	})

	return {
		item: {
			...fs.hiveFiles[0]
		}
	}
}

export const addFolder = (mutation: Mutation, args: { name: string, cwd: string }) => {
	let fs;
	if (args.cwd) {
		console.log(args.cwd)
		let file = mutation.updateFileSystems({
			where: {name: "Shared FS"},
			update: {
				files: [{create: [{node: {
						name: args.name,
						isFolder: true,
						parent: {connect: {where: {node: {id: args.cwd}}}}
					}}]
				}]
					
				// 	[{node: [{where: {node: {id: args.cwd}}, update: {
				// 	node: {
				// 		children: [{create: [{node: {name: args.name, isFolder: true}}]}]
				// 	}
				// }}
				// }]}]
			}
		})
		// let file = mutation.updateHiveFiles({
		// 	where: { id: args.cwd },
		// 	create: {
		// 		children: [{ node: { name: args.name, isFolder: true } }]
		// 		//   files: [{where: {node: {id: args.cwd}}, update: {
		// 		//       node: {children: [{create: [{node: {name: args.name, isFolder: true}}]}]}
		// 		//   }


		// 		//   [{node: {name: args.name, isFolder: true}}]
		// 	}
		// })
		return {
			item: {
				...file.fileSystems[0]
			}
		}

	} else {
		console.log("Root addition")
		fs = mutation.updateFileSystems({
			where: { name: 'Shared FS' }, create: {
				files: [{ node: { name: args.name, isFolder: true, fs: {connect: {where: {node:{name: "Shared FS"}}}} } }]
			}
		})
		return {
			item: {
				...fs.fileSystems[0]
			}
		}
	}

}
export const  runWorkflow  = (mutation : Mutation, args: {files: any[], pipeline: string}) => {
	const item = mutation.runWorkflow({
		id: args.pipeline,
		params: [{key: 'STP File', type: 'file', urn: `ipfs://${args.files[0]?.cid}`}]
	})
	return {
		item: {
			...item
		},
		err: null
	}
}