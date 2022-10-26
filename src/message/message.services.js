const messageControllers = require('./message.controller');

const createMessage = (req, res) => {
  const message = req.body
  const userId = req.user.id
  const conversationId = req.params.id

  if (message) {
    messageControllers.createMessage({ message, userId, conversationId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Missing Data" });
  }
};

module.exports = {
  createMessage
}