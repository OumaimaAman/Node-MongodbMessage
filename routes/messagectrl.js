var jwtUtils = require('../utils/jwt.utils');
var user = require('../models/users');
var message = require('../models/message');
var mongoose = require('mongoose');


module.exports = {

    createMessage : function(req,res){

        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);

        
        var title = req.body.title;
        var content = req.body.content;

        if(title == null || content == null){
            return res.status(400).json({'error' : 'missing parameters'});
        }

        if(title.length <= 2 || content.length <= 4){
            return res.status(400).json({'error': 'invalid parametres '});
        }
        user.findOne({
            _id: userId
        }).then((userFound)=>{
            ('ici',userFound._id);
            var newMessage = message({
                _id : mongoose.Types.ObjectId(),
                title: title,
                content: content,
                likes: 0,
                user : userFound._id
            });
            newMessage.save()
            .then(result=>{
                return res.status(200).json(result);
            }).catch(err=>{
                return res.status(500).json(err);
            })
            
        }).catch(err=>{
            return res.status(500).json({'error': 'unable to verify user'});
         });
    },

    ListMessage : (req,res)=>{

        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);
        
        var fields  = req.query.fields;
        var limit   = parseInt(req.query.limit);
        var offset  = parseInt(req.query.offset);
        var order   = req.query.order;

        message.find({
        user : userId
         }).then(result=>{
                return res.status(200).json(result);
            }).catch(err=>{
                return res.status(500).json(err);
            })
    
}

}