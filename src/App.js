import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './component/NavBar/NavBar';
import ListTaskComponent from "./component/Task/ListTaskComponent";
import RegisterComponent from "./component/User/RegisterComponent";
import LoginComponent from "./component/User/LoginComponent";


class App extends Component {
  render() {
      return (
          <div className="container">
              <Router>
                  <div className="col-md-12">
                      <NavBar/>
                      <Switch>
                          <Route path="/" exact component={ListTaskComponent} />
                          {/*<Route path="/users" component={ListUserComponent} />*/}
                          <Route path="/register" component={RegisterComponent} />
                          <Route path="/login" component={LoginComponent} />
                          {/*<Route path="/edit-user" component={EditUserComponent} />*/}
                      </Switch>
                  </div>
              </Router>
          </div>
      );
  }
}
const style = {
    color: 'red',
    margin: '10px'
}
export default App;
