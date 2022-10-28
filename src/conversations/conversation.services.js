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
    const userId = req.user.id
    const conversation_id = req.params.conversation_id;
    conversationController
      .getConversationById(conversation_id,userId)
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

const patchConversation = (req,res) =>{
    const user_id = req.user.id
    const conversation_id = req.params.conversation_id;
    const {title,imageUrl} = req.body;

    conversationController.updateConversation(conversation_id,user_id,{title,imageUrl})
    .then((data)=>{
        if(data[0]){
            res.status(200).json({message:`Conversation with ID: ${conversation_id}, edited succesfully!`});    
        }else {
            res.status(404).json({message:"Invalid Id"});
        }
    })
    .catch((err)=>{
        res.status(400).json({message: err.message});
    });
};

const deleteConversation = (req,res) =>{
    const user_id = req.user.id
    const conversation_id = req.params.conversation_id;
     conversationController.deleteConversation(conversation_id,user_id)
     .then((data)=>{
        if(data){
            res.status(204).json();
        }else {
            res.status(404).json({message:"Invalid id conversation"})
        }
     })
     .catch((err)=>{
        res.status(400).json({message: err.message});
     });
    
} 


    module.exports = {
        getAllConversation,
        getConversationById,
        createConversation,
        patchConversation,
        deleteConversation
    }

