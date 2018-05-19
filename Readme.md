# TicTacToe Game App for Slackers #

A Simple Node Express Server listening on the events from Slack and running the 2-player TickTacToe game

<b>Integration Reference Material:</b> <br>
Intro to Slack using Node: https://api.slack.com/tutorials/intro-to-message-buttons <br>
Setup Oauth App in Slack: https://api.slack.com/tutorials/app-creation-and-oauth <br>
How to build TickTacToe - Algo: https://medium.com/@ojusmilindsave/tutorial-to-implement-tic-tac-toe-in-java-ad639661a9b<br>

<b>Instructions:</b><br>
    - Invite a user to play in the slack channel by command (/ttt start )
    - Select the slot from the board by Player X
    - Select the open slot from the board by Player O
    - On a WIN or a Draw, type the command ```/ttt start @username ```

* Prerequisites:
    - Node running local with tunnel (ngrok) OR Cloud runtime (AWS/Heroku/GCloud). This sample is deployed on Heroku.com free tier (https://glacial-shelf-17203.herokuapp.com)
    - Slack Account with access to a Channel
    - 2-players (Play with Slackbot OR Self :)

* TODO:
    - Test Cases updates
    - Test coverage report

<b>Intial Screen:</b> <br>
![alt text](./SlackGameView.png)

<b>Winner Screen:</b> <br>
![alt text](./SlackGameWinner.png)

<b>Draw Screen:</b> <br>
![alt text](./SlackGameDraw.png)
