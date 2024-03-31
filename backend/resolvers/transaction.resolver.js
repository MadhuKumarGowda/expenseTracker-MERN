import Transaction from "../models/transaction.model.js";
const transactionResolver = {
  Query: {
    transaction: async (_, _, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorised");
        const userId = await context.getUser()._id;

        const transactions = await Transaction.find({ userId: userId });
        return transactions;
      } catch (err) {
        console.log("Error in transaction : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (err) {
        console.log("Error Getting transaction : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
  },
  Mutation: {
    createTransaction: async (_, { input }, context) => {
      try {
        const newTransaction = new Transaction({
          ...input,
          userId: context.getUser()._id,
        });
        await newTransaction.save();
        return newTransaction;
      } catch (err) {
        console.log("Error Creating transaction : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
    updateTransaction: async (_, { input }) => {
      try {
        const updateTransaction = await Transaction.findByIdAndUpdate(
          input.transactionId,
          { new: true }
        );
        return updateTransaction;
      } catch (err) {
        console.log("Error Updating transaction : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
    deleteTransaction: async (_, { transactionId }) => {
      try {
        const deleteTransaction = await Transaction.findByIdAndDelete(
          input.transactionId
        );
        return deleteTransaction;
      } catch (err) {
        console.log("Error deleting transaction : ", err);
        throw new Error(err.message || " Internal Server Error");
      }
    },
  },
};

export default transactionResolver;
