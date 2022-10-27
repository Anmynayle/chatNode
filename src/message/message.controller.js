const Message = require('../models/conversations.models')
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

createMessage({
    message: 'hola anmy',
    userId: '8bf1e2cc-dc06-4002-8f5e-be3933a185a8',
    conversationId: '33517f66-b10a-490b-b48d-543fe0693765'
}).then(res => console.log(res)).catch(err => console.log(err))

module.exports = {
    createMessage

};