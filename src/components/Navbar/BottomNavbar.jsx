import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { BiAddToQueue, BiLike } from 'react-icons/bi';

export default function BottomNavbar() {
  return (
    <div style={styles} className="py-2 px-3 d-flex justify-content-around align-items-center">
      <div>
        <AiOutlineHome />
      </div>
      <div>
        <RiSearch2Line />
      </div>
      <div>
        <BiAddToQueue />
      </div>
      <div>
        <BiLike />
      </div>
    </div>
  );
}

const styles = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  backgroundColor: 'white',
  width: '100%',
  height: '3rem',
  fontSize: '20pt',
  borderTop: '1px solid #DBDBDB',
  lineHeight: 0,
};
