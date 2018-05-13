
const express = require('express');
require('dotenv').config();
const request = require('request');
const bodyParser = require('body-parser');
//const readlines = require('readline-sync');

const app = express();
const port = process.env.PORT || 5000;

const urlencodedParser = bodyParser.urlencoded({ extended: false })

var squares = new Array();
var currentPlayer = 'X';
var slot;

//assign default value as '-' to verify for open spots when inserting
squares = ['-','-','-','-','-','-','-','-','-'];
/*for(var i=0;i<9;i++)
{
	console.log(squares[i]);
}*/

console.log("Player X will start first");
console.log("Please enter a value between 0 -8 to pick a slot");

TTTBoard();
// input from slot value from key board

app.get('/api/zero-zero', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

//function display board
function TTTBoard()
{
	console.log("  ----- ");
	console.log(" |"+squares[0]+"|"+squares[1]+"|"+squares[2]+"|");
	console.log(" -------");
	console.log(" |"+squares[0]+"|"+squares[1]+"|"+squares[2]+"|");
	console.log(" -------");
	console.log(" |"+squares[0]+"|"+squares[1]+"|"+squares[2]+"|");
	console.log(" -------");

}
// check who gets turn to play
function changePlayer()
{
	if(currentPlayer =='X')
	{
		currentPlayer = 'O';
	}
	else{
		currentPlayer = 'X';
	}

}