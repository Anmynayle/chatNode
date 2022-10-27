const { response } = require('express')
const uuid = require('uuid')
const Conversation = require('../models/conversations.models')
const Users = require('../models/users.models')

 const getConversationById = async (id) => {
     const data = await Conversation.findOne({
         where:{
             id
         }
    })
     return data
 }


const getAllConversation = async ()=>{
    const data = await Conversation.findAll({
        attributes:{
            exclude:['createdAt','updatedAt']
        },
        include:[
            {
                model:Users,
                as:'user',
                attributes:{
                     exclude:['password','createdAt','gender','birthday','updatedAt']
                 }
            }
        ]
    })
    return data
}

const createConversation = async (data)=>{
    const response = await Conversation.create({
        id: uuid.v4(),
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId,
    })
    return response
}

const updateConversation = async (id, data) => {
    const result = await Conversation.update(data,{
        where:{
            id
        }
    })
    return result
}

const deleteConversation = async (id) =>{
    const data = await Conversation.destroy({
        where:{
            id
        }
    })
    return data
}

const getConversationMessage = async (messageId)=>{
    const data = await Conversation.findAll({
        where:{
            messageId
        }
    })
    return data
}
// getConversationMessage('1c66cf2b-fdeb-4cf9-8395-458be311c135')
//     .then(response=>{
//         console.log(response)
//     })
//     .catch(err=>{
//         console.log(err)
//     })




module.exports = {
    createConversation,
    getAllConversation,
    getConversationById,
    updateConversation,
    deleteConversation,
    getConversationMessage
}