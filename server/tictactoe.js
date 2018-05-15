const ch = []
let currentPlayer = 'X'

async function populateBoard(){
    //Initialize the Board with place '-''s
    console.log('Calling the tictacktoe!!!')
    for (let i = 0; i < 9; i++){
        ch[i] = '-'
    }
}
//function display board
async function printBoard(){
	console.log('  ----- ')
	console.log(' |'+ch[0]+'|'+ch[1]+'|'+ch[2]+'|')
	console.log(' -------')
	console.log(' |'+ch[3]+'|'+ch[4]+'|'+ch[5]+'|')
	console.log(' -------')
	console.log(' |'+ch[6]+'|'+ch[7]+'|'+ch[8]+'|')
	console.log(' -------')
}
// check who gets turn to play
async function switchPlayer(){
	if(currentPlayer ==='X'){
		currentPlayer = 'O'
	}else{
		currentPlayer = 'X'
	}
}

//Check for winning rows,columns and diagnols
async function winner(changePlayer){
    //check for column's
    if ((ch[0] === 'X') && (ch[1] === 'X') && (ch[2] === 'X') || (ch[0] === 'O') && (ch[1] === 'O') && (ch[2] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    } else if ((ch[3] === 'X') && (ch[4] === 'X') && (ch[5] === 'X') || (ch[4] === 'O') && (ch[5] === 'O') && (ch[3] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    } else if ((ch[7] === 'X') && (ch[8] === 'X') && (ch[6] === 'X') || (ch[7] === 'O') && (ch[8] === 'O') && (ch[6] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    }
    //check for diagnols
    if ((ch[0] === 'X') && (ch[4] === 'X') && (ch[8] === 'X') || (ch[0] === 'O') && (ch[4] === 'O') && (ch[8] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    } else if ((ch[2] === 'X') && (ch[4] === 'X') && (ch[6] === 'X') || (ch[4] === 'O') && (ch[2] === 'O') && (ch[6] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    } else if ((ch[7] === 'X') && (ch[8] === 'X') && (ch[6] === 'X') || (ch[7] === 'O') && (ch[8] === 'O') && (ch[6] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    }

    //check for 0,3,6
    if ((ch[0] === 'X') && (ch[3] === 'X') && (ch[6] === 'X') || (ch[0] === 'O') && (ch[3] === 'O') && (ch[6] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    } else if ((ch[1] === 'X') && (ch[4] === 'X') && (ch[7] === 'X') || (ch[1] === 'O') && (ch[4] === 'O') && (ch[7] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    } else if ((ch[2] === 'X') && (ch[8] === 'X') && (ch[5] === 'X') || (ch[2] === 'O') && (ch[8] === 'O') && (ch[5] === 'O')) {
        console.log('Player ' + currentPlayer + '  won the match')
        await printBoard()
        return true
    }
}

const tictactoe = async function(gameStart,slot){
    if (gameStart){
        await populateBoard()
        console.log('Player X will start first')
        return
    }
    await printBoard()

    let count = 0
        //await printBoard()
        if (count === 9){
            console.log('Game is a draw. GoodBye !!!')
        }
        console.log("Player " + currentPlayer + " a number between 0 and 8 to select a spot")
        if (slot > 8 || slot < 0){
            console.log('Wrong input number. Try Again! ')
        }
        if (ch[slot] === '-') {
            ch[slot] = currentPlayer
            await printBoard()
        }else if((ch[slot]==='X') ||(ch[slot]==='O'))
        {
            //To avoid same player's switch already occupied slots
            console.log('Slot already taken please choose next other number');
            return
        }

        if (await winner()){
            console.log('Returning WIN!')
            return true
        } else {
            console.log('Not a winner Yet!')
        }
        await switchPlayer()
        count++
        console.log('The value of count is : ', count)
}

module.exports =  tictactoe