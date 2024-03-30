const userTypeDef = `#graphql
  type User{
    _id:ID!
    username: String!
    name:String!
    password: String!
    profilePicture: String
    gender: String!
  }

  type Query{
    Users: [User!]
    authUser: User
    user(userId:ID!) :User
  }

  type Mutation {
    signUp(input: SingupInput): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  input SingupInput{
    username: String!
    name:String!
    password: String!   
    gender: String!
  }

  input LoginInput{
    username: String!
    password: String!
  }

  type LogoutResponse{
    message: String!
  }
`;

export default userTypeDef;
