const transactionTypeDef = `#graphql

type Transaction {
    _id: ID!
    userId: ID!
    description: String!
    payementType: String!
    category: String!
    amount: Float!
    location: String
    date: String!
}

type Query {
    transactions : [Transaction!]
    transaction(transactionId: ID!) : Transaction
}

type Mutation{
    createTransaction(input: CreateTransactionInput!) : Transaction!
    updateTransaction(input: updateTransactionInput!) : Transaction!
    deleteTransaction(transactionId:ID!): Transaction!
}

input CreateTransactionInput {
    description: String!
    payementType: String!
    category: String!
    amount: Float!
    location: String
    date: String!
}

input updateTransactionInput {
    transactionId: ID!
    description: String
    payementType: String
    category: String
    amount: Float
    location: String
    date: String
}
`;

export default transactionTypeDef;
