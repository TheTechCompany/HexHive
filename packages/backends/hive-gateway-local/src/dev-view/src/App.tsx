import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useEffect } from 'react'
import { useMemo } from 'react'


const mock = [
  {
    name: 'HiveFlow',
    status: 'available',
    graph: 'http://localhost:9011/graphql',
    app: 'http://localhost:8503/entry.js',
    route: '/',
  }
]

const mockGraphs = mock.map((app) => ({key: app.name, status: app.status, url: app.graph}))
const mockApps = mock.map((app) => ({config_url: app.app}))
const mockViews = mock.map((app) => ({name: app.name, path: app.route}))

function App() {
  const [graphs, setGraphs] = useState<{key: string, status: string, url: string}[]>(process.env.NODE_ENV == 'development' ? mockGraphs : [])
  const [apps, setApps] = useState<{config_url: string}[]>(process.env.NODE_ENV == 'development' ? mockApps : [])
  const [liveApps, setLiveApps] = useState<any[]>([])
  const [views, setViews] = useState<{name: string, path: string}[]>(process.env.NODE_ENV == 'development' ? mockViews :[])

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
      <header style={{ display: 'flex', alignItems: 'center', height: 42, background: 'rgb(85, 85, 107)' }} className="App-header">
        <h4>HexHive Development Server</h4>
      </header>
      <main style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{flex: 0.7, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h2>Graphs</h2>
          <ul style={{listStyle: 'none'}}>
            {graphs.map((graph, ix) => (
              <li style={{display: 'flex', justifyContent: 'space-between'}}>
               <div style={{background: graph.status == 'available' ? 'lightgreen': "red", height: 20, width: 20, marginRight: 10, borderRadius: 10}}>
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

        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        
          <h2>Apps</h2>
          <ul style={{listStyle: 'none'}}>
            {liveApps?.map((site, ix) => (
                <li style={{display: 'flex', flexDirection: 'row'}}>
                       <div style={{background: site.live ? 'lightgreen': "red", height: 20, width: 20, borderRadius: 10}}>
                </div>
                 <span>{site.name}</span><span>- {site.config_url.substring(0, 40)}...</span>
                </li>
            ))}
          </ul>
        </div>
        <div style={{flex: 0.7, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
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
