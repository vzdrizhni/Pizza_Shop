import React, { Component } from 'react'
import Header from './Header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
          <Route exact path="/sign-up" component={SignUp} />
          <Header />
          <h1>Hello!</h1>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
