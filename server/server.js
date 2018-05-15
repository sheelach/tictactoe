
const express = require('express');
require('dotenv').config();
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const urlencodedParser = bodyParser.urlencoded({ extended: false })

let squares = new Array();
let currentPlayer = 'X';
let slot;

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
function printBoard(){
	console.log("  ----- ");
	console.log(" |"+squares[0]+"|"+squares[1]+"|"+squares[2]+"|");
	console.log(" -------");
	console.log(" |"+squares[3]+"|"+squares[4]+"|"+squares[5]+"|");
	console.log(" -------");
	console.log(" |"+squares[6]+"|"+squares[7]+"|"+squares[8]+"|");
	console.log(" -------");

}
// check who gets turn to play
function switchPlayer(){
	if(currentPlayer =='X'){
		currentPlayer = 'O';
	}else{
		currentPlayer = 'X';
	}
}

//Check for winning rows,columns and diagnols
function winner(changePlayer){
    //check for rows
    if(((squares[0]=='X')&&(squares[1]=='X')&&(squares[2]=='X')) ||((squares[0]=='O')&&(squares[1]=='O')&&(squares[2]=='O'))){
        console.log("Player "+currentPlayer+"  won the match");
    }else if(((squares[3]=='X')&&(squares[4]=='X')&&(squares[5]=='X')) ||((squares[3]=='O')&&(squares[4]=='O')&&(squares[5]=='O'))){
        console.log("Player "+currentPlayer+"  won the match");
    }else if(((squares[6]=='X')&&(squares[7]=='X')&&(squares[8]=='X')) ||((squares[6]=='O')&&(squares[7]=='O')&&(squares[8]=='O'))){
        console.log("Player "+currentPlayer+"  won the match");
    }
    // check for columns
    if(((squares[0]=='X')&&(squares[3]=='X')&&(squares[6]=='X')) ||((squares[0]=='O')&&(squares[3]=='O')&&(squares[6]=='O'))){
        console.log("Player "+currentPlayer+"  won the match");
    }else if(((squares[1]=='X')&&(squares[4]=='X')&&(squares[7]=='X')) ||((squares[1]=='O')&&(squares[4]=='O')&&(squares[7]=='O'))){
        console.log("Player "+currentPlayer+"  won the match");
    }else if(((squares[2]=='X')&&(squares[5]=='X')&&(squares[8]=='X')) ||((squares[2]=='O')&&(squares[5]=='O')&&(squares[8]=='O'))){
        console.log("Player "+currentPlayer+"  won the match");
    }
    //check for diagnols
    if(((squares[0]=='X')&&(squares[4]=='X')&&(squares[8]=='X')) ||((squares[0]=='O')&&(squares[4]=='O')&&(squares[8]=='O'))){
        console.log("Player "+currentPlayer+"  won the match");
    }else if(((squares[2]=='X')&&(squares[4]=='X')&&(squares[6]=='X')) ||((squares[2]=='O')&&(squares[4]=='O')&&(squares[6]=='O'))){
        console.log("Player "+currentPlayer+"  won the match");
    }
}

