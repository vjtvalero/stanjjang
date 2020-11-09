import Navbar from 'components/Navbar';
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { validateEmail, validatePassword } from 'utilities';
import { apiLogin } from 'api/account';
import MessageBox from 'components/Utils/MessageBox';
import Container from 'components/Utils/Container';
import { Redirect } from 'react-router-dom';

export default function Login({ location }) {
    const [messageParam, setMessageParam] = useState(location.state ? location.state.message : '');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setValid] = useState({});
    const [touched, setTouched] = useState({});
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setValid({ email: email && validateEmail(email), password: password && validatePassword(password) });
        if (status === 'success') {
            setEmail('');
            setPassword('');
            setValid({});
            setTouched({});
            clearMessage();
        }
        if (messageParam) {
            setStatus('success');
            setMessage(messageParam);
            clearMessage();
        }
    }, [email, password, status, messageParam]);

    const clearMessage = () => {
        setTimeout(() => {
            setStatus('');
            setMessage('');
            setMessageParam('');
        }, 5000);
    };

    const login = async () => {
        if (isValid.email && isValid.password) {
            setLoading(true);
            const { status, message } = await apiLogin(email, password);
            if (status === 'success') {
                setTimeout(() => {
                    setRedirect(true);
                }, 1000);
            } else {
                setStatus(status);
                setMessage(message);
                setLoading(false);
            }
        }
    };

    return redirect ? <Redirect to="/" /> : (
        <>
            <Navbar />
            <Container>
                <MessageBox status={status} message={message} />
                <p>Log in</p>
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
                    <Button variant="primary" block onClick={login} disabled={loading}>
                        Log in
                    </Button>
                </Form>
            </Container>
        </>
    );
}
