import React from 'react';

import { Box, Text } from 'grommet';

import { User } from 'grommet-icons'

  import styled from 'styled-components'

export interface SidebarProps {
    logo: string 

    className?: string;
    user?: {
        name: string;
        email: string;
    }
    menu: any[];
    active: any;
    onSelect: any;
}
  
export const Sidebar : React.FC<SidebarProps> = (props) => {
  
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
        <Box className={`${props.className} sidebar`}>
          <div className="sidebar-header-image" />
          <ul className="sidebar-menu">
            {props.menu?.map((x, ix) => (
              <li 
                key={`sidebar-${ix}`}
                className={`sidebar-menu-opt ${props.active == "/"+ x.label.toLowerCase() ? "active" : ''} ${ix == 0 &&  props.active == "" ? 'active': ''}`}
                onClick={() => props.onSelect(x.label)}>
                
                {x.alerts > 0 ? ([x.icon, 
                  x.label
                ]) :[x.icon,
                (x.label
              )]}
  
              
              </li>
            ))}
          </ul>
       
        </Box>
      );
  }
  
  export default Sidebar;

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
  