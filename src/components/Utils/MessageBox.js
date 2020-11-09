import React from 'react';
import { Alert } from 'react-bootstrap';

export default function MessageBox({ status, message }) {
    return (
        <Alert variant={status === 'error' ? 'danger' : status} show={!!status && !!message}>
            <small>{Array.isArray(message) ? message.map((m, index) => <li key={index}>{m}</li>) : message}</small>
        </Alert>
    );
}