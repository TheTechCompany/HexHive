import React from 'react'
import { BaseStyle } from '@hexhive/styles'
import { Box, Button, Grommet, Text, TextInput } from 'grommet'
import { useState } from 'react'

const App = (props: {authURL?: string}) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const login = () => {
    console.log({
      authURL: props.authURL,
      email,
      password
    })
  }

    return (
      <Grommet 
        theme={BaseStyle}
        full 
        style={{display: 'flex', flex: 1}}>
        <Box 
          flex 
          background={'#dfdfdf'}
          justify='center' 
          align='center'>
            
            <Box 
              overflow={'hidden'}
              round="xsmall"
              background={'neutral-1'}
              width={{min: 'medium'}}>
                <Box background={'accent-2'} pad="xsmall">
                  <Text>Sign In</Text>
                </Box>
                <Box pad="xsmall" flex>
                  <Box>
                      <Text size="small">Email address</Text>
                      <TextInput 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type={'email'} 
                        placeholder="Enter email"  />
                  </Box>
                  <Box>
                      <Text size="small">Password</Text>
                      <TextInput 
                        onKeyDown={(e) => {
                          if(e.key === "Enter"){
                            login();
                          }
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={'password'} 
                        placeholder="Enter password" />
                  </Box>
                </Box>

                <Box pad="xsmall">
                  <Button 
                    onClick={() => login()}
                    color="accent-1" 
                    primary 
                    label="Submit" />
                </Box>
            </Box>
            <Box>
              <Text>Forgotten password?</Text>
            </Box>

        </Box>
      </Grommet>
    )
}

export default App;