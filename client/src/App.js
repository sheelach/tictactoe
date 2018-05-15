import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  };

  callApi = async () => {
    const response = await fetch('/api/zero-zero');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <div>
        <button className="Button" name="One" value="1">1</button>
        <button className="Button" name="Two" value="2">2</button>
        <button className="Button" name="Three" value="3">3</button>
        <br/>
        <button className="Button" name="Four" value="4">4</button>
        <button className="Button" name="Five" value="5">5</button>
        <button className="Button" name="Six" value="6">6</button>
        <br/>
        <button className="Button" name="Seven" value="7">7</button>
        <button className="Button" name="Eight" value="8">8</button>
        <button className="Button" name="Nine" value="9">9</button>
        </div>
      </div>
    );
  }
}

export default App;
