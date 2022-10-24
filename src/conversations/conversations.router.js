const router = require('express').Router()

const passport = require('passport')

const conversationServices = require('./conversation.services')
require('../middlewares/auth.middleware')

router.route('/')
    .get(passport.authenticate('jwt',{session:false}),
        conversationServices.getConversationById
        )
    .post(
        passport.authenticate('jwt',{session:false}),
        conversationServices.startConversation
    )

module.exports = router