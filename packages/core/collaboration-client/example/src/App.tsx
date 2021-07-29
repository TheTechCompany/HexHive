import React, { useState } from 'react'
import { useEffect } from 'react'
import Automerge from 'automerge'
import { useAutomergeClient, useAutomergeDoc } from '../../src'

import './App.css'

export interface Contact {
  name?: string;
  version?: number;
}

function App() {

  const [count, setCount] = useState(0)
  const [ items, setItems ] = useState<string[]>([])

  const [ doc, update ] = useAutomergeDoc<Contact>('12345')

  return (
      <div 
        style={{
            flexDirection: 'column',
            display: 'flex',
            flex: 1,
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center'}}
        className="App">
        
        <div
          style={{display: 'flex'}}>
          <input type="text" value={doc.name} onChange={(e) => {
            update((doc) => {
              doc.name = e.target.value;
            })
          }} />
          <div>
           v{doc.version}
          </div>
        </div>
        
 
        <button onClick={() => {
            update((doc) => {
              doc.version = (doc.version || 0) + 1;
            }, "update version")

        }}>Add</button>
      </div>

  )
}

export default App
