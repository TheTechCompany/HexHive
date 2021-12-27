import { Grommet } from "grommet";
import React from "react";
import { BaseStyle } from "@hexhive/styles";
import { Header } from "./components/Header";
import { AuthProvider } from "@hexhive/auth-ui";
export default function Root(props) {
  return (
    <AuthProvider
      authorizationServer={
        process.env.NODE_ENV == "production"
          ? process.env.REACT_APP_API || "https://staging-api.hexhive.io"
          : "http://localhost:7000"
      }
      returnTo={
        process.env.NODE_ENV == "production"
          ? `${process.env.REACT_APP_URL}/dashboard/files`
          : "http://localhost:3000/dashboard/files"
      }
    >
      <Grommet theme={BaseStyle}>
        <Header />
        <div style={{ width: "100%", height: "42px" }} />
      </Grommet>
    </AuthProvider>
  );
}
