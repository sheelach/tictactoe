const express = require('express')
require('dotenv').config() // TODO: Use to config props for OAuth on the app.
const bodyParser = require('body-parser')
const msgTable = require('./utils/bodyContent')
const ticktactoe = require('./tictactoe')
const sendChatUpdate = require('./slackApiRequests').sendChatUpdate
const sendMessageToSlackResponseURL = require('./slackApiRequests').sendMessageToSlackResponseURL
const resetMessage = require('./slackApiRequests').resetMessage
const port = process.env.PORT || 5000
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

/**
@function POST action for Game Start
*/
app.post('/api/start', (req, res) => {
  ticktactoe(true, 0)
  resetMessage(msgTable)
  res.send(msgTable)
})

/**
@function POST listener on the Slack ACTIONS happenning on the play board
*/
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
        'text': 'Channel : '+payload.channel.name + ' User : ' + payload.user.name + ' marked ' + data.user + ' : ' + data.msg
      }
      sendChatUpdate(responseURL, msgTable, data.user, slot)
      sendMessageToSlackResponseURL(responseURL, winMessage)
    } else {
      const message = {
        'replace_original': false,
        'delete_original': false,
        'response_type': 'in_channel',
        'text': 'Channel : '+payload.channel.name + ' User : ' + payload.user.name + ' marked ' + data.user + ' : ' + data.msg
      }
      sendChatUpdate(responseURL, msgTable, data.user, slot)
      sendMessageToSlackResponseURL(responseURL, message)
    }
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))

//TODO: Wire react props & state on index.html page to display squares on a web page and click must update the slot at backend. 
