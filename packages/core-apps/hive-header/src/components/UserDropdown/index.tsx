import { useAuth } from "@hexhive/auth-ui";
import { Box, Typography, MenuItem, MenuList, List, Menu, Collapse, Card, IconButton, Divider, Checkbox, Radio } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { withTheme } from "styled-components";
// import { Logout } from "grommet-icons";
import { ArrowBack, Logout, Settings } from '@mui/icons-material'
// import { Profile, Settings } from "@hexhive/icons";
import { HexHiveTheme } from '@hexhive/styles'

const API_URL = localStorage.getItem('HEXHIVE_API');


export const UserDropdown = () => {
  const { activeUser } = useAuth();
  const [open, setOpen] = useState<boolean>(false);

  const [view, setView] = useState('default');

  useEffect(() => {
    if (!open) setView('default')
  }, [open])

  const anchorEl = useRef<any>()

  const menu = [
    {
      icon: <Settings />,
      label: "Settings",
      onClick: () => { },
    },
    {
      icon: <Logout />,
      label: "Log out",
      onClick: () => {
        window.location.href = `${process.env.NODE_ENV == "production"
            ? API_URL || "https://staging-api.hexhive.io"
            : "http://localhost:7000"
          }/logout`;
      },
    },
  ];

  console.log("user dropdown", activeUser);

  const renderOrganisationList = () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" onClick={() => {
            setView('default')
          }}>
            <ArrowBack fontSize="inherit" />
          </IconButton>
          <Typography sx={{marginLeft: '12px'}}>Select Organisation</Typography>
        </Box>

        <Divider />
        <MenuList dense>
        {activeUser?.organisations?.map((organisation) => (
          <MenuItem sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>{organisation.name}</Typography>
            <Radio checked={organisation.id == activeUser.organisation} size="small" />
          </MenuItem>
        ))}
        </MenuList>

      </Box>
    )
  }

  const renderDefaultView = () => {
    return (
      <>
        <Card
          elevation={3}
          sx={{ display: 'flex', marginBottom: '12px', flexDirection: 'column' }}
          onClick={(e) => {
            e.stopPropagation()
            setView('organisations')
          }}>
          <MenuItem>
            Ultraviolet Ltd
          </MenuItem>
          <MenuItem>
            See all organisations
          </MenuItem>
        </Card>
        {menu.map((menu_item) => (
          <MenuItem
            onClick={() => menu_item.onClick()}>
            {menu_item.icon}
            <Typography sx={{ marginLeft: '12px' }}>{menu_item.label}</Typography>
          </MenuItem>
        ))}
      </>
    )
  }

  return (
    <>
      <Box
        ref={anchorEl}
        onClick={() => setOpen(true)}
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
          <Box
            sx={{ height: '10px', width: '10px', border: `3px solid ${HexHiveTheme.palette.secondary.light}`, marginRight: '6px', borderRadius: '15px' }}
          />

          <Typography >
            {activeUser?.name || process.env.NODE_ENV == "production"
              ? activeUser?.name
              : "Test User"}
          </Typography>


        </Box>
      </Box>
      <Menu
        onClose={() => setOpen(false)}
        sx={{margin: '6px'}}
        MenuListProps={{ sx: { padding: '6px', minWidth: '250px'} }}
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
        {view == 'default' ? renderDefaultView() : renderOrganisationList()}
      </Menu>
    </>
  );
};
