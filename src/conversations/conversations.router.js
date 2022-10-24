const router = require('express').Router()

const passport = require('passport')

const conversationServices = require('./conversation.services')
require('../middlewares/auth.middleware')

// router.get('/', conversationServices.getAllConversation)

router.route('/')
    .get(
        passport.authenticate('jwt',{session:false}),
        conversationServices.getAllConversation)

    .post(
        passport.authenticate('jwt',{session:false}),
        conversationServices.createConversation
    )

module.exports = router