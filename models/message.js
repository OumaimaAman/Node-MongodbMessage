var mongoose = require('mongoose');

module.exports = mongoose.model('Message', {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
    attachement: String,
    likes: String,
    user :{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
});
