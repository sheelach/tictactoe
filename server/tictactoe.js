const ch = []
let currentPlayer = 'X'
let count

async function populateBoard () {
    // Initialize the Board with place '-''s
  console.log('>>> Started the game TicTackToe!!!')
  count = 0
  for (let i = 0; i < 9; i++) {
    ch[i] = '-'
  }
}
// function display board
async function printBoard () {
  console.log('  ----- ')
  console.log(' |' + ch[0] + '|' + ch[1] + '|' + ch[2] + '|')
  console.log(' -------')
  console.log(' |' + ch[3] + '|' + ch[4] + '|' + ch[5] + '|')
  console.log(' -------')
  console.log(' |' + ch[6] + '|' + ch[7] + '|' + ch[8] + '|')
  console.log(' -------')
}
// check who gets turn to play
const switchPlayer = async function switchPlayer () {
  console.log('Current Player: ', currentPlayer)
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
  console.log('Switched to Player now as: ', currentPlayer)
}

// Check for winning rows,columns and diagnols
const winner = async function winner (changePlayer) {
    // check for column's
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
    // check for diagnols
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

    // check for 0,3,6
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
  count++
}

const tictactoe = async function (gameStart, slot) {
  if (gameStart) {
    await populateBoard()
    console.log('Player X will start first!')
    await printBoard()
    return
  }
  await printBoard()
  if (ch[slot - 1] === '-') {
    ch[slot - 1] = currentPlayer
    await printBoard()
  } else if ((ch[slot - 1] === 'X') || (ch[slot - 1] === 'O')) {
    console.log('Already taken. please choose other! ')
    return {winStatus: false, msg: ' Already taken. please choose other!', user: currentPlayer}
  }
  if (await winner()) {
    console.log('Returning WIN!')
    return {winStatus: true, msg: ' is the WINNER. Would you like to start a new game? type `/ttt start @username`', user: currentPlayer}
  } else {
    if (count === 9) {
      console.log('Game is a draw. GoodBye !!!')
      return {winStatus: true, msg: ' Its a DRAW. Would you like to start a new game? type `/ttt start  @username`', user: currentPlayer}
    }
    console.log('No winner Yet!')
    const player = currentPlayer
    console.log('currentPlayer: ', currentPlayer)
    console.log('player: ', player)
    await switchPlayer()
    return {winStatus: false, msg: currentPlayer+ ', Its your turn now!', user: player}
  }
}

module.exports = tictactoe
