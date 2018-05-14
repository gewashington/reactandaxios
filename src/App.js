import React, { Component } from 'react';
import UserForm from "./components/UserForm";
import axios from 'axios';
import './App.css';

/*Notes:
- preventDefault stops page from reloading
//https://api.github.com/users/gewashington
- axios is promised based
- if the name of the property and the name of the data you are trying to save to state are the same, you just need to set the property name to state
*/

class App extends Component {
  state = {
    repos: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
    console.log(user);
    axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      // console.log(res)
      const repos = res.data.public_repos;
      // console.log(repos)
      this.setState({ repos });
    })
  }
  else { return }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        { this.state.repos ? <p>Number of repos: {this.state.repos}</p> :  <p>Please enter a Github username</p> }
      </div>
    );
  }
}

export default App;
