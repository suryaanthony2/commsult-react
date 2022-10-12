import './App.css';
import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username : "",
      password : "",
    }
  }
  
  onLogin = () => {
    if (this.state.username === "tobiasganteng" && this.state.password === "tobiasganteng123") {
      this.props.changePage("home")
    }
  }

  render() {
    return (
      <div className="Login">
        <label>Username</label>
        <input 
          value={this.state.username}
          onChange={event => this.setState({
            username : event.target.value
          })}
        />
        <br />
        <label>Password</label>
        <input 
          value={this.state.password}
          onChange={event => this.setState({
            password : event.target.value
          })}
        />
        <br />
        <button onClick={this.onLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
