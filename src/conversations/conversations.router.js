const router = require('express').Router()

const passport = require('passport')

const conversationServices = require('./conversation.services')
const messageServices = require('../message/message.services')
const participantsServices = require('../participants/participants.services')
require('../middlewares/auth.middleware')

router.route('/')
    .get(
        passport.authenticate('jwt',{session:false}),
        conversationServices.getAllConversation)

    .post(
        passport.authenticate('jwt',{session:false}),
        conversationServices.createConversation)
        
router.route('/:conversation_id')
    .get(
        passport.authenticate('jwt', {session: false}),
        conversationServices.getConversationById)
    .patch(
        passport.authenticate('jwt',{session: false}),
        conversationServices.patchConversation
        )
    .delete(
        passport.authenticate('jwt', {session:false}),
        conversationServices.deleteConversation
    )
router.route('/:conversation_id/message')
    .post(
     passport.authenticate('jwt',{session:false}),
     messageServices.createMessage
    )

    .get(
        passport.authenticate('jwt',{session:false}),
        messageServices.getMessagesbyConversation
    )
    
router.route('/:conversation_id/message/:message_id')
    .get(
        passport.authenticate('jwt',{session:false}),
        messageServices.getMessagesIdbyConversation
    )
    .delete(
        passport.authenticate('jwt',{session:false}),
        messageServices.deleteMessage
    )


    router.route('/:conversation_id/participants')
    .post(
     passport.authenticate('jwt',{session:false}),
     participantsServices.createParticipants
    )

    .get(
        passport.authenticate('jwt',{session:false}),
        participantsServices.getParticipantsbyConversation
    )

    router.route('/:conversation_id/participants/:participants_id')
    .get(
        passport.authenticate('jwt',{session:false}),
        participantsServices.getParticipantsIdbyConversation
    )
    .delete(
        passport.authenticate('jwt',{session:false}),
        participantsServices.deleteParticipants
    )

    
module.exports = router