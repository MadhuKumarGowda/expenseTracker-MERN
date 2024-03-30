import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    Users: () => {
      return users;
    },
    user: (_, { userId }) => {
      return users.find((user) => userId === user._id);
    },
  },
  Mutation: {},
};

export default userResolver;