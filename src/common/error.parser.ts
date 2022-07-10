import { GraphQLError } from 'graphql';

const errorMessage = (err: GraphQLError) => ({
  name: err.name,
  code: err.extensions?.exception?.code,
  message: err.message,
});

export { errorMessage };
