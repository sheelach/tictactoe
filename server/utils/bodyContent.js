const msgTable =
  {
    'text': "> Let's play a game of *TicTacToe* :smile:",
    'attachments': [{
      'text': 'Start by selecting a box!',
      'fallback': 'You are unable to choose a game',
      'callback_id': 'first_slot',
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
      'callback_id': 'second_slot',
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
      'callback_id': 'thrid_slot',
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
