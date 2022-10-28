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

const getMessagebyConversation = async (conversationId)=>{
    const data = await Message.findAll({
        where:{
            conversationId
        }
    })
    return data
}
// //*test mesagge por conversation 
// getMessagebyConversation('d2cf4232-9bd8-4b04-a809-3ff6bb80c58e')
//      .then(response=>{
//         console.log(response)
//      })
//      .catch(err=>{
//          console.log(err)
//      })


module.exports = {
    createMessage,
    getMessagebyConversation
};