import React, { Component } from 'react';
import './App.css';
import EmailInput from './components/email_inputs';
import PasswordInput from './components/password-inputs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

  }

  handleChange = (event, attr) => {
    const newState = {...this.state};
    newState[attr] = event.target.value
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <EmailInput
            value={this.state.email}
            handleChange={(e) => this.handleChange(e, 'email')}
            placeholder='Your Email Address'
        />
        <PasswordInput
            value={this.state.password}
            handleChange={(e) => this.handleChange(e, 'password')}
            placeholder='Secure password'
        />
      </div>
    );
  }
}

export default App;
