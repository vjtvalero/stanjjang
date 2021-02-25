import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Step2({ email, confirmSignUp, loading, code, setCode, resendSignUp }) {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Email Address" name="email" value={email} readOnly />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Code"
            name="code"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
            autoFocus
          />
        </Form.Group>
        <div className="mb-3 text-center small">
          <a href="#!" onClick={resendSignUp}>
            Resend code
          </a>
        </div>
        <Button variant="success" block onClick={confirmSignUp} disabled={loading}>
          Confirm Email
        </Button>
      </Form>
    </div>
  );
}
