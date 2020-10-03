const router = require('express').Router();

// endpoint /api/users/
  // get all users
  // post new user

// endpoint /api/users/:userId
  // get one user by id
  // update one user by id
  // delete one user by id (bonus to delete associated thoughts)

// endpoint /api/users/:userId/friends/:friendId
  // post to add a new friend to a user's friend list
  // delete to remove a friend from a user's friend list

module.exports = router;