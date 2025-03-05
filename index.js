const express = require('express')
const {
  connectToDatabase,
  getInitialSenderPair,
  getToken,
  sendMessage,
  setStatus,
  validateMessage
} = require('./utils')
const cors = require('cors')
const { Message, Pair } = require('./models')
const path = require('path')
const { escapeRegExp } = require('lodash')
// const { uploadedPhotos, find, replace } = require('./consts')
// const replaceOnce = require('replace-once')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000
let server = ''
let token = ''

const setToken = async () => {
  const data = await getToken()
  server = data.botmaster.server[0]
  token = data.botmaster.token[0]
}
const setTokenWithInterval = async () => {
  try {
    await setToken()
    setStatus(
      process.env.BOTGG_STATUS,
      process.env.BOTGG_DESCRIPTION,
      server,
      token
    )
  } catch (error) {
    console.log(error)
  } finally {
    setInterval(setToken, 900000)
  }
}

// Middleware
setTokenWithInterval()
app.use(cors())
app.use([express.json(), express.text()])

// Ustaw status

// Połącz z bazą danych
connectToDatabase()

// Endpointy

app.get(`/${process.env.BOTGG_ID}.html`, (req, res) => {
  res.sendFile(path.join(__dirname + `/assets/${process.env.BOTGG_ID}.html`))
})

app.post('/', async (req, res) => {
  const initialSender = req.query.from // Parametr z URL
  const originalMessage = req.body
  const message = validateMessage(originalMessage)

  // const oldValidateMessage = (orgMessage) => {
  //   const imageUrlPattern = /\.(jpeg|jpg|png|gif|bmp|webp|tiff|svg)$/i
  //   const videoUrlPattern = /\.(mp4|mkv|avi|mov|wmv|flv|webm)$/i

  //   if (imageUrlPattern.test(orgMessage)) {
  //     const randomIndex = Math.floor(Math.random() * uploadedPhotos.length)
  //     return uploadedPhotos[randomIndex]
  //   }

  //   if (videoUrlPattern.test(orgMessage)) {
  //     return 'Nasz system podejrzewa, że nieznajomy chce Ci przesłać niecenzuralne zdjęcie. Jeżeli godzisz się na otrzymywanie takich treści, to dodaj go do listy swoich kontaktów i poproś o ponowne przesłanie tego pliku.'
  //   }
  //   return replaceOnce(orgMessage.toLowerCase(), find, replace)
  // }

  // const message = oldValidateMessage(originalMessage)

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

  await mongoMessage.save()

  if (initialSenderPairNumber) {
    await sendMessage(initialSenderPairNumber, message, server, token)
  }

  return res.send('')
})

app.get('/conversations', async (req, res) => {
  const lastConversationData = await Pair.find()
    // .skip((req.query.page + 1) * 10)
    // .limit(10)
    .sort({ updatedAt: -1 })
  res.send(lastConversationData)
})

app.get('/conversations/:personOneNumber', async (req, res) => {
  const personOneNumber = req.params.personOneNumber

  const messages = await Message.find({
    conversationId: {
      $regex: `.*${escapeRegExp(personOneNumber + '_')}`,
      $options: 'i'
    }
  })
    // .skip((req.query.page + 1) * 100)
    // .limit(100)
    .sort({ createdAt: 1 })

  res.send(messages)
})

// Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
