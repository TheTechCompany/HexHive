import { InsertTextOperation, RemoveTextOperation } from 'slate'
import { Text } from 'automerge'
import { getTarget } from '../path'
import { SyncValue } from '../model'

export const insertText = (
  doc: SyncValue,
  op: InsertTextOperation
): SyncValue => {
  const node = getTarget(doc, op.path)

  const offset = Math.min(node.text.length, op.offset)

  
  
  node.text = [node.text.slice(0, offset), op.text, node.text.slice(offset), ' '].join('');

  // if(!(node.text instanceof Text)){
  //   node.text = new Text(node.text)
  // }
 
  // node.text.insertAt(offset, ...op.text.split(''))

  return doc
}

export const removeText = (
  doc: SyncValue,
  op: RemoveTextOperation
): SyncValue => {
  const node = getTarget(doc, op.path)

  const offset = Math.min(node.text.length, op.offset)

  node.text = [node.text.slice(0, offset), node.text.slice(offset + op.text.length)].join('')

  // node.text.deleteAt(offset, op.text.length)

  return doc
}

export default {
  insert_text: insertText,
  remove_text: removeText
}
