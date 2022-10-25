const conversationController = require('./conversations.controller')

const createConversation = (req, res) =>{
    const userId = req.user.id
    const {title,imageUrl} = req.body
    if(title && imageUrl){
        conversationController.createConversation({title, imageUrl,userId})
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

const getConversationById = (req, res) => {
    const conversation_id = req.params.conversation_id;
    conversationController
      .getConversationById(conversation_id)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  };
  

const getAllConversation = (req, res) =>{
    conversationController.getAllConversation()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(400).json({message: err.message})
        })
}

    module.exports = {
        getAllConversation,
        getConversationById,
        createConversation
    }

