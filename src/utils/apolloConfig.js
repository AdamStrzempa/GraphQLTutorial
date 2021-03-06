import ApolloClient, { createNetworkInterface } from 'apollo-client'
import gql from 'graphql-tag'

const config = {
  scapholdUrl: 'https://us-west-2.api.scaphold.io/graphql/react-co'
}

const opts = {uri: config.scapholdUrl}
const networkInterface = createNetworkInterface(opts)
const client = new ApolloClient({
  networkInterface,
})

export default client