import axios from 'axios';

export const uploadFiles = async (files: File[], progress_indicator: (progress: number) => void, cwd?: string) => {
    let fd = new FormData()

    files.forEach((file) => {
        fd.append('files', file)
    })

    fd.append('cwd', cwd)

    const result = await axios.request({
        url: `${process.env.REACT_APP_API || 'http://localhost:7000'}/api/files/file-graph`,
        method: "POST",
        data: fd,
        withCredentials: true,
        onUploadProgress: (p) => {
            progress_indicator?.(p.loaded / p.total)
        }
    })
    progress_indicator?.(1)
    return result.data
    // return fetch(`${process.env.REACT_APP_API || 'http://localhost:7000'}/api/files/file-graph`, {
    //     method: "POST",
    //     body: fd,
    //     credentials: 'include'
    // }).then((r) => r.json())
}