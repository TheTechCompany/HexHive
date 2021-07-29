import React, {
  Component 
} from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {
  Add,
  Trash as Delete,
  Refresh
} from 'grommet-icons'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import utils from '../../utils';
import './index.css';

export default class UserList extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      inviteContent: {readonly: false, type: 'user'},
      dialogOpen: false,
      selectedUsers: [],
      deleteUser: {},
      confirm: false
    }
  }

  componentDidMount(){
    utils.user.getAll().then((users) => this.setState({users: users}))
  }


  updateUser(){
    const user = this.state.inviteContent;
    
    utils.user.update(user.id, user).then((r) => {
      console.log(r);
      if(r.success){

        let users = this.state.users;
        for(var i = 0; i < users.length; i++){
          if(users[i].id == user.id){
            users[i] = user;
            break;
          }
        }

        this.setState({dialogOpen: false, users: users, inviteContent: {}})
      }
    })
  }

  deleteUser(user){
    /*
     * 1. Are you sure
     * 2. Delete
     *
     */
    if(this.state.confirm){
      utils.user.remove(this.state.deleteUser.id).then((r) => {
        console.log(r);
        let users = this.state.users;
        for(var i = 0; i < users.length; i++){
          if(users[i].id == this.state.deleteUser.id){
            users.splice(i, 1);
            break;
          }
        }
        this.setState({confirm: false, users: users, deleteUser: {}})
      })
    }else{
      this.setState({confirm: true, deleteUser: user})
    }
  }

  resendInvite(user){
    utils.user.resendInvite(user.id).then((r) => {
      console.log(r);
    })
  }

  inviteUser(){
    utils.user.invite(this.state.inviteContent).then((r) => {
      console.log(r);
      this.setState({dialogOpen: false, inviteContent: {}})
      utils.user.getAll().then((users) => this.setState({users: users}))
    })
  }

  _openDialog(){
    this.setState({
      dialogOpen: true,
      inviteContent: {

      }
    })
  }

  _adminCheckboxChanged(e){
    let inviteContent = this.state.inviteContent;
    inviteContent["type"] = (e.target.checked) ? "admin" : "user";
    this.setState({inviteContent: inviteContent})
  }

  _inviteCheckboxChanged(e){
    let inviteContent = this.state.inviteContent;
    inviteContent[e.target.name] = e.target.checked;
    this.setState({inviteContent: inviteContent})
  }

  _inviteContentChanged(e){
    let inviteContent = this.state.inviteContent;
    inviteContent[e.target.name] = e.target.value;
    this.setState({inviteContent: inviteContent})
  }

  render(){
    const oldUser = (this.state.inviteContent && this.state.inviteContent.id);

    return (
      <Paper className="user-list">
        <div className="user-list__header">
          <Typography variant="h6">Users</Typography>
          <IconButton onClick={this._openDialog.bind(this)}>
            <Add />
          </IconButton>
        </div>
        <div className="user-list__list">
        <List>
          {this.state.users.map((user, id) => (
            <ListItem key={id} role={undefined} dense button onClick={() => this.setState({dialogOpen: true, inviteContent: Object.assign({type: "user", readonly: false}, user)})}>
              <ListItemText primary={user.name} secondary={(user.active) ? user.email : user.email + ' - Invite Pending... '} />
              <ListItemSecondaryAction>
                {(user.active) ? null : (
                  <IconButton onClick={this.resendInvite.bind(this, user)}>
                    <Refresh />
                  </IconButton>
                )}
                <IconButton onClick={this.deleteUser.bind(this, user)} edge="end">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>

      <Dialog open={this.state.confirm}>
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to remove {this.state.deleteUser.name}'s access to your team?</Typography>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.setState({confirm: false, deleteUser: {}})}>
            Cancel
          </Button>
          <Button 
            onClick={this.deleteUser.bind(this)}
             variant="contained"
             color="primary">
            Confirm
           </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={this.state.dialogOpen}>
        <DialogTitle>{(oldUser) ? "Update User" : "Invite User" }</DialogTitle>
        <DialogContent>
          <TextField 
            fullWidth
            name="name"
            onChange={this._inviteContentChanged.bind(this)}
            label="Name" 
            value={this.state.inviteContent.name}/>
          <TextField 
            fullWidth
            name="email"
            onChange={this._inviteContentChanged.bind(this)}
            value={this.state.inviteContent.email}
            label="Email" />
          <FormGroup row style={{justifyContent: 'flex-end'}}>
            <FormControlLabel
              labelPlacement="start"
              control={(
                <Checkbox
                  name="admin"
                  checked={this.state.inviteContent.type == "admin"}
                  onChange={this._adminCheckboxChanged.bind(this)} />
              )}
              label="Admin" />
            <FormControlLabel 
              labelPlacement="start"
              control={(
                <Checkbox 
                  name="readonly"
                  checked={this.state.inviteContent.readonly}
                  onChange={this._inviteCheckboxChanged.bind(this)}
                    />
              )}
              label="Read only"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => this.setState({dialogOpen: false, inviteContent: {}})}>
            Cancel
          </Button>
          <Button 
            variant="contained"
            color="primary"
            onClick={(oldUser) ? this.updateUser.bind(this) : this.inviteUser.bind(this)}>
            {(oldUser) ? 'Save': 'Invite'}
          </Button>
        </DialogActions>
      </Dialog>
      </Paper>
    );
  }
} 
