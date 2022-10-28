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


const getParicipantsIdbyConversation = async (conversationId, id)=>{
    const data = await Participants.findAll({
        where:{
            conversationId,
            id
        }
    })
    return data
}

const deleteParticipants = async (conversationId,id)=>{
    const data = await Participants.destroy({
        where:{
            conversationId,
            id
        }
    })
    return data
}
module.exports ={
    getParticipantsbyConversations,
    createParticipants,
    getParicipantsIdbyConversation,
    deleteParticipants
}