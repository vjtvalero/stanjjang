import React, { useState } from "react";
import { Form, Jumbotron, Button, Image } from "react-bootstrap";
import { validateEmail } from "utilities";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(true);
  const [touched, setTouched] = useState({});
  const sendEmail = (email) => {
    setValid(email && validateEmail(email));
    if (isValid) {
        alert('send email')
    }
  };

  return (
    <>
      <div className="p-5 m-5">
        <center>
          <Image src="assets/images/logo.png" fluid />
        </center>
      </div>
      <Jumbotron className="px-4">
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setTouched((prevTouched) => {
                  return { ...prevTouched, email: true };
                });
              }}
              isValid={touched.email && isValid}
              isInvalid={!isValid}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="dark" block onClick={() => sendEmail(email)}>
            Continue
          </Button>
          <center className="my-2">
            <span>or</span>
          </center>
          <Button variant="outline-danger" block>
            Continue with Google
          </Button>
          <Button variant="outline-primary" block>
            Continue with Facebook
          </Button>
          <Button variant="outline-info" block>
            Continue with Twitter
          </Button>
        </Form>
      </Jumbotron>
    </>
  );
}
