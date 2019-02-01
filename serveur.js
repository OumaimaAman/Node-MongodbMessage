var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config/config');

//Instanciation 
var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(morgan('dev'));
mongoose.connect(config.mongoose.url);

server.get('/',function(req,res){
   return res.status(200).json({
        'message':'bonjour '
    });
});
server.use('/api/',apiRouter);

server.listen(3000, function(){
    console.log('server en ecoute');
});

