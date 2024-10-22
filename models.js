const mongoose = require('mongoose')

const pairSchema = new mongoose.Schema(
  {
    personOne: { type: String, required: true },
    personOneName: { type: String, required: false },
    personOneDescription: { type: String, required: false },
    personTwo: { type: String, required: false },
    personTwoName: { type: String, required: false },
    personTwoDescription: { type: String, required: false },
    personTwoDetails: { type: String, required: false },
    lastOriginalMessge: { type: String, required: true },
    lastMessge: { type: String, required: true },
    messageCount: { type: Number, required: true }
  },
  { timestamps: true }
)
const Pair = mongoose.model('Pair', pairSchema)

const messageSchema = new mongoose.Schema(
  {
    conversationId: { type: String, required: true },
    authorPerson: { type: String, required: true },
    originalMessage: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)
const Message = mongoose.model('Message', messageSchema) // Poprawka: użyj messageSchema zamiast pairSchema

// Eksportowanie obu modeli
module.exports = { Pair, Message }
