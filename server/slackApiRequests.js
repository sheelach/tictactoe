const request = require('request')

async function sendChatUpdate (responseURL, message, currentPlayer, slot) {
  if (slot === '1' || '2' || '3') {
    for (let i = 0; i < 3; i++) {
      if (message.attachments[0].actions[i].value === slot) {
        message.attachments[0].actions[i].text = currentPlayer
        message.attachments[0].actions[i].style = 'danger'
        // message.attachments[0].actions[i].confirm = 'Do you want to change?'
      }
    }
  }
  if (slot === '4' || '5' || '6') {
    for (let j = 0; j < 3; j++) {
      if (message.attachments[1].actions[j].value === slot) {
        message.attachments[1].actions[j].text = currentPlayer
        message.attachments[1].actions[j].style = 'danger'
        // message.attachments[1].actions[j].confirm = 'Do you want to change?'
      }
    }
  }
  if (slot === '7' || '8' || '9') {
    for (let k = 0; k < 3; k++) {
      if (message.attachments[2].actions[k].value === slot) {
        message.attachments[2].actions[k].text = currentPlayer
        message.attachments[2].actions[k].style = 'danger'
        // message.attachments[2].actions[k].confirm = 'Do you want to change?'
      }
    }
  }
  const postOptions = {
    uri: responseURL,
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    json: message
  }
  request(postOptions, (error, response, body) => {
    if (error) {
      console.error('Received an error: ', error)
    }
  })
}

async function sendMessageToSlackResponseURL (responseURL, winMessage) {
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
async function resetMessage (message) {
  for (let i = 0; i < 3; i++) {
    message.attachments[0].actions[i].text = '-'
  }
  for (let j = 0; j < 3; j++) {
    message.attachments[1].actions[j].text = '-'
  }
  for (let k = 0; k < 3; k++) {
    message.attachments[2].actions[k].text = '-'
  }
}

module.exports.sendMessageToSlackResponseURL = sendMessageToSlackResponseURL
module.exports.sendChatUpdate = sendChatUpdate
module.exports.resetMessage = resetMessage
