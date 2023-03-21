import { existsSync } from "fs"

export const BackendTemplate = async (name: string) => {

    if(existsSync(name)){
        throw new Error("Folder already exists")
    }

}