const router = require('express').Router()


const { getMessagesIdbyConversation} = require('./message.services')


// router.route('/:conversation_id/message')
//     .post(
//         passport.authenticate('jwt',{session:false}),
//         messageServices.createMessage)

router.route('/:conversation_id/message/message_id')
    .get(
        getMessagesIdbyConversation)


module.exports = router

