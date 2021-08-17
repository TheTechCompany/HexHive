import { SplitNodeOperation } from 'slate'

import { SyncValue } from '../../model'
import { getParent, getChildren } from '../../path'
import { cloneNode } from '../../utils'

const splitNode = (doc: SyncValue, op: SplitNodeOperation): SyncValue => {
  const [parent, index]: [any, number] = getParent(doc, op.path)

  const target = getChildren(parent)[index]
  const inject = {
    ...cloneNode(target),
    ...op.properties
  }

  if (target.text) {
    if(target.text.length > op.position){
      target.text = target.text.slice(0, op.position);
    }
      // target.text.deleteAt(op.position, target.text.length - op.position)
    if(op.position) {
      let text = inject.text.split('')
      text.splice(0, op.position)
      inject.text = text.join('');
    }
    
  } else {
    target.children.splice(op.position, target.children.length - op.position)
    op.position && inject.children.splice(0, op.position)
  }

  getChildren(parent).insertAt(index + 1, inject)

  return doc
}

export default splitNode
