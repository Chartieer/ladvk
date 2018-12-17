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
    const { loggingIn } = this.props;
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


// class Login extends React.Component {


//   render() {
//     const { loggingIn } = this.props;
//     const { username, password, submitted } = this.state;
//     return (
//       <div className="col-md-6 col-md-offset-3">
//         <h2>Login</h2>
//         <form name="form" onSubmit={this.handleSubmit}>
//           <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
//             <label htmlFor="username">Username</label>
//             <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
//             {submitted && !username &&
//               <div className="help-block">Username is required</div>
//             }
//           </div>
//           <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
//             <label htmlFor="password">Password</label>
//             <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
//             {submitted && !password &&
//               <div className="help-block">Password is required</div>
//             }
//           </div>
//           <div className="form-group">
//             <button className="btn btn-primary">Login</button>
//             {loggingIn &&
//               <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
//             }
//             <Link to="/register" className="btn btn-link">Register</Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

function mapStateToProps(state) {
  const { loggingIn, loggedIn } = state.authentication;
  return {
    loggingIn,
    loggedIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };
