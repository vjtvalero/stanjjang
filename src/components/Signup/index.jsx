import Navbar from 'components/Navbar';
import React, { useEffect, useState } from 'react';
import { validateEmail, validatePassword } from 'helpers';
import MessageBox from 'components/Utils/MessageBox';
import Container from 'components/Utils/Container';
import { Link, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Step1 from './Step1';
import Step2 from './Step2';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState({});
  const [touched, setTouched] = useState({});
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    setValid({ email: email && validateEmail(email), password: password && validatePassword(password) });
    if (status === 'success') {
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
    try {
      if (isValid.email && isValid.password) {
        setLoading(true);
        await Auth.signUp({ username: email, password, attributes: { email } });
        setStatus('success');
        setMessage('Please enter the verification code sent to your email.');
        setLoading(false);
        setStep(2);
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
      setLoading(false);
    }
  };

  const confirmSignUp = async () => {
    try {
      setLoading(true);
      await Auth.confirmSignUp(email, code);
      setStatus('success');
      setMessage('Account verified successfully!');
      setTimeout(() => {
        setRedirect('login');
      }, 2000);
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
      setLoading(false);
    }
  };

  const resendSignUp = async () => {
    try {
      setLoading(true);
      await Auth.resendSignUp(email);
      setStatus('success');
      setMessage('Verification has been resent to your email.');
      setLoading(false);
    } catch (error) {
      setStatus('error');
      setMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {redirect ? <Redirect to={redirect} /> : null}
      <Navbar />
      <Container>
        <MessageBox status={status} message={message} />
        <p>Sign up now</p>
        {step === 1 ? (
          <Step1
            email={email}
            setEmail={setEmail}
            setTouched={setTouched}
            touched={touched}
            password={password}
            setPassword={setPassword}
            isValid={isValid}
            sendSignUp={sendSignUp}
            loading={loading}
          />
        ) : null}
        {step === 2 ? (
          <Step2
            email={email}
            confirmSignUp={confirmSignUp}
            loading={loading}
            code={code}
            setCode={setCode}
            resendSignUp={resendSignUp}
          />
        ) : null}
        <div className="mt-4 text-center small">
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </Container>
    </>
  );
}
