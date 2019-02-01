var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    username: String,
    password: String,
    bio: String,
    isAdmin: String
});