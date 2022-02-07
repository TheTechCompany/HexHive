import { Dashboard } from "./dashboard";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AuthProvider } from "@hexhive/auth-ui";

const { NODE_ENV, REACT_APP_API, REACT_APP_URL } = process.env;

const API_URL = localStorage.getItem('HEXHIVE_API');

const client = new ApolloClient({
  uri: API_URL ?  `${API_URL}/graphql` : 'http://localhost:7000/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
})


export default function Root(props) {
  return <ApolloProvider client={client}>
    <AuthProvider
      authorizationServer={NODE_ENV == 'production' ? (API_URL || "https://staging-api.hexhive.io") : 'http://localhost:7000'}
      >
        <Dashboard />
      </AuthProvider>
    </ApolloProvider>
}
