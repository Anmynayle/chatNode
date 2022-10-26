const router = require('express').Router()

const passport = require('passport')

const conversationServices = require('./conversation.services')
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

module.exports = router