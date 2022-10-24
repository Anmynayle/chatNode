const conversationController = require('./conversations.controller')

const startConversation = (req, res) =>{
    const userId = req.user.id
    const {title,imageUrl} = req.body
    if(title && imageUrl){
        conversationController.startConversation({title, imageUrl,userId})
            .then(data =>{
                res.status(200).json(data)
            })
            .catch(err=>{
                res.status(400).json({message: err.message})
            })
    }else {
        res.status(400).json({
            message:'Missing Data',
            fields:{
                title:'string',
                imageUrl:'string'
            }
        })
    }
}

const getConversationById = (req, res)=>{
     const userId = req.user.id;
     conversationController.getConversationById(userid)
     .then((data)=>{
        res.status(200).json(data);
     })
     .catch((err)=>{
        res.status(404).json({message: err.message});

     });
    };

    module.exports = {
        getConversationById,
        startConversation
    }

