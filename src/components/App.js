import React, { Component } from 'react'
import Header from './Header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../components/SignUp/SignUp'
import PizaaList from '../components/PizzaList/PizaaList'
import Cart from './Cart/Cart'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header path='/' />
        <Switch>
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={PizaaList} />
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
