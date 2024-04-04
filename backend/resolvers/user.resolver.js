import { users } from "../dummyData/data.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

const userResolver = {
  Mutation: {
    signUp: async (_, { input }, context) => {
      try {
        const { username, name, password, gender } = input;

        if (!username || !name || !password || !gender) {
          throw new Error("All fields are required");
        }
        const exisitingUser = await User.findOne({ username });
        if (exisitingUser) {
          throw new Error("User already Exists");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `http://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `http://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
          username,
          name,
          password: hashedPassword,
          gender,
          profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (err) {
        console.log("Error in Signup : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },

    login: async (_, { input }, context) => {
      try {
        const { username, password } = input;
        if (!username || !password) throw new Error("All fileds are required");
        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });
        await context.login(user);
        return user;
      } catch (err) {
        console.log("Error in Login : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
    logout: async (_, args, context) => {
      try {
        await context.logout();
        context.req.session.destroy((err) => {
          if (err) throw new Error(err.message || "Internal Server Error");
        });
        context.res.clearCookie("connect.sid");
        return { message: "Logged out successfully" };
      } catch (error) {
        console.log("Error in Logout : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
  },
  Query: {
    authUser: async (_, args, context) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (err) {
        console.log("Error in get user : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
    user: async (_, { userId }) => {
      try {
        const user = await User.findById({ userId });
        return user;
      } catch (err) {
        console.log("Error in get user query : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
  },
};

export default userResolver;
