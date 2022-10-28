const router = require('express').Router()


const { getMessagebyConversation} = require('./message.services')


// router.route('/:conversation_id/message')
//     .post(
//         passport.authenticate('jwt',{session:false}),
//         messageServices.createMessage)

router.route('/:conversation_id/message')
    .get(
        getMessagebyConversation)


module.exports = router

