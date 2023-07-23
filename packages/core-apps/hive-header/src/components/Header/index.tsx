// import {
//   Box,
//   Button,
//   Collapsible,
//   Header as GrommetHeader,
//   Layer,
//   Select,
//   Text,
//   TextInput,
// } from "grommet";

import { 
  Box,
  AppBar,
  Toolbar
} from '@mui/material'

import React, { useRef, useState } from "react";
// import { Hex } from "@hexhive/styles";
// import { Hivelogo, Profile } from "@hexhive/icons";
import Hivelogo from './hivelogo'
import {  HexHiveTheme } from '@hexhive/styles'
import { UserDropdown } from "../UserDropdown";

export const BaseHeader: React.FC<any> = (props) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searching, setSearching] = useState<boolean>(false);
  const searchInput = useRef();
  const views = [
    {
      path: "/flow",
      label: "HiveFlow",
    },
    {
      path: "/command",
      label: "HiveCommand",
    },
    {
      path: "/automate",
      label: "HiveAutomate",
    },
    {
      path: "/files",
      label: "HiveFiles",
    },
    {
      path: "/market",
      label: "HiveMarket",
    },
  ];

  console.log(props.match, window.location);

  return (
    <AppBar
      position="fixed"
      sx={{height: '42px', width: '100%', borderRadius: '0'}}     
    >
      <Toolbar variant="dense" sx={{display: 'flex', height: '42px', minHeight: '42px', paddingLeft: '12px !important', paddingRight: '12px !important'}}>
      <Box 
        onClick={() => (window.location.href = "/dashboard")}
        sx={{display: 'flex', height: '40px', widht: '80px', cursor: 'pointer'}}>
        <Hivelogo 
          fill={HexHiveTheme.palette.secondary.light}
          height="40px"
          width="80px"
        />
        
      </Box>
        <Box
            sx={{flex: 1}}
        
          >
          
         
        </Box>
      <UserDropdown />
      </Toolbar>
    </AppBar>
  );
};

export const Header = BaseHeader;
