import './App.css';
import React from 'react';
import Login from "./Login"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changePage: "login"
    }
  }
  
  

  render() {
    this.state.changePage === "login" ?
      <Login
        changePage={this.state.changePage}
      /> :
      <Home
        changePage={this.state.changePage} 
      />
    return (
      <div className="App">
        <Login
          changePage={this.state.changePage}
        />

      </div>
    );
  }
}

export default App;
