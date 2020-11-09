import Navbar from 'components/Navbar';
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { validateEmail, validatePassword } from 'utilities';
import { signUp } from 'api/account';
import MessageBox from 'components/Utils/MessageBox';
import Container from 'components/Utils/Container';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setValid] = useState({});
    const [touched, setTouched] = useState({});
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setValid({ email: email && validateEmail(email), password: password && validatePassword(password) });
        if (status === 'success') {
            setEmail('');
            setPassword('');
            setValid({});
            setTouched({});
            setTimeout(() => {
                setStatus('');
                setMessage('');
            }, 5000);
        }
    }, [email, password, status]);

    const sendSignUp = async () => {
        if (isValid.email && isValid.password) {
            setLoading(true);
            const { status, message } = await signUp(email, password);
            setStatus(status);
            setMessage(message);
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <Container>
                <MessageBox status={status} message={message} />
                <p>Sign up now</p>
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
                <div className="mt-4 text-center small">
                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                </div>
            </Container>
        </>
    );
}
