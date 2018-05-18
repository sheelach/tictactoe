const express = require('express')
require('dotenv').config()
const request = require('request')
const bodyParser = require('body-parser')
const ticktactoe = require('./tictactoe')
const msgTable = require('./utils/bodyContent')
const port = process.env.PORT || 5000
const msgTableOrig = Object.assign({}, msgTable)

const app = express()
app.use(bodyParser.urlencoded({
  extended: false
}))

function sendChatUpdate (responseURL, message, currentPlayer, slot) {
  if (slot === '1' || '2' || '3') {
    for (let i = 0; i < 3; i++) {
      if (msgTable.attachments[0].actions[i].value === slot) {
        msgTable.attachments[0].actions[i].text = currentPlayer
      }
    }
  } else if (slot === '4' || '5' || '6') {
    for (let j = 0; j < 3; j++) {
      if (msgTable.attachments[1].actions[j].value === slot) {
        msgTable.attachments[1].actions[j].text = currentPlayer
      }
    }
  } else if (slot === '7' || '8' || '9') {
    for (let k = 0; k < 3; k++) {
      if (msgTable.attachments[2].actions[k].value === slot) {
        msgTable.attachments[2].actions[k].text = currentPlayer
      }
    }
  }
  const postOptions = {
    uri: responseURL,
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    json: msgTable
  }
  request(postOptions, (error, response, body) => {
    if (error) {
      console.error('Received an error: ', error)
    }
  })
}

function sendMessageToSlackResponseURL (responseURL, winMessage) {
  var postOptions = {
    uri: responseURL,
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    json: winMessage
  }
  request(postOptions, (error, response, body) => {
    if (error) {
      console.error('Received an error: ', error)
    }
  })
}

app.post('/api/actions', (req, res) => {
  const payload = JSON.parse(req.body.payload)
  const slot = payload.actions[0].value
  const responseURL = payload.response_url
  console.log(payload)
  console.log('Slot selected in the GUI: ' + slot)
  const message = {
    'replace_original': false,
    'text': payload.user.name + ' : ' + slot
  }
  const winMessage = {
    'replace_original': false,
    'delete_original': false,
    'response_type': 'ephemeral',
    'text': slot
  }
  res.status(200).end()
  ticktactoe(false, slot).then((data) => {
    console.log('Tictactoe DATA: ', data)
    if (data.winStatus) {
      sendMessageToSlackResponseURL(responseURL, winMessage)
    } else {
      message.data = data
      sendChatUpdate(responseURL, msgTable, data.player, slot)
      sendMessageToSlackResponseURL(responseURL, message)
    }
  })
})

app.post('/api/start', (req, res) => {
  ticktactoe(true, 0)
  res.send(msgTableOrig)
})

// ============================05/16/2018 Sheela Chennamaneni
// Creating a index.html page to display squares on a web page and click must update the slot at backend

app.listen(port, () => console.log(`Listening on port ${port}`))
