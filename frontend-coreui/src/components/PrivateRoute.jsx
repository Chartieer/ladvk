import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let token
  let users = ['admin', 'user']
  let auth = JSON.parse(localStorage.getItem('user'))
  if (auth ) token = auth.token
  return (
  <Route {...rest} render={props => (
    token  && users.includes(auth.user.role)
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)}
