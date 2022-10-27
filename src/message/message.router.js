const router = require('express').Router()

const messageServices = require('./message.services')
const {getConversationMessage} = require('../conversations/conversation.services')
const passport = require('passport')


router.route('/:conversation_id/message')
    .post(
        passport.authenticate('jwt',{session:false}),
        messageServices.createMessage)

router.route('/:conversation_id/message')
    .get(getConversationMessage)


module.exports = router

