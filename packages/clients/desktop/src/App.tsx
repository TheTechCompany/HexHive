import { useState } from 'react'
import { LoginView } from '@hexhive/ui'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoginView />
    </div>
  )
}

export default App
