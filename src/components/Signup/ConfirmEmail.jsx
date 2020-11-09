import React, { useEffect, useState } from 'react';
import { confirmEmail } from 'api/account';
import Navbar from 'components/Navbar';
import MessageBox from 'components/Utils/MessageBox';
import Container from 'components/Utils/Container';
import { Redirect } from 'react-router-dom';

export default function ConfirmEmail({ location }) {
    const params = new URLSearchParams(location.search);
    const [token, setToken] = useState(params.get('token'));
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const getConfirmation = async (token) => {
        const { status, message } = await confirmEmail(token);
        setMessage(message);
        setToken('');
        setStatus(status);
    };

    useEffect(() => {
        if (token) {
            getConfirmation(token);
        }
    }, [token]);

    return status === 'success' ? <Redirect to={{ pathname: '/login', state: { message } }} /> : (
        <Container>
            <Navbar />
            <MessageBox status={status} message={message} />
        </Container>
    );
}