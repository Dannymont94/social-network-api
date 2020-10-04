const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// endpoint /api/users/
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// endpoint /api/users/:userId
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// endpoint /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;