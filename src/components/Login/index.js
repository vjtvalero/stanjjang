import React from "react";
import { Form, Jumbotron, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="p-5 m-5">
        <Image src="assets/images/logo.png" fluid />
      </div>
      <Jumbotron className="px-4">
        <Form>
          <Form.Group>
            <input type="text" className="form-control" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </Form.Group>
          <Link to="/">
            <Button variant="secondary" block>
              Log in
            </Button>
          </Link>
          <center className="my-2">OR</center>
          <Button variant="primary" block>
            Continue with Facebook
          </Button>
          <Button variant="danger" block>
            Continue with Google
          </Button>
        </Form>
      </Jumbotron>
    </>
  );
}
