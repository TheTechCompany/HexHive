import React, {
  Component, useEffect, useState
} from 'react';

import {RobustFileList} from '@hexhive/ui';
import './index.css';
import { Box, Text, Button, TextInput } from 'grommet';

const pkg = require('../../../package.json')


export interface ProfileProps {
  user?: any;
}

export const Profile : React.FC<ProfileProps> = (props) => {
  const [ uploads, setUploads ] = useState<any[]>([])
  const [ password, setPassword ] = useState<string>('')
  const [ confirm, setConfirm ] = useState<string>('')
  const [ passwordsMatch, setPasswordsMatch ] = useState<boolean>(false);
 
  useEffect(() => {
    // utils.profile.getUploads().then((uploads) => {
    //   setUploads(uploads.map((x: any) => ({...x, uploaded: true})))
    // })
  }, [])


  const updatePassword = () => {
    if(password === confirm){
      // utils.profile.updatePassword(password).then((r) => {
      //   setPassword('')
      //   setConfirm('')
      // })
    }
  }

  return ( 
      <div className="profile-page">
        <div className="profile-top-half">
          <Box style={{display: 'flex'}} className="profile-info">
            <Box style={{display: 'flex', flexDirection: 'column'}}>
              <Text  style={{textAlign: 'left'}}>{props.user.name}</Text>
              <Text style={{textAlign: 'left'}}>{props.user.email || props.user.phone}</Text>

              <div style={{flex: 1}} className="password-update">
                <Text >Password</Text>
                <TextInput 
                  name='password' 
                  type="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New Password" />
                <TextInput 
                  name='confirm' 
                  type="password"
                  onChange={(e) => setConfirm(e.target.value)}
                  value={confirm} 
                  placeholder="Confirm New Password" />
                <Button 
                  onClick={updatePassword}
                  primary
                  label="Change Password"
                  style={{marginTop: '8px'}} />
              </div>
              <div>Version: {pkg.version}</div>
            </Box>
          </Box>
        </div>
        <div className="profile-bottom-half">
          <Box className="profile-uploads">
            <Box>
              <Text>Uploaded Files</Text>
              <RobustFileList 
                cols={4}
                files={uploads} 
                onClick={() => {}} 
                onDeleteClick={() => {}}/>
            </Box>
          </Box>
        </div>
      </div>
    );
  
}
