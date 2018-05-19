// POST content for Message Definitions so as to setup a 3 X 3 TicTacTo Play Board
//TODO: Read the API of slack to devide a way to display all the 3 rows as a single form.
const msgTable =
  {
    'text': "> Let's play a game of *TicTacToe* :smile:",
    'attachments': [{
      'text': 'Start by selecting a box!',
      'fallback': 'You are unable to choose a game',
      'callback_id': 'top_row',
      'color': '#3AA3E3',
      'attachment_type': 'default',
      'actions': [{
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '1'
      }, {
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '2'
      }, {
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '3'
      }]
    }, {
      'text': '',
      'fallback': 'You are unable to choose a game',
      'callback_id': 'middle_row',
      'color': '#3AA3E3',
      'attachment_type': 'default',
      'actions': [{
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '4'
      }, {
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '5'
      }, {
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '6'
      }]
    }, {
      'text': '',
      'fallback': 'You are unable to choose a game',
      'callback_id': 'last_row',
      'color': '#3AA3E3',
      'attachment_type': 'default',
      'actions': [{
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '7'
      }, {
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '8'
      }, {
        'name': 'game',
        'text': '-',
        'type': 'button',
        'value': '9'
      }]
    }]
  }
module.exports = msgTable
