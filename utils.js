const mongoose = require('mongoose')
const { Pair } = require('./models')
const axios = require('axios')
const xml2js = require('xml2js')
const qs = require('qs')
const cheerio = require('cheerio')
const {
  malesNames,
  endings,
  wordToChangeRz,
  wordToChangePrz,
  wordToChangeCz,
  wordToChangeOthers,
  uploadedPhotos
} = require('./consts')

require('dotenv').config()

// Funkcja asynchroniczna do połączenia z MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('Could not connect to MongoDB', err)
  }
}

const getInitialSenderPair = async (
  initialSender,
  originalMessage,
  message
) => {
  try {
    let pair = await Pair.findOne({
      $or: [{ personOne: initialSender }, { personTwo: initialSender }]
    })

    const waitingPair = await Pair.findOne({ personTwo: undefined })

    if (!pair) {
      const initialSenderDetails = await axios.get(
        `https://katalog.gg-czaty.pl/?page=profile&uin=${initialSender}`
      )
      const html = initialSenderDetails.data
      const $ = cheerio.load(html)

      const name = $('h4').first().text().trim() || undefined
      const description = $('p.flow-text').text().trim() || undefined

      if (waitingPair) {
        waitingPair.personTwo = initialSender
        waitingPair.personTwoName = name
        waitingPair.personTwoDescription = description
        waitingPair.lastOriginalMessge = originalMessage
        waitingPair.lastMessge = message
        waitingPair.messageCount = 2
        await waitingPair.save() // Zapisz zmiany
      } else {
        pair = new Pair({
          personOne: initialSender,
          personOneName: name,
          personOneDescription: description,
          personTwo: undefined,
          personTwoName: undefined,
          personTwoDescription: undefined,
          lastOriginalMessge: originalMessage,
          lastMessge: message,
          messageCount: 1
        })
        await pair.save()
      }
    } else {
      pair.messageCount = pair.messageCount + 1
      pair.lastMessge = message
      pair.lastOriginalMessge = originalMessage
      await pair.save()
    }

    return pair
      ? pair.personOne === initialSender
        ? pair.personTwo
        : pair.personOne
      : waitingPair &&
          (waitingPair === initialSender
            ? waitingPair.personTwo
            : waitingPair.personOne)
  } catch (err) {
    console.error('Error processing request:', err)
  }
}

const parseXML = async (xml) => {
  const parser = new xml2js.Parser()

  try {
    const result = await parser.parseStringPromise(xml)
    return result
  } catch (error) {
    console.error('Error parsing XML:', error)
  }
}

const getToken = async () => {
  const url = `https://botapi.gadu-gadu.pl/botmaster/getToken/${process.env.BOTGG_NUMBER}`
  const username = process.env.BOTGG_AUTH_USERNAME
  const password = process.env.BOTGG_AUTH_PASSWORD

  // Tworzenie nagłówka Authorization
  const auth = Buffer.from(`${username}:${password}`).toString('base64')

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Basic ${auth}`
      }
    })
    const data = await parseXML(response.data)
    return data
  } catch (error) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message
    )
  }
}

const sendMessage = async (receiverNumber, message, server, token) => {
  const url = `https://${server}/sendMessage/${process.env.BOTGG_NUMBER}`

  // Tworzenie obiektu z danymi
  const data = {
    msg: message,
    to: receiverNumber
  }

  try {
    await axios.post(url, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Token: token // Przekazanie tokena jako nagłówek
      }
    })
  } catch (error) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message
    )
  }
}

const setStatus = async (status, description, server, token) => {
  const url = `https://${server}/setStatus/${process.env.BOTGG_NUMBER}`

  // Tworzenie obiektu z danymi
  const data = {
    status: status,
    desc: description
  }

  try {
    await axios.post(url, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Token: token
      }
    })
  } catch (error) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message
    )
  }
}

