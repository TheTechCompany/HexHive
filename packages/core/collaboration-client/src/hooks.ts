import { MutableRefObject, useContext, useEffect, useReducer, useRef, useState } from "react"
import Automerge from 'automerge'
import { AutomergeClient } from "./client"
import { Document } from './Document'
import { useAutomergeContext } from "./Provider"
import {  throttle } from "lodash"


export const useAutomergeClient = (url: string) : [AutomergeClient | undefined, boolean] => {

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

export const useAutomergeDoc = <T>(collection: string, docId: string) : [Automerge.FreezeObject<T>, any, (change_fn: Automerge.ChangeFn<T>, message?: string) => void, any] => {

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
        console.log("REQUEST MERGE", client, isReady, collection, docId)
        if(client){
            if(collection && docId){
                console.log("REQUEST MERGE")
                client.requestMerges(collection, docId)
            }
            client.registerMergeListener(collection, docId, (changes: Automerge.BinaryChange[]) => {
                console.log("MERGE LISTENER")
                applyChanges(changes)
            })
        }
    }, [client, isReady, collection, docId])

    const applyChanges = (changes: Automerge.BinaryChange[]) => {
        let [newDoc, patchInfo] = Automerge.applyChanges(docRef.current, changes)

        setDoc(newDoc)
    }  

    const sendDocChanges = throttle((collection: string, docId: string, newDoc: Automerge.FreezeObject<any>) => {
        // console.log(changes)
        let changes = Automerge.getChanges(doc, newDoc)
        client?.sendDocChanges(collection, docId, changes)
    }, 2 * 1000);

    const updateDoc = (change_fn: Automerge.ChangeFn<any>, message?: string) => {
        let newDoc = Automerge.change(docRef.current, message || '', change_fn)
        console.log("Update doc", docRef.current)

        let changes = Automerge.getChanges(doc, newDoc)
        console.log("Update doc", client)

        sendDocChanges(collection, docId, newDoc)

        setDoc(newDoc)
    }
    const updateRef = useRef<(change_fn: Automerge.ChangeFn<any>, message?: string) => void>(updateDoc)


    updateRef.current = updateDoc

    return [doc, docRef, updateDoc, updateRef]
}