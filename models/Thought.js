const moment = require('moment');
const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Please enter your thought!',
      minlength: [1, 'Must be between 1 and 280 characters'],
      maxlength: [280, 'Must be between 1 and 280 characters']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
      type: String,
      required: 'Please enter your username!'
    },
    // reference to reactionSchema needs to go here
    reactions: []
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;