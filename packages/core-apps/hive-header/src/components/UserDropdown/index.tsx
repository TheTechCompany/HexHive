import { useAuth } from "@hexhive/auth-ui";
import { Box, Text, Collapsible, Layer, List, Menu } from "grommet";
import React, { useState } from "react";
import { withTheme } from "styled-components";
import { Logout } from "grommet-icons";
import { Profile, Settings } from "@hexhive/icons";

export const UserDropdown = () => {
  const { activeUser } = useAuth();
  const [open, setOpen] = useState<boolean>(false);

  const menu = [
    {
      icon: <Settings height="30px" width="20px" />,
      label: "Settings",
      onClick: () => {},
    },
    {
      icon: <Logout color="black" size="15px" />,
      label: "Log out",
      onClick: () => {
        window.location.href = `${
          process.env.NODE_ENV == "production"
            ? process.env.REACT_APP_API || "https://staging-api.hexhive.io"
            : "http://localhost:7000"
        }/logout`;
      },
    },
  ];

  console.log("user dropdown", activeUser);
  return (
    <>
      <Box
        focusIndicator={false}
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", position: "relative", zIndex: 9 }}
        background="rgba(255, 255, 255, 0.2)"
        align="center"
        pad={{ horizontal: "small", vertical: "xxsmall" }}
        round="medium"
        gap="xsmall"
        direction="row"
      >
        <Text size="small">
          {activeUser?.name || process.env.NODE_ENV == "production"
            ? activeUser?.name
            : "Test User"}
        </Text>
        <Profile height="15px" />

        <Box
          background="brand"
          style={{
            filter: "invert(0.222)",
            position: "absolute",
            top: "110%",
            left: 0,
            right: 0,
          }}
        >
          <Collapsible direction="vertical" open={open}>
            <List
              pad="none"
              onClickItem={({ item }) => item.onClick()}
              data={menu}
            >
              {(datum) => (
                <Box
                  pad="xsmall"
                  gap="xsmall"
                  align="center"
                  justify="between"
                  direction="row"
                >
                  {datum.icon}
                  <Text size="small">{datum.label}</Text>
                </Box>
              )}
            </List>
          </Collapsible>
        </Box>
      </Box>
    </>
  );
};
