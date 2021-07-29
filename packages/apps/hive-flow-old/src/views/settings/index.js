import React, {
    Component
} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import UserList from '../../components/user-list';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './index.css';

export default class Settings extends Component {
  render(){
    return (
      <div className="settings-panel">

         <UserList />  
  
    </div>
    );
  }
}
