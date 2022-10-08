import { useAuth } from "@hexhive/auth-ui";
import { Box, Typography, MenuItem, MenuList, List, Menu } from "@mui/material";
import React, { useState, useRef } from "react";
import { withTheme } from "styled-components";
// import { Logout } from "grommet-icons";
import { Logout, Settings } from '@mui/icons-material'
// import { Profile, Settings } from "@hexhive/icons";
import { HexHiveTheme } from '@hexhive/styles'

const API_URL = localStorage.getItem('HEXHIVE_API');


export const UserDropdown = () => {
  const { activeUser } = useAuth();
  const [open, setOpen] = useState<boolean>(false);

  const anchorEl = useRef<any>()

  const menu = [
    {
      icon: <Settings  />,
      label: "Settings",
      onClick: () => {},
    },
    {
      icon: <Logout />,
      label: "Log out",
      onClick: () => {
        window.location.href = `${
          process.env.NODE_ENV == "production"
            ? API_URL || "https://staging-api.hexhive.io"
            : "http://localhost:7000"
        }/logout`;
      },
    },
  ];

  console.log("user dropdown", activeUser);
  return (
    <>
      <Box
        ref={anchorEl}
        onClick={() => setOpen(!open)}
        sx={{ 
          cursor: "pointer", 
          position: "relative", 
    
          boxShadow: `0px 0px 2px 2px ${HexHiveTheme.palette.secondary.light}`,
          borderRadius: '3px',
          zIndex: 9, 
          display: 'flex', 
          alignItems: 'center' 
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '3px',
            paddingLeft: '6px',
            paddingRight: '6px',
          }}>
        <Box sx={{height: '10px', width: '10px', border: `3px solid ${HexHiveTheme.palette.secondary.light}`, marginRight: '6px', borderRadius: '15px'}} height="15px" />

        <Typography >
          {activeUser?.name || process.env.NODE_ENV == "production"
            ? activeUser?.name
            : "Test User"}
        </Typography>

        <Box
         
        >
          <Menu 
            anchorEl={anchorEl.current}
            transformOrigin={{
              horizontal: 'right',
              vertical: 'top'
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            autoFocus={false}
            open={open}>
              
              {menu.map((menu_item) => (
                <MenuItem
                  onClick={() => menu_item.onClick()}>
                  {menu_item.icon}
                  <Typography>{menu_item.label}</Typography>
                </MenuItem>
              ))}
          </Menu>
        </Box>
        </Box>
      </Box>
    </>
  );
};
