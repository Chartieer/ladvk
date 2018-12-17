import React from "react";

import {
  Button,
  Form,
  Col,
  Card,
  CardBody,
  Input,
  Row,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";



const LoginFormCard = ( props) => {
  console.log(props.handleChange)
  let username = props.username
  let password = props.password
  return (
    <Card className="p-4">
      <CardBody>
        <Form name="form" onSubmit={props.handleSubmit}>
          <h1>Login</h1>
          <p className="text-muted">Sign In to your account</p>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-user" />
              </InputGroupText>
            </InputGroupAddon>
            <Input type="text" name="username" placeholder="Username" autoComplete="username" value={props.username} onChange={props.handleChange} />
            {props.submitted && !props.username &&
            <div className="invalid-feedback">Houston, we have a problem...</div>
            }
          </InputGroup>
          <InputGroup className="mb-4">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-lock" />
              </InputGroupText>
            </InputGroupAddon>
            <Input type="password" placeholder="Password" autoComplete="current-password" type="password" name="password" value={props.password} onChange={props.handleChange} />
            {props.submitted && !props.password &&
            <div className="help-block">Password is required</div>
            }
          </InputGroup>
          <Row>
            <Col xs="6">
              <Button color="link" className="px-0">
                Forgot password?
              </Button>
            </Col>
            <Col xs="6" className="text-right">
              <Button color="primary" className="px-4">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
}

export default LoginFormCard;
