const router = require('express').Router();

// endpoint /api/thoughts/
  // get all thoughts
  // post new thought

// endpoint /api/thoughts/:thoughtId
  // get one thought by id
  // update one thought by id
  // delete one thought by id

// endpoint /api/thoughts/:thoughtId/reactions
  // post new reaction to a thought by id (and push to reactions field)

// endpoint /api/thoughts/:thoughtId/reactions/:reactionId
  // delete a reaction by id from a thought by id (and pull from reactions field)

module.exports = router;