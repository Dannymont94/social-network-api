const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// endpoint /api/thoughts/
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// endpoint /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought);
  
// endpoint /api/thoughts/:userId/:thoughtId
router
  .route('/:userId/:thoughtId')
  .delete(deleteThought);

// endpoint /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

// endpoint /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;