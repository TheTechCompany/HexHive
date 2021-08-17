import Automerge from 'automerge'

import { Editor } from 'slate'

import { AutomergeEditor } from './automerge-editor'

import { CursorData, CollabAction } from '../bridge'

export interface AutomergeOptions {
  docId: string
  cursorData?: CursorData
  preserveExternalHistory?: boolean
}

/**
 * The `withAutomerge` plugin contains core collaboration logic.
 */

const withAutomerge = (doc: Automerge.FreezeObject<any>, updateDoc: (changeFn: (doc: Automerge.FreezeObject<any>) => void) => Automerge.FreezeObject<any>) => { 
  
  return <T extends Editor>(
  editor: T,
  options: AutomergeOptions
) => {
  const e = editor as T & AutomergeEditor

  const { onChange } = e

  const { docId, cursorData, preserveExternalHistory } = options || {}

  // e.docSet = new Automerge.DocSet()

 
  /**
   * Clear cursor data
   */

  e.gabageCursor = () => {
    // AutomergeEditor.garbageCursor(e, docId)
  }

  /**
   * Editor onChange
   */

  e.onCursor = (data) => {
    console.log("Cursor", data)
  }

  e.onChange = async () => {
    const operations: any = e.operations

    console.log("OPS", operations)

    // console.log(operations)
    if (!e.isRemote) {
      await AutomergeEditor.applySlateOps(e, doc, updateDoc, operations, cursorData)
    }

    onChange()

    // console.log("Call onChange")

    // onChange()
  }

  /**
   * Receive document value
   */

  e.receiveDocument = data => {
    console.log("RECEIVE DOC", data)

    AutomergeEditor.receiveDocument(e, doc, updateDoc, data)

  }

  /**
   * Receive Automerge sync operations
   */

  e.receiveOperation = data => {
    console.log("RECEIVE", data)
    // if (docId !== data.docId) return

    AutomergeEditor.applyOperation(e, doc, updateDoc, data, preserveExternalHistory)
  }

  return e
}
}

export default withAutomerge