const normalizeWord = (word) => {
  return word
    .replace(/\u0142/g, 'l')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

const validateWord = (word) => {
  const imageUrlPattern = /\.(jpeg|jpg|png|gif|bmp|webp|tiff|svg)$/i
  const videoUrlPattern = /\.(mp4|mkv|avi|mov|wmv|flv|webm)$/i

  if (imageUrlPattern.test(word)) {
    const randomIndex = Math.floor(Math.random() * uploadedPhotos.length)
    return uploadedPhotos[randomIndex]
  }

  if (videoUrlPattern.test(word)) {
    return 'Nasz system podejrzewa, że nieznajomy chce Ci przesłać niecenzuralne zdjęcie. Jeżeli godzisz się na otrzymywanie takich treści, to dodaj go do listy swoich kontaktów i poproś o ponowne przesłanie tego pliku.'
  }

  const normalizedMaleNames = malesNames.map((name) => normalizeWord(name))

  if (malesNames.includes(word) || normalizedMaleNames.includes(word)) {
    return 'Ania'
  }

  const connectedWords = [
    ...wordToChangeRz,
    ...wordToChangePrz,
    ...wordToChangeCz,
    ...wordToChangeOthers
  ]
  const normalizedConnectedWords = connectedWords.map((wordArr, index) => {
    return [normalizeWord(wordArr[0]), normalizeWord(wordArr[1])]
  })

  if (connectedWords.some((el) => el.includes(word))) {
    const firstIndex = connectedWords.findIndex((el) => el.includes(word))
    const secondIndex = connectedWords[firstIndex].findIndex(
      (el) => el !== word
    )
    return connectedWords[firstIndex][secondIndex]
  }

  if (normalizedConnectedWords.some((el) => el.includes(word))) {
    const firstIndex = normalizedConnectedWords.findIndex((el) =>
      el.includes(word)
    )
    const secondIndex = normalizedConnectedWords[firstIndex].findIndex(
      (el) => el !== word
    )
    return normalizedConnectedWords[firstIndex][secondIndex]
  }

  const lastTwoLetters = word.slice(word.length - 2)
  const lastThreeLetters = word.slice(word.length - 3)

  if (endings.some((el) => el.includes(lastTwoLetters)) && word.length > 2) {
    const firstIndex = endings.findIndex((el) => el.includes(lastTwoLetters))
    const secondIndex = endings[firstIndex].findIndex(
      (el) => el !== lastTwoLetters
    )
    return `${word.slice(0, -2)}${endings[firstIndex][secondIndex]}`
  }

  if (endings.some((el) => el.includes(lastThreeLetters)) && word.length > 3) {
    const firstIndex = endings.findIndex((el) => el.includes(lastThreeLetters))
    const secondIndex = endings[firstIndex].findIndex(
      (el) => el !== lastThreeLetters
    )
    return `${word.slice(0, -3)}${endings[firstIndex][secondIndex]}`
  }

  if (endings.some((el) => el.includes(lastThreeLetters)) && word.length > 4) {
    const firstIndex = endings.findIndex((el) => el.includes(lastThreeLetters))
    const secondIndex = endings[firstIndex].findIndex(
      (el) => el !== lastThreeLetters
    )
    return `${word.slice(0, -4)}${endings[firstIndex][secondIndex]}`
  }

  return word
}

const validateMessage = (message) => {
  const splittedMessage = message.split(' ')

  const validated = splittedMessage.map((word) => {
    const wordWithSplittedSpecialCharacters = word.split(/(?=[?;!])/)
    const specialCharacters = wordWithSplittedSpecialCharacters.filter(
      (w) => w !== wordWithSplittedSpecialCharacters[0]
    )
    return (
      validateWord(wordWithSplittedSpecialCharacters[0]) +
      specialCharacters.map((el) => el).join('')
    )
  })
  return validated.join(' ')
}

module.exports = {
  connectToDatabase,
  getInitialSenderPair,
  sendMessage,
  getToken,
  setStatus,
  validateMessage
}
