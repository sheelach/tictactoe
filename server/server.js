const express = require('express');
require('dotenv').config();
const request = require('request');
const bodyParser = require('body-parser');
const ticktactoe = require('./tictactoe')

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/api/start', (req, res) => {
  ticktactoe(true, 0)
  res.send({
    express: 'Start Game'
  });
});
app.post('/api/actions', (req, res) => {
  const payload = JSON.parse(req.body.payload)
  const slot = payload.actions[0].value
  console.log(slot)
  res.send({
    "replace_original": false,
    "delete_original": false,
    "response_type": "in_channel",
    "text": slot
  });
});
app.post('/api/start', (req, res) => {
  ticktactoe(true, 0)
  res.send(
  {
    "text": "> Let's play a game of *TicTacToe* :smile:",
    "attachments": [{
      "text": "Start by selecting a a box!",
      "fallback": "You are unable to choose a game",
      "callback_id": "wopr_game",
      "color": "#3AA3E3",
      "attachment_type": "default",
      "actions": [{
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "1"
      }, {
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "2"
      }, {
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "3"
      }]
    }, {
      "text": "",
      "fallback": "You are unable to choose a game",
      "callback_id": "wopr_game",
      "color": "#3AA3E3",
      "attachment_type": "default",
      "actions": [{
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "4"
      }, {
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "5"
      }, {
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "6"
      }]
    }, {
      "text": "",
      "fallback": "You are unable to choose a game",
      "callback_id": "wopr_game",
      "color": "#3AA3E3",
      "attachment_type": "default",
      "actions": [{
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "7"
      }, {
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "8"
      }, {
        "name": "game",
        "text": "-",
        "type": "button",
        "value": "9"
      }]
    }]
  }
  )
})

//on click should update button value to X or O with Post 5/16/2015 checking for Post update functionality

app.get('/api/zero', (req, res) => {
  ticktactoe(false, 0).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-0, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-0 '
      });
    }
  })
});
app.get('/api/one', (req, res) => {
  ticktactoe(false, 1).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-1, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-1'
      });
    }
  })
});
app.get('/api/two', (req, res) => {
  ticktactoe(false, 2).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-2, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-2'
      });
    }
  })
});
app.get('/api/three', (req, res) => {
  ticktactoe(false, 3).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-3, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-3'
      });
    }
  })
});
app.get('/api/four', (req, res) => {
  ticktactoe(false, 4).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-4, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-4'
      });
    }
  })
});
app.get('/api/five', (req, res) => {
  ticktactoe(false, 5).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-5, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-5'
      });
    }
  })
});
app.get('/api/six', (req, res) => {
  ticktactoe(false, 6).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-6, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-6'
      });
    }
  })
});
app.get('/api/seven', (req, res) => {
  ticktactoe(false, 7).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-7, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-7'
      });
    }
  })
});
app.get('/api/eight', (req, res) => {
  ticktactoe(false, 8).then((data) => {
    if (data) {
      res.send({
        express: 'Slot-8, WINNER '
      })
    } else {
      res.send({
        express: 'Slot-8'
      });
    }
  })
});

//============================05/16/2018 Sheela Chennamaneni
//Creating a index.html page to display squares on a web page and click must update the slot at backend

app.listen(port, () => console.log(`Listening on port ${port}`));
