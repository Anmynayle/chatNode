const messageControllers = require('./message.controller');

const createMessage = (req, res) => {
  const userId = req.user.id
  const conversationId = req.params.conversation_id
  const {message} = req.body

  if (message) {
    messageControllers.createMessage({ message, userId, conversationId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        title: 'string',
        content: 'string',
        categoryId: 'uuid'
      }
    })
  }
}


const getMessagesbyConversation = (req, res)=>{
  const conversationId = req.params.conversation_id
  messageControllers.getMessagesbyConversation(conversationId)
      .then(data=>{
          res.status(200).json(data)
      })
      .catch(err=>{
          res.status(400).json({message: err.message})
      })
}

const getMessagesIdbyConversation = (req, res)=>{
  const conversationId = req.params.conversation_id
  const messageId = req.params.message_id
  messageControllers.getMessagesIdbyConversation(conversationId, messageId)
      .then(data=>{
          res.status(200).json(data)
      })
      .catch(err=>{
          res.status(400).json({message: err.message})
      })
}

const deleteMessage = (req,res)=>{
  const conversationId = req.params.conversation_id
  const messageId = req.params.message_id
  messageControllers.deleteMessage(conversationId,messageId)
    .then(data=>{
      if(data){
      res.status(200).json();
      }else{
        res.status(404).json({message: "invalid Id"})
      }
    })
    .catch(err=>{
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  createMessage,
  getMessagesbyConversation,
  getMessagesIdbyConversation,
  deleteMessage
}