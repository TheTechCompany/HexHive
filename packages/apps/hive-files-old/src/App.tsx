import React from 'react';

import { useQuery } from '@hexhive/client'

import { AuthProvider } from '@hexhive/auth-ui'
import { BabylonViewer } from '@hexhive/ui'
import { Box, List, Text } from 'grommet';

function App() {
  const query = useQuery({suspense: false, staleWhileRevalidate: true});

  const files = query?.FileMany

  return (
    <AuthProvider
      authorizationServer={process.env.NODE_ENV == 'production' ? "https://api.hexhive.io" : "http://localhost:7000"}
      clientId="hexhive.io"
      clientSecret="tester"
      redirectUri={process.env.NODE_ENV == 'production' ? "https://hexhive.io/dashboard/3d" : "http://localhost:3001/dashboard"}>

    <Box flex direction="row">
      <Box
        overflow="scroll"
        background="accent-1" 
        direction="column" 
        width="medium">
        <Text weight='bold'>Files</Text>
        <List
          data={files || []}
          primaryKey="name"
          >
          {(datum: any) => (
            <Text style={{textAlign: 'start'}}>{datum.name}</Text>
          )}
          </List>
      </Box>
    <Box flex>
      <BabylonViewer
        data={'2CylinderEngine.glb'}
        rootUrl={'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/2CylinderEngine/glTF-Binary/'} />
    </Box>
    </Box>
    </AuthProvider>
  );
}

export default App;
