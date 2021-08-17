import * as Automerge from 'automerge'

const toSync = (node: any) => {
  if (!node) {
    return
  }

  if (node.hasOwnProperty('text')) {
    return {
      ...node,
      text: node.text
    }
  } else if (node.children) {
    console.log("NOde children", node.children)
    return {
      ...node,
      children: node.children.length > 0 ? node.children.map(toSync) : [{text: ""}]
    }
  }

  return node
}

export default toSync
