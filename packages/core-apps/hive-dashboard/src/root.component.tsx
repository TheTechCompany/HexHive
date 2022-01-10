import { Dashboard } from "./dashboard";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AuthProvider } from "@hexhive/auth-ui";

const { NODE_ENV, REACT_APP_API, REACT_APP_URL } = process.env;

const client = new ApolloClient({
  uri: REACT_APP_API ?  `${REACT_APP_API}/graphql` : 'http://localhost:7000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})


export default function Root(props) {
  return <ApolloProvider client={client}>
        <AuthProvider
      authorizationServer={NODE_ENV == 'production' ? (REACT_APP_API || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
      >
        <Dashboard />
      </AuthProvider>
    </ApolloProvider>
}
