const Participants = require('../models/participants.model')
const uuid = require('uuid')

const getParticipantsbyConversations = async (conversationId)=>{
    const data = await Participants.findAll({
        where:{
            conversationId
        }
    })
    return data
}

const createParticipants = async (data) => {
    const response = await Participants.create({
        id:uuid.v4(),
        userId: data.userId,
        conversationId: data.conversationId
    })
    return response
};

module.exports ={
    getParticipantsbyConversations,
    createParticipants
}