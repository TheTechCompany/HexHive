export const uploadFiles = (files: File[], cwd?: string) => {
    let fd = new FormData()

    files.forEach((file) => {
        fd.append('files', file)
    })

    fd.append('cwd', cwd)

    return fetch('http://localhost:7000/api/files/file-graph', {
        method: "POST",
        body: fd
    }).then((r) => r.json())
}