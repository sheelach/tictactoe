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
    "text": "Would you like to play a game?",
    "attachments": [
        {
            "text": "Let's Play TicTacToe",
            "fallback": "You are unable to choose a game",
            "callback_id": "wopr_game",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "game",
                    "text": "zero-zero",
                    "type": "button",
                    "value": "zero-zero"
                },
                {
                    "name": "game",
                    "text": "zero-one",
                    "type": "button",
                    "value": "zero-one"
                },
                {
                    "name": "game",
                    "text": "zero-two",
                    "type": "button",
                    "value": "zero-two"
                }
            ]
        },
		{
            "text": "",
            "fallback": "You are unable to choose a game",
            "callback_id": "wopr_game",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "game",
                    "text": "one-zero",
                    "type": "button",
                    "value": "one-zero"
                },
                {
                    "name": "game",
                    "text": "one-one",
                    "type": "button",
                    "value": "one-one"
                },
                {
                    "name": "game",
                    "text": "one-two",
                    "type": "button",
                    "value": "one-two"
                }
            ]
        },
		{
            "text": "",
            "fallback": "You are unable to choose a game",
            "callback_id": "wopr_game",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "game",
                    "text": "two-zero",
                    "type": "button",
                    "value": "two-zero"
                },
                {
                    "name": "game",
                    "text": "two-one",
                    "type": "button",
                    "value": "two-one"
                },
                {
                    "name": "game",
                    "text": "two-two",
                    "type": "button",
                    "value": "two-two"
                }
            ]
        }
    ]
}
````
![alt text](./SlackGameView.png)
