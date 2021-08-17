import Automerge, { SyncMessage } from 'automerge'

import { Editor, Operation } from 'slate'
import { HistoryEditor } from 'slate-history'

import {
  toJS,
  SyncDoc,
  CollabAction,
  toCollabAction,
  applyOperation,
  setCursor,
  toSlateOp,
  CursorData
} from '../bridge'

export interface AutomergeEditor extends Editor {
  clientId: string

  isRemote: boolean


  openConnection: () => void
  closeConnection: () => void

  receiveDocument: (data: string) => void
  receiveOperation: (data: Automerge.SyncMessage) => void

  gabageCursor: () => void

  onCursor: (data: any) => void
}

/**
 * `AutomergeEditor` contains methods for collaboration-enabled editors.
 */

export const AutomergeEditor = {
  /**
   * Create Automerge connection
   */

  
  /**
   * Apply Slate operations to Automerge
   */

  applySlateOps: async (
    e: AutomergeEditor,
    doc: Automerge.FreezeObject<any>,
    updateDoc: (changeFn: (doc: Automerge.FreezeObject<any>) => void) => Automerge.FreezeObject<any>,
    operations: Operation[],
    cursorData?: CursorData
  ) => {
    try {
      // const doc = e.docSet.getDoc(docId)

      if (!doc) {
        throw new TypeError(`Unknown docId: ${doc}!`)
      }

      let changed
// e.selection = {anchor: 

        for await (let op of operations) {
          console.log("Item", op)
          changed = updateDoc( (d: any) =>{

            // if(!d || !d.children) d = {...d, children: [{type: 'paragraph', children: [{text: ""}]}]};
         
            return applyOperation(d, op)
          })
        }
      Editor.normalize(e)

 
      
      // changed = updateDoc(d => {
      //   setCursor(e.clientId, e.selection, d, operations, cursorData || {})
      // }, )

      // e.docSet.setDoc(docId, changed as any)
    } catch (e) {
      console.error(e)
    }
  },

  /**
   * Receive and apply document to Automerge docSet
   */

  receiveDocument: (
    e: AutomergeEditor,    
    doc: Automerge.FreezeObject<any>,
    updateDoc: (changeFn: (doc: Automerge.FreezeObject<any>) => void) => Automerge.FreezeObject<any>,
    data: any
  ) => {
    const currentDoc = doc;

    const externalDoc = Automerge.from<SyncDoc>(data)

    const mergedDoc = Automerge.merge<SyncDoc>(
      externalDoc,
      currentDoc || Automerge.init()
    )

    // e.docSet.setDoc(docId, mergedDoc)

    console.log("Receive Doc")
    // Editor.withoutNormalizing(e, () => {
    //   e.children = toJS(mergedDoc).children

    //   e.onChange()
    // })
  },

  /**
   * Generate automerge diff, convert and apply operations to Editor
   */

  applyOperation: (
    e: AutomergeEditor,
    doc: Automerge.FreezeObject<any>,
    updateDoc: (changeFn: (doc: Automerge.FreezeObject<any>) => void) => Automerge.FreezeObject<any>,
    data: SyncMessage,
    preserveExternalHistory?: boolean
  ) => {
    try {
      // const current: any = e.docSet.getDoc(docId)

      // const updated = e.connection.receiveMsg(data)

      const operations = Automerge.getChanges(doc, data)

      if (operations.length) {
        const slateOps = toSlateOp(operations, doc)

        e.isRemote = true

        Editor.withoutNormalizing(e, () => {
          if (HistoryEditor.isHistoryEditor(e) && !preserveExternalHistory) {
            HistoryEditor.withoutSaving(e, () => {
              slateOps.forEach((o: Operation) => {
                e.apply(o)
              })
            })
          } else {
            slateOps.forEach((o: Operation) => e.apply(o))
          }

          e.onCursor && e.onCursor(doc.cursors)
        })

        Promise.resolve().then(_ => (e.isRemote = false))
      }
    } catch (e) {
      console.error(e)
    }
  },

  // garbageCursor: (e: AutomergeEditor, docId: string) => {
  //   const doc = e.docSet.getDoc(docId)

  //   if (!doc) {
  //     return
  //   }

  //   const changed = Automerge.change<SyncDoc>(doc, (d: any) => {
  //     delete d.cursors
  //   })

  //   e.onCursor && e.onCursor(null)

  //   e.docSet.setDoc(docId, changed)

  //   e.onChange()
  // }
}
