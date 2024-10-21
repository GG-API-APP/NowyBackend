const express = require('express')
const {
  connectToDatabase,
  getInitialSenderPair,
  getToken,
  sendMessage
} = require('./utils')
const cors = require('cors')
const { Message, Pair } = require('./models')
const path = require('path')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

const sendMessageWithToken = async (receiverNumber, message) => {
  const data = await getToken()
  await sendMessage(
    receiverNumber,
    message,
    data.botmaster.server,
    data.botmaster.token
  )
}

// Middleware
app.use(cors())
app.use([express.json(), express.text()])

// Połącz z bazą danych
connectToDatabase()

// Endpointy

app.get(`/${process.env.BOTGG_ID}.html`, (req, res) => {
  res.sendFile(path.join(__dirname + `/assets/${process.env.BOTGG_ID}.html`))
})

app.post(`/${process.env.BOTGG_ID}.html`, async (req, res) => {
  res.send('')
  const initialSender = req.query.from // Parametr z URL
  const originalMessage = req.body
  const message = req.body

  const initialSenderPairNumber = await getInitialSenderPair(
    initialSender,
    originalMessage,
    message
  )

  const conversationId = [initialSender, initialSenderPairNumber || 'unknown']
    .sort()
    .join('_')

  const mongoMessage = new Message({
    conversationId,
    authorPerson: initialSender,
    originalMessage,
    message
  })

  if (initialSenderPairNumber) {
    sendMessageWithToken(initialSenderPairNumber, message)
  }

  await mongoMessage.save()
})

app.get('/conversations', async (req, res) => {
  console.log(req.query.page)
  const lastConversationData = await Pair.find()
    .skip((req.query.page + 1) * 10)
    .limit(10)
    .sort({ updatedAt: -1 })
  res.send(lastConversationData)
})

// Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
