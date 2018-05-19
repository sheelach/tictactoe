const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const ticktactoe = require('./tictactoe')
let msgTable = require('./utils/bodyContent')
const msgTableOrig = require('./utils/bodyContent')
const sendChatUpdate = require('./slackApiRequests').sendChatUpdate
const sendMessageToSlackResponseURL = require('./slackApiRequests').sendMessageToSlackResponseURL
const resetMessage = require('./slackApiRequests').resetMessage
const port = process.env.PORT || 5000

const app = express()
app.use(bodyParser.urlencoded({
  extended: false
}))

app.post('/api/actions', (req, res) => {
  const payload = JSON.parse(req.body.payload)
  const slot = payload.actions[0].value
  const responseURL = payload.response_url
  res.status(200).end()
  ticktactoe(false, slot).then((data) => {
    console.log('Tictactoe promise response DATA: ', data)
    if (data.winStatus) {
      const winMessage = {
        'replace_original': false,
        'delete_original': false,
        'response_type': 'in_channel',
        'text': payload.channel.name + ' : ' + payload.user.name + ' : ' + data.user + ' : ' + data.msg
      }
      sendChatUpdate(responseURL, msgTable, data.user, slot)
      sendMessageToSlackResponseURL(responseURL, winMessage)
    } else {
      const message = {
        'replace_original': false,
        'delete_original': false,
        'response_type': 'in_channel',
        'text': payload.channel.name + ' : ' + payload.user.name + ' : ' + data.user + ' : ' + data.msg
      }
      sendChatUpdate(responseURL, msgTable, data.user, slot)
      sendMessageToSlackResponseURL(responseURL, message)
    }
  })
})

app.post('/api/start', (req, res) => {
  ticktactoe(true, 0)
  resetMessage(msgTable)
  res.send(msgTable)
})

// ============================05/16/2018 Sheela Chennamaneni
// Creating a index.html page to display squares on a web page and click must update the slot at backend

app.listen(port, () => console.log(`Listening on port ${port}`))
