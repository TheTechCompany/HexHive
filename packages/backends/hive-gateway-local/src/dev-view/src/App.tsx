import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'
import { useMemo } from 'react'

function App() {
  const [graphs, setGraphs] = useState<any[]>([])
  const [apps, setApps] = useState<any[]>([])
  const [liveApps, setLiveApps] = useState<any[]>([])
  const [views, setViews] = useState<any[]>([])

  const getGraphs = () => {
    return fetch('/dev/graphs').then((r) => r.json())
  }

  const getSites = () => {
    return fetch('/dev/sites').then((r) => r.json())
  }

  useEffect(() => {
    getGraphs().then((result) => {
        setGraphs(result.endpoints)
    })

    getSites().then((result) => {
      setApps(result.apps)
      setViews(result.views)
    })
  }, [])

  const checkApp = async (url: string) => {
    return await fetch(url)
  }

  useEffect(() => {

    
      Promise.all(apps.map(async (app) => {
        try{
          await checkApp(app.config_url)
          return {
            ...app,
            live: true
          }
        }catch{
          return {
            ...app,
            live: false
          }
        }
      })).then((live) =>{ 
        setLiveApps(live)
      })

  }, [apps])


  return (
    <div className="App">
      <header className="App-header">
       Hive Gateway
      </header>
      <main style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <h2>Graphs</h2>
          <ul style={{listStyle: 'none'}}>
            {graphs.map((graph, ix) => (
              <li style={{display: 'flex', justifyContent: 'space-between'}}>
               <div style={{background: graph.status == 'available' ? 'lightgreen': "red", height: 20, width: 20, borderRadius: 10}}>
                </div>
                <span>
                {graph.key}
                </span> 
                <span>
                
                - {graph.url} 
                </span>
               </li> 
            ))}
          </ul>
        </div>

        <div>
          <h2>Apps</h2>
          <ul style={{listStyle: 'none'}}>
            {liveApps?.map((site, ix) => (
                <li style={{display: 'flex', flexDirection: 'row'}}>
                       <div style={{background: site.live ? 'lightgreen': "red", height: 20, width: 20, borderRadius: 10}}>
                </div>
                 <span>{site.name}</span><span>- {site.config_url.substring(0, 20)}...</span>
                </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Views</h2>
          <ul style={{listStyle: 'none'}}>
            {views?.map((site, ix) => (
                <li>
                  <span>
                  {site.name} 
                  </span>
                  <span>
                  - {site.path}
                  </span>
                </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
