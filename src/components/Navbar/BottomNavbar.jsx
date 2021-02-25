import React from 'react';
import { RiChatHeartLine, RiChatHeartFill } from 'react-icons/ri';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { BiSearch, BiSearchAlt } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNavbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div style={styles.container} className="py-2 px-3 d-flex justify-content-around align-items-center">
      <Link to="/">{path === '/' ? <AiFillHome /> : <AiOutlineHome />}</Link>
      <Link to="/vote">{path === '/vote' ? <RiChatHeartFill /> : <RiChatHeartLine />}</Link>
      <Link to="/search">{path === '/search' ? <BiSearchAlt /> : <BiSearch />}</Link>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    width: '100%',
    height: '3rem',
    fontSize: '20pt',
    borderTop: '1px solid #DBDBDB',
    lineHeight: 0,
  },
};
