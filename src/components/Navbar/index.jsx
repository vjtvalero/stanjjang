import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const token = (await Auth.currentSession()).getIdToken().getJwtToken();
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await Auth.signOut();
      setToken('');
    } catch (error) {
      console.log(error);
    }
  };

  const location = useLocation();
  return (
    <div id="navbar" style={styles} className="py-2 px-3 d-flex justify-content-between align-items-center">
      <span style={{ fontFamily: 'ConcertOne', fontSize: '1rem' }}>
        <Link to="/" className="text-dark">
          {process.env.REACT_APP_NAME}
        </Link>
      </span>
      {location.pathname !== '/login' && location.pathname !== '/signup' ? (
        <small>
          {token ? (
            <Link to="#!" className="text-dark" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="text-dark">
              Login
            </Link>
          )}
        </small>
      ) : null}
    </div>
  );
};

const styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'white',
  width: '100%',
  transition: 'top 0.3s',
};

export default Navbar;
