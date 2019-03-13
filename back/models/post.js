var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  userId: String,
  ref: String,
  timestamp: Date,
  likes: [{userId: String}],
  comments: [{userId: String, body: String, timestamp: Date}]
});

Post = mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');