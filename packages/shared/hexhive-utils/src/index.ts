export * from './color'

export const getHostForElement = (element: HTMLElement): Document | ShadowRoot =>
(element.getRootNode?.() as Document | ShadowRoot) || window?.document;

export const createLine = (path: {x: number, y: number}[]) => {
    let string = ''

    path.forEach((p, ix) => {
        let k = ix == 0 ? 'M' : 'L'
        string += `${k}${p.x} ${p.y} `
    })
    return string;
}


 export const bfs_search = (graph: {source: string, target: string, id: string}[], rootNode: string | undefined, targetNode: string, path?: any[]) : any[] => {
        if(!rootNode) return [];
        if(!path) path = [
            {
                node: rootNode
            }
        ];

        let rootPaths = graph.filter((a) => a.source == rootNode);

        if(rootPaths.length > 0){

            let nextNode = rootPaths.find((a) => a.target === targetNode)
            if(nextNode){
                return [...path, {id: nextNode.id, node: nextNode.target}]
            }else{

                let runs : any[] = rootPaths.map((rootPath) => {
                    if(path!.map((x) => x.node).indexOf(rootPath.target) < 0){
                        return bfs_search(graph, rootPath.target, targetNode, [...path!, {id: rootPath.id, node: rootPath.target}])
                    }

                    return [];
                }).filter((a) => a.length > 0) || []
                
                if(runs.length > 0){
                    return runs.find((a) => a.length > 0)
                }
            }
        }

        return []
    }

export const makeTree = (items: {id: string, name: string, parent: string}[] = [], parent?: string) : {id: string, name: string, children: any[]}[] => {
        return items.filter((a) => a.parent == parent).map((item) => {
            return {
                ...item,
                name: item.name,
                children: makeTree(items, item.id)
            }
        })
    }