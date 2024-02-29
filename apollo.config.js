import { createApolloClient } from "@apollo/client";

const apolloClient = createApolloClient({
  uri: "https://my-graphql-api.com/graphql",
});

export default apolloClient;