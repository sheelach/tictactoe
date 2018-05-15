const express = require('express');
require('dotenv').config();
const request = require('request');
const bodyParser = require('body-parser');
const ticktactoe = require('./tictactoe')

const app = express();
const port = process.env.PORT || 5000;

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/api/start', (req, res) => {
  ticktactoe(true, 0)
  res.send({ express: 'Start Game' });
});
app.get('/api/zero', (req, res) => {
   ticktactoe(false, 0).then((data) => {
       if (data){
           res.send({ express: 'Slot-0, WINNER ' })
       } else {
           res.send({ express: 'Slot-0 ' });
       }
   })
});
app.get('/api/one', (req, res) => {
   ticktactoe(false, 1).then((data) => {
       if (data){
           res.send({ express: 'Slot-1, WINNER ' })
       } else {
           res.send({ express: 'Slot-1' });
       }
   })
});
app.get('/api/two', (req, res) => {
   ticktactoe(false, 2).then((data) => {
       if (data){
           res.send({ express: 'Slot-2, WINNER ' })
       } else {
           res.send({ express: 'Slot-2' });
       }
   })
});
app.get('/api/three', (req, res) => {
   ticktactoe(false, 3).then((data) => {
       if (data){
           res.send({ express: 'Slot-3, WINNER ' })
       } else {
           res.send({ express: 'Slot-3' });
       }
   })
});
app.get('/api/four', (req, res) => {
   ticktactoe(false, 4).then((data) => {
       if (data){
           res.send({ express: 'Slot-4, WINNER ' })
       } else {
           res.send({ express: 'Slot-4' });
       }
   })
});
app.get('/api/five', (req, res) => {
   ticktactoe(false, 5).then((data) => {
       if (data){
           res.send({ express: 'Slot-5, WINNER ' })
       } else {
           res.send({ express: 'Slot-5' });
       }
   })
});
app.get('/api/six', (req, res) => {
   ticktactoe(false, 6).then((data) => {
       if (data){
           res.send({ express: 'Slot-6, WINNER ' })
       } else {
           res.send({ express: 'Slot-6' });
       }
   })
});
app.get('/api/seven', (req, res) => {
   ticktactoe(false, 7).then((data) => {
       if (data){
           res.send({ express: 'Slot-7, WINNER ' })
       } else {
           res.send({ express: 'Slot-7' });
       }
   })
});
app.get('/api/eight', (req, res) => {
   ticktactoe(false, 8).then((data) => {
       if (data){
           res.send({ express: 'Slot-8, WINNER ' })
       } else {
           res.send({ express: 'Slot-8' });
       }
   })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

