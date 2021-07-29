import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { AutomergeClientProvider, useAutomergeClient } from '../../src'

const Bundle = (props: any) => {
  const [client, isReady] = useAutomergeClient()

  return (
    <AutomergeClientProvider isReady={isReady} client={client}>
      <App />
    </AutomergeClientProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Bundle />
  </React.StrictMode>,
  document.getElementById('root')
)
