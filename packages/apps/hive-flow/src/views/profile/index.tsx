import React, {
  Component, useEffect, useState
} from 'react';

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RobustFileList from '../../components/workhub/robust-file-list';
import { connect } from 'react-redux';
import utils from '../../utils';
import './index.css';
import { StoreState } from '../../reducers';
import { Box } from 'grommet';

const pkg = require('../../../package.json')

var jwtDecode = require('jwt-decode');

export interface ProfileProps {
  user?: any;
}

const Profile : React.FC<ProfileProps> = (props) => {
  const [ uploads, setUploads ] = useState<any[]>([])
  const [ password, setPassword ] = useState<string>('')
  const [ confirm, setConfirm ] = useState<string>('')
  const [ passwordsMatch, setPasswordsMatch ] = useState<boolean>(false);
 
  useEffect(() => {
    utils.profile.getUploads().then((uploads) => {
      setUploads(uploads.map((x: any) => ({...x, uploaded: true})))
    })
  }, [])


  const updatePassword = () => {
    if(password === confirm){
      utils.profile.updatePassword(password).then((r) => {
        setPassword('')
        setConfirm('')
      })
    }
  }

  return ( 
      <div className="profile-page">
        <div className="profile-top-half">
          <Card style={{display: 'flex'}} className="profile-info">
            <CardContent style={{display: 'flex', flexDirection: 'column'}}>
              <Typography variant="h6" style={{textAlign: 'left'}}>{props.user.name}</Typography>
              <Typography variant="subtitle2" style={{textAlign: 'left'}}>{props.user.email || props.user.phone}</Typography>

              <Divider />

              <div style={{flex: 1}} className="password-update">
                <Typography variant="subtitle1">Password</Typography>
                <TextField 
                  name='password' 
                  type="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  label="New Password" 
                  fullWidth 
                  error={password != confirm} />
                <TextField 
                  name='confirm' 
                  type="password"
                  onChange={(e) => setConfirm(e.target.value)}
                  value={confirm} 
                  label="Confirm New Password" 
                  error={password != confirm}
                  fullWidth/>
                <Button 
                  onClick={updatePassword}
                  color="primary" 
                  variant="contained" 
                  style={{marginTop: '8px'}}>Change Password</Button>     
              </div>
              <div>Version: {pkg.version}</div>
            </CardContent>
          </Card>
        </div>
        <div className="profile-bottom-half">
          <Card className="profile-uploads">
            <Box>
              <Typography variant="h6">Uploaded Files</Typography>
              <RobustFileList 
                cols={4}
                files={uploads} 
                onClick={() => {}} 
                onDeleteClick={() => {}}/>
            </Box>
          </Card>
        </div>
      </div>
    );
  
}

export default connect((state: StoreState) => ({
  token: state.auth.token,
  user: state.auth.user
}))(Profile)
