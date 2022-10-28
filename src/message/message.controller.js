const Message = require('../models/message.models')
const uuid = require('uuid')

const createMessage = async (data) => {
    const response = await Message.create({
        id:uuid.v4(),
        message: data.message,
        userId: data.userId,
        conversationId: data.conversationId
    })
    return response
};

const getMessagesbyConversation = async (conversationId)=>{
    const data = await Message.findAll({
        where:{
            conversationId,
        }
    })
    return data
}

const getMessagesIdbyConversation = async (conversationId, id)=>{
    const data = await Message.findAll({
        where:{
            conversationId,
            id
        }
    })
    return data
}

const deleteMessage = async (conversationId,id)=>{
    const data = await Message.destroy({
        where:{
            id,
            conversationId
        }
    })
    return data
}
 //*test mesagge por conversation 
// getMessagesbyConversation('d2cf4232-9bd8-4b04-a809-3ff6bb80c58e')
//      .then(response=>{
//         console.log(response)
//      })
//      .catch(err=>{
//          console.log(err)
//      })


 //*test mesagge for id and  conversation 
// getMessagesIdbyConversation('d2cf4232-9bd8-4b04-a809-3ff6bb80c58e','2fc96b97-36b1-49fb-be43-939cd8fb1a47')
//    .then(response=>{
//          console.log(response)
//       })
//       .catch(err=>{
//           console.log(err)
//       })


module.exports = {
    createMessage,
    getMessagesbyConversation,
    getMessagesIdbyConversation,
    deleteMessage
};