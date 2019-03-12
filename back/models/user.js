var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: String,
  friends: [{friendId: String}],
  posts: [{postID: String}]
});

User = mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');