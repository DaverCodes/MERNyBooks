const { Book, User } = require('../models');

//THIS MAY BE COMPLETELY WRONG
//refer to notes

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    users: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return user.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await user.create(args);
      return user;
    },
    createVote: async (parent, { _id, userNum }) => {
      const vote = await User.findOneAndUpdate(
        { _id },
        { $inc: { [`user${userNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
