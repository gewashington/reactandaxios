import React, { Component } from 'react';
import UserForm from "./components/UserForm";
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './App.css';

/*Notes:
- preventDefault stops page from reloading
//https://api.github.com/users/gewashington
- axios is promised based
- if the name of the property and the name of the data you are trying to save to state are the same, you just need to set the property name to state
*/

class App extends Component {
  state = {
    repos: null,
    userData: null
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
      const login = res.data.login;
      const location = res.data.location;
      const followers = res.data.followers;
      const following = res.data.following;
      const avatar_url = res.data.avatar_url;
        this.setState({
        repos,
        login,
        location,
        following,
        followers,
        avatar_url

      });
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
          <div class="card">
            <div class="container">
              <img src={this.state.avatar_url}  class="img" />
            { this.state.login ? <p>{this.state.login}</p> : "" }
            { this.state.location ? <p>{this.state.location}</p> : "Not Available" }
            { this.state.followers ? <p>{this.state.followers} Followers</p>  : "" }
            { this.state.repos ? <p>Number of repos: {this.state.repos}</p> :  "" }
            { this.state.following ? <p>Following: {this.state.following}</p> :  "" }
              <UserForm getUser={this.getUser} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
