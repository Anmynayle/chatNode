const { UUID } = require('sequelize')
const Conversation = require('../models/conversations.models')

const getConversationById = async (id) => {
    const data = await Conversation.findOne({
        where:{
            id
        },
        include:[
            {
                model: Users,
                as:'user',
                attributes:{
                    exclude:['password','createAt']
                }
            }
        ]
    })
    return data
}

const startConversation = async (data)=>{
    const response = await Conversation.start({
        id: UUID.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId,
    })
    return response
}

module.exports = {
    startConversation,
    getConversationById
}