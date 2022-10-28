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


const getMessagebyConversation = (req, res)=>{
  const conversationId = req.params.conversation_id
  messageControllers.getMessagebyConversation(conversationId)
      .then(data=>{
          res.status(200).json(data)
      })
      .catch(err=>{
          res.status(400).json({message: err.message})
      })
}
module.exports = {
  createMessage,
  getMessagebyConversation
}