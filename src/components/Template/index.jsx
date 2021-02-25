import React from 'react';
import Navbar from 'components/Navbar';
import BottomNavbar from 'components/Navbar/BottomNavbar';

export default function Template(props) {
  return (
    <div style={{ maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Navbar />
      <div style={{ marginTop: '3rem', marginBottom: '5rem' }}>{props.children}</div>
      <BottomNavbar />
    </div>
  );
}
