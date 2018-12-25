
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//- import { renderRoutes } from 'react-router-config';
import {PrivateRoute} from './components/PrivateRoute';
import Loadable from 'react-loadable';
import './App.scss';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
)
// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login/Login'),
  loading
});

//import {Login} from './views/Pages/Login/Login.js';





// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout/DefaultLayout'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500/Page500'),
  loading
});

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <PrivateRoute path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
