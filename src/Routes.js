import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SiginUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Shop from './pages/Shop/Shop';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Nav from './components/Nav/Nav';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SiginUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/shop/:id" component={Shop} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
