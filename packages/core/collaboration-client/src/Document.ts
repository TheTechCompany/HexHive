import Automerge from 'automerge'

export class Document<T> {
    public doc : Automerge.FreezeObject<T>

    private change_fn?: (changes: Automerge.BinaryChange[]) => void

    constructor(change_fn?: (changes: Automerge.BinaryChange[]) => void){
        this.doc = Automerge.init<T>()
        this.change_fn = change_fn
    }

    change(message: string, change_fn: Automerge.ChangeFn<Automerge.Proxy<Automerge.FreezeObject<T>>>){
        let newDoc = Automerge.change(this.doc, message, change_fn)
        console.log(newDoc)
        this.change_fn?.(Automerge.getChanges(this.doc, newDoc))

        this.doc = newDoc
        console.log("Change")
    }

    applyChanges(changes: Automerge.BinaryChange[]){
        const [ newObject, patch ] = Automerge.applyChanges(this.doc, changes)
        this.change_fn?.(Automerge.getChanges(this.doc, newObject))
        this.doc = newObject;
    }
}