import { Grommet } from "grommet";
import React from "react";
import { HexHiveTheme } from "@hexhive/styles";
import { Header } from "./components/Header";
import { AuthProvider } from "@hexhive/auth-ui";
import { ThemeProvider } from "@mui/material";

const API_URL = localStorage.getItem('HEXHIVE_API');


export default function Root(props) {
  return (
    <AuthProvider
      authorizationServer={
        process.env.NODE_ENV == "production"
          ? API_URL || "https://staging-api.hexhive.io"
          : "http://localhost:7000"
      }
    >
      <ThemeProvider theme={HexHiveTheme}>
        <Header />
        <div style={{ width: "100%", height: "42px" }} />
      </ThemeProvider>
    </AuthProvider>
  );
}
