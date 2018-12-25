//- http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import RegisterCard from './Register.card';
import LoginFormCard from './Login.form.card';

import './login.style.scss';


import { userActions } from '../../../_actions';

import {
  CardGroup,
  Col,
  Container,
  Row
} from "reactstrap";



class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.loggedIn === true){
      return {loggedIn: true}
    }else {
      return null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.loggedIn!==this.props.loggedIn){
      this.setState({loggedIn: this.props.loggedIn});
    }
  }

  handleChange(e) {
    console.log("handle Change")
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { username, password, submitted, loggedIn } = this.state;

    let url = (!this.props.location.state) ? '/' : this.props.location.state.from
    if (loggedIn ) return (
      <Redirect to={url} />
    )

    return <div className="app flex-row align-items-center bg-001">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <LoginFormCard username={username} password={password} submitted={submitted} loggedIn={loggedIn} handleChange={ this.handleChange} handleSubmit={this.handleSubmit} />
                <RegisterCard />
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>;
  }
}

function mapStateToProps(state) {
  const { loggingIn, loggedIn } = state.authentication;
  return {
    loggingIn,
    loggedIn
  };
}

export default connect(mapStateToProps)(Login);
//export default { connectedLoginPage as Login };
