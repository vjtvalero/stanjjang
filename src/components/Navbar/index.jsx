import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ profile }) => {
  return (
    <div id="navbar" style={styles} className="py-2 px-3 d-flex justify-content-between align-items-center">
      <span style={{ fontFamily: 'ConcertOne', fontSize: '1rem' }}>
        <Link to="/" className="text-dark">
          {process.env.REACT_APP_NAME}
        </Link>
      </span>
      <small>
        {profile && profile.email ? (
          <Link to="/logout" className="text-dark">
            {profile.email.split('@')[0]}
          </Link>
        ) : (
          <Link to="/signup" className="text-dark">
            Get started
          </Link>
        )}
      </small>
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
