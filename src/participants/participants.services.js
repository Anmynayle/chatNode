const participantsControllers = require('./participants.controllers')

const getParticipantsbyConversation = (req, res)=>{
    const conversationId = req.params.conversation_id
    participantsControllers.getParticipantsbyConversations(conversationId)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(400).json({message: err.message})
        })
  }

  const createParticipants = (req, res) => {
    const userId = req.user.id
    const conversationId = req.params.conversation_id 
      participantsControllers.createParticipants({  userId, conversationId })
        .then((data) => {
          res.status(201).json(data);
        })
        .catch((err) => {
          res.status(400).json({ message: err.message });
        });
   
  }
  module.exports = {
    getParticipantsbyConversation,
    createParticipants
  }