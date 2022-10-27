const router = require('express').Router()
const passport = require('passport')

const messageServices = require('./message.services')
const {getConversationMessage} = require('../conversations/conversation.services')


// router.route('/:conversation_id/message')
//     .post(
//         passport.authenticate('jwt',{session:false}),
//         messageServices.createMessage)

router.route('/:conversation_id/message')
    .get(getConversationMessage)


module.exports = router

