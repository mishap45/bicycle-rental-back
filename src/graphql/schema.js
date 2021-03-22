const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Login {
    id: ID,
    email: String,
    password: String,
    birthday: String,
    tarriff: String,
    payCardNumber: String,
    payCardDate: String,
    payCardBackNumber: String
  }
  type Query {
    listUsers: [Login]
  }
  type Mutation {
    createUser(
      email: String!, 
      password: String!, 
      birthday: String!,
      tarriff: String!,
      payCardNumber: String!,
      payCardDate: String!,
      payCardBackNumber: String!
    ): Login
    updateUser(id: String!, tarriff: String!): Login
    deleteUser(id: String!): String
  }
`);