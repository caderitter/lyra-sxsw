var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  id: String,
  type: String,
  ref: String,
  timestamp: Date,
  likes: [{userId: String}],
  comments: [{userID: String, body: String, timestamp: Date}]
});

Post = mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');