const uuid = require('uuid')
const Conversation = require('../models/conversations.models')
const Users = require('../models/users.models')

// const getConversationById = async (id) => {
//     const data = await Conversation.findOne({
//         where:{
//             id
//         },
//         include:[
//             {
//                 model: Users,
//                 as:'user',
//                 attributes:{
//                     exclude:['password','createAt']
//                 }
//             }
//         ]
//     })
//     return data
// }


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

module.exports = {
    createConversation,
    getAllConversation
}