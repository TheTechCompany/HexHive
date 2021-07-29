import { MutableRefObject, useContext, useEffect, useReducer, useRef, useState } from "react"
import Automerge from 'automerge'
import { AutomergeClient } from "./client"
import { Document } from './Document'
import { useAutomergeContext } from "./Provider"


export const useAutomergeClient = (url: string) => {

    const [ connection, setConnection ] = useState<AutomergeClient>()
    const [ isReady, setReady ] = useState<boolean>(false)

    useEffect(() => {
        if(!connection){
            setConnection(
                new AutomergeClient({url: url || 'ws://localhost:8081', readyCallback: () => {
                setReady(true)
    
                }})
            )
        }
    }, [])


    return [connection, isReady];
}

export type AutomergeChangeFunction<T> = (change_fn: Automerge.ChangeFn<T>, message?: string) => void

export const useAutomergeDoc = <T>(collection: string, docId: string) : [Automerge.FreezeObject<T>, (change_fn: Automerge.ChangeFn<T>, message?: string) => void] => {

    const { client, isReady } = useAutomergeContext() 

    const document = Automerge.init<T>();

    const docRef = useRef<Automerge.FreezeObject<T>>(document)
    const [ doc, _setDoc ] = useState<Automerge.FreezeObject<T>>(document)

    const setDoc = (doc: Automerge.FreezeObject<T>) => {
        _setDoc(doc)
        docRef.current = doc;
    }

    //Build and tear down functions for merge listeners
    useEffect(() => {
        if(client){
            if(isReady){
                client.requestMerges(collection, docId)
            }
            client.registerMergeListener(collection, docId, (changes: Automerge.BinaryChange[]) => {
                console.log("MERGE LISTENER")
                applyChanges(changes)
            })
        }
    }, [client, isReady])

    const applyChanges = (changes: Automerge.BinaryChange[]) => {
        let [newDoc, patchInfo] = Automerge.applyChanges(docRef.current, changes)

        setDoc(newDoc)
    }  

    const updateDoc = (change_fn: Automerge.ChangeFn<any>, message?: string) => {
        let newDoc = Automerge.change(docRef.current, message || '', change_fn)

        let changes = Automerge.getChanges(doc, newDoc)

        client?.sendDocChanges(collection, docId, changes)

        setDoc(newDoc)
    }
    const updateRef = useRef<(change_fn: Automerge.ChangeFn<any>, message?: string) => void>(updateDoc)


    updateRef.current = updateDoc

    return [doc, updateDoc]
}