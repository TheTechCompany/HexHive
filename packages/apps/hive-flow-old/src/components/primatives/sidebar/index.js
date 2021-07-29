import React, {
  Component
} from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import { logout } from '../../../actions/auth';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import Logo from '../../../assets/logo.png'
import './index.css';

var jwtDecode = require('jwt-decode');
class Sidebar extends Component {

  _logout(){
    this.props.logout()
    this.props.history.push('/')
  }

  _settings(){
    this.props.history.push(`${this.props.match.url}settings`);
  }

  _profile(){
    this.props.history.push(`${this.props.match.url}profile`);
  }

  render(){
    const { active, user, menu, logo } = this.props;
    console.log(user)
    return (
      <Paper className={`${this.props.className} sidebar`}>
        <div className="sidebar-header-image" />
        <ul className="sidebar-menu">
          {menu.map((x, ix) => (
            <li 
              key={`sidebar-${ix}`}
              className={`sidebar-menu-opt ${active == "/"+ x.label.toLowerCase() ? "active" : ''} ${ix == 0 && active == "" ? 'active': ''}`}
              onClick={this.props.onSelect.bind(this, x.label)}>
              {x.alerts > 0 ? ([(
              <Badge 
                anchorOrigin={{
                  horizontal: 'left',
                  vertical: 'top'
                }}
                badgeContent={x.alerts} color="secondary">
                <Icon>{x.icon}</Icon>
              </Badge>), 
                x.label
              ]) :[(
              
              <Icon>{x.icon}</Icon>),
              (x.label
            )]}

            
            </li>
          ))}
        </ul>
        {user.user_type == "admin" ? (
          <div className="sidebar-admin-option" onClick={this._settings.bind(this)}>
            <Icon style={{marginRight: '15px'}}>supervised_user_circle</Icon>
            <Typography className="sidebar-admin-option__text">Admin</Typography>
          </div>
        ) : null}
        <div className="sidebar-footer">
          <div className="sidebar-footer__info">
            <div className="sidebar-footer__name">
              <Typography>{this.props.user.name}</Typography>
            </div>
            <div className="sidebar-footer__email">
              <Typography>{this.props.user.email}</Typography>
            </div>
          </div>
          <div onClick={this._profile.bind(this)} className="sidebar-footer__action">
            <Icon>account_circle</Icon>
          </div>
        </div>  
      </Paper>
    );
  }
}

export default connect((state) => {
  return {
    user: state.auth.user,
    token: state.auth.token
  }
}, (dispatch) => ({
  logout: () => dispatch(logout())
}))(withRouter(styled(Sidebar)`
  .sidebar-header-image{
    background-image: url(${Logo});
  }
`));
