
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

//import { history } from '../_helpers';
//import { alertActions } from '../_actions';

import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { Login } from "../views/Pages/Login";

// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import '../App.scss';



const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('../containers/DefaultLayout'),
  loading
});

// Pages
// const Login = Loadable({
//   loader: () => import('../views/Pages/Login'),
//   loading
// });

const Register = Loadable({
  loader: () => import('../views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('../views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('../views/Pages/Page500'),
  loading
});

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   // clear alert on location change
    //   dispatch(alertActions.clear());
    // });
  }

  render() {
    const { alert } = this.props;

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

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };


/*
  <div className="col-sm-8 col-sm-offset-2">
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        </div> */
