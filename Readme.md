# TicTacToe Game on Slack for Users #

Simple Node Express Server listening on the events from Slack and running the game

<b>References:</b>

Integrations:

Into Slack using Node documentation: https://api.slack.com/tutorials/intro-to-message-buttons
Setup Oauth App in Slack: https://api.slack.com/tutorials/app-creation-and-oauth
 
How to build TickTacToe - Algo: https://medium.com/@ojusmilindsave/tutorial-to-implement-tic-tac-toe-in-java-ad639661a9b 


JSON - Display in Slack
```json
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
````
![alt text](./SlackGameView.png)
