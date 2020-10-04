const { User, Thought } = require('../models');

const userController = {
  // get all users
  async getAllUsers(req, res) {
    try {
      const dbUserInfo = await User.find();

      res.status(200).json(dbUserInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  // get one user by id
  async getUserById(req, res) {
    try {
      const dbUserInfo = await User.findOne({ _id: req.params.userId })
        .populate({
          path: 'thoughts friends',
          select: '-__v'
        })
        .select('-__v');

      if (!dbUserInfo) {
        res.status(404).json({ message: `No user found with that id.` });
        return;
      }

      res.status(200).json(dbUserInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // post new user
  async createUser(req, res) {
    try {
      const { username, email } = req.body;

      const dbUserInfo = await User.create({ username, email });

      res.status(200).json(dbUserInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  // update one user by id
  async updateUser(req, res) {
    try {
      const { username, email } = req.body;

      const dbUserInfo = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { username, email },
        { new: true, runValidators: true }
      );

      if (!dbUserInfo) {
        res.status(404).json({ message: `No user found with that id.` });
        return;
      }

      res.status(200).json(dbUserInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  
  // delete one user by id (bonus: delete associated thoughts)
  async deleteUser(req, res) {
    try {
      const dbUserInfo = await User.findByIdAndDelete({ _id: req.params.userId });

      if (!dbUserInfo) {
        res.status(404).json({ message: `No user found with that id.` });
        return;
      }

      res.status(200).json(dbUserInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  // post new friend to a user's friend list
  async addFriend(req, res) {
    try {
      const dbUserInfo = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );

      if (!dbUserInfo) {
        res.status(404).json({ message: `No user found with that id.` });
        return;
      }

      res.status(200).json(dbUserInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // delete friend from user's friend list
  async removeFriend(req, res) {
    try {
      const dbUserInfo = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );

      if (!dbUserInfo) {
        res.status(404).json({ message: `No user found with that id.` });
        return;
      }

      res.status(200).json(dbUserInfo);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = userController;