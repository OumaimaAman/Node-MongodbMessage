var express = require('express');
var users = require('./routes/usersCtrl');
var messages = require('./routes/messagectrl');

exports.router = (function(){

    var apiRouter = express.Router();

    apiRouter.route('/users/register').post(users.register);
    apiRouter.route('/users/login').post(users.login);
    apiRouter.route('/users/me').get(users.getUserProfil);
    apiRouter.route('/users/me').put(users.UpdateUserProfil);

    apiRouter.route('/message/new').post(messages.createMessage);
    apiRouter.route('/messages').get(messages.ListMessage);
    return apiRouter;
})();