const mongoose = require('mongoose')
const { Pair } = require('./models')
const axios = require('axios')
const xml2js = require('xml2js')
const qs = require('qs')

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
      if (waitingPair) {
        waitingPair.personTwo = initialSender
        waitingPair.lastOriginalMessge = originalMessage
        waitingPair.lastMessge = message
        waitingPair.messageCount = 2
        await waitingPair.save() // Zapisz zmiany
      } else {
        pair = new Pair({
          personOne: initialSender,
          personTwo: undefined,
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
      : undefined
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

  console.log(data, receiverNumber, message, server, token)

  const dupa = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Token: token
    }
  })

  console.log(dupa)

  // try {
  //   await axios.post(url, qs.stringify(data), {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Token: token // Przekazanie tokena jako nagłówek
  //     }
  //   })
  // } catch (error) {
  //   console.error(
  //     'Error:',
  //     error.response ? error.response.data : error.message
  //   )
  // }

  // try {
  //   await axios.post(url, qs.stringify({ msg: '', to: data.to }), {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       Token: token // Przekazanie tokena jako nagłówek
  //     }
  //   })
  // } catch (error) {
  //   console.error(
  //     'Error:',
  //     error.response ? error.response.data : error.message
  //   )
  // }
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

module.exports = {
  connectToDatabase,
  getInitialSenderPair,
  sendMessage,
  getToken,
  setStatus
}
