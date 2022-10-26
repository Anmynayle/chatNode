const Message = require('../models/conversations.models')

const createMessage = async (data) => {
    const response = await Message.create({
        id: UUID.v4(),
        message: data.message,
        userId: data.userId,
        conversationId: data.conversationId
    })
    return response
};

createMessage({
    message: 'hola anmy',
    userId: '8bf1e2cc-dc06-4002-8f5e-be3933a185a8',
    conversationId: '1c66cf2b-fdeb-4cf9-8395-458be311c135'
}).then(res => console.log(res)).catch(err => console.log(err))

module.exports = {
    createMessage

};