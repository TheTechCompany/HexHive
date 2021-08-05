import React from 'react';

import { Box, Button, Text } from 'grommet';

import { User } from 'grommet-icons'

import styled from 'styled-components'

export interface SidebarProps {
  logo: any

  className?: string;
  user?: {
    name: string;
    email: string;
  }
  menu: any[];
  active: any;
  onLogoClick?: () => void;
  onSelect: any;
}

const BaseSidebar: React.FC<SidebarProps> = (props) => {

  // _logout(){
  //   this.props.logout()
  //   this.props.history.push('/')
  // }

  // _settings(){
  //   this.props.history.push(`${props.match.url}settings`);
  // }

  // _profile(){
  //   this.props.history.push(`${props.match.url}profile`);
  // }

  // const { active, user, menu, logo } = props;

  return (
    <Box
      background={{color: "brand"}}
      elevation="small"
      className={`${props.className} sidebar`}>
      <Button 
        onClick={props.onLogoClick}
        icon={props.logo}
        style={{padding: '10%'}}
        className="sidebar-header-image" >
      </Button>
      <Box margin={{top: 'medium'}} pad={{vertical: 'xsmall'}} className="sidebar-menu">
        {props.menu?.map((x, ix) => (
          <li
            key={`sidebar-${ix}`}
            className={`sidebar-menu-opt ${props.active == ix ? "active" : ''} ${ix == 0 && props.active == "" ? 'active' : ''}`}
            onClick={() => props.onSelect(x.label)}>

            {React.cloneElement(x.icon, {style: {filter: 'invert(1)', fill: '#F3E6DC', minWidth: '20px', maxWidth: '20px'}})}
            <Text size="15px" color={'neutral-1'} margin={{left: 'small'}}>{x.label}</Text>


          </li>
        ))}
      </Box>

    </Box>
  );
}

export const Sidebar = styled(BaseSidebar)`
@media print{
  .sidebar{
    display: none !important;
  }
}

@media (max-width: 600px){
  .sidebar-header-image, .sidebar-admin-option, .sidebar-footer{
    display: none !important;
  }

  .sidebar{
    width: 100% !important;
  }

  .sidebar-menu{
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    justify-content: space-between;
  }
}

@media (min-width: 601px) and (max-width:1024px){
  .sidebar{
    width: 52px !important;
  }
}

@media (max-width: 1025px){

  .sidebar > .sidebar-footer > .sidebar-footer__action{
    flex: 1;
    justify-content: center;
  }
  .sidebar > .sidebar-footer > .sidebar-footer__info{
    display: none;
  }

  .sidebar > .sidebar-menu {
    margin-top: 0px;
  }

  .sidebar-menu > .sidebar-menu-opt{
    font-size: 0px;
  }

  .sidebar > .sidebar-header-image{
    display: none !important;
  }

  .sidebar-admin-option p{
    font-size: 0px;
  }
}

.sidebar-admin-option:hover{ 
 background: rgb(230, 230, 230, 0.2); 
}

.sidebar-admin-option{
  cursor: pointer;
  display: flex;
  color: white;
  align-items: center;
  height: 45px;
  font-size: 18px;
  padding-left: 15px;
}

.sidebar-header-image{
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.sidebar-footer{
  display: flex;
  color: white;
  padding: 8px;
  border-top: 1px solid #e6e6e6;
}

.sidebar-footer__info{
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
}

.sidebar-footer__action{
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: flex-end;
}

.sidebar-footer__email > p{
  font-size: 11px;
  color: #e6e6e6;
}

&.sidebar{
  user-select: none;
  border-radius-top-left: 0px !important;
  border-radius-bottom-left: 0px !important;
  display: flex;
  width: 155px;
  flex-direction: column;
}

.sidebar-header-image{
  height: 60px;
  margin-top: 16px;
  filter: invert(1);
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 15px;
}

.sidebar-menu{
  padding: 0;
  flex: 1;
  list-style: none;
}

.sidebar-menu > li{
  cursor: pointer;
  height: 45px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #e6e6e6;
  padding-left: 15px;
}

.sidebar-menu > li > span {
  margin-right: 15px;
}

.sidebar-menu > li:hover{
 background: rgb(230, 230, 230, 0.2); 
}

.sidebar-menu > li.active{
  background: rgb(230, 230, 230, 0.2);;
}

`

/*
 {user.user_type == "admin" ? (
          <div className="sidebar-admin-option" onClick={this._settings.bind(this)}>
            <Icon style={{marginRight: '15px'}}>supervised_user_circle</Icon>
            <Typography className="sidebar-admin-option__text">Admin</Typography>
          </div>
        ) : null}
*/

//   export default connect((state) => {
//     return {
//       user: state.auth.user,
//       token: state.auth.token
//     }
//   }, (dispatch) => ({
//     logout: () => dispatch(logout())
//   }))(withRouter(styled(Sidebar)`
//     .sidebar-header-image{
//       background-image: url(${Logo});
//     }
//   `));
