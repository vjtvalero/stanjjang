import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Step1({ email, setEmail, setTouched, touched, password, setPassword, isValid, sendSignUp, loading }) {
  return (
    <div>
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
            isValid={touched.email && isValid.email}
            isInvalid={touched.email && !isValid.email}
            autoFocus
          />
          <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setTouched((prevTouched) => {
                return { ...prevTouched, password: true };
              });
            }}
            isValid={touched.password && isValid.password}
            isInvalid={touched.password && !isValid.password}
          />
          <Form.Control.Feedback type="invalid">Please enter a valid password.</Form.Control.Feedback>
        </Form.Group>
        <Button variant="dark" block onClick={sendSignUp} disabled={loading}>
          Continue
        </Button>
      </Form>
    </div>
  );
}
