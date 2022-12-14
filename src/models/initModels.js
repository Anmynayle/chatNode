const Users = require('./users.models')
const Conversation = require('./conversations.models')
const Participants = require('./participants.model')
const Message = require('./message.models')

const initModels = () =>{
    //? Una conversacion pertenece a un usuario
    Conversation.belongsTo(Users)
    //? Un usuario puede tener muchas conversaciones
    Users.hasMany(Conversation)

    Participants.belongsTo(Users)
    Users.hasMany(Participants)

    Participants.belongsTo(Conversation)
    Conversation.hasMany(Participants)

    Message.belongsTo(Users)
    Users.hasMany(Message)

    Message.belongsTo(Conversation)
    Conversation.hasMany(Message)
    
    // Users.belongsToMany(Conversation, {through: Participants});
    // Conversation.belongsToMany(Users, {through: Participants});

    // Users.belongsToMany(Conversation, {through: Message});
    // Conversation.belongsToMany(Users, {through: Message});

}

module.exports = initModels