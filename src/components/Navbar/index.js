import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={styles}
      className="py-2 px-3 d-flex justify-content-between align-items-center"
    >
      <span style={{ fontFamily: "ConcertOne", fontSize: "1rem" }}>
        <Link to="/" className="text-dark">
          {process.env.REACT_APP_NAME}
        </Link>
      </span>
      <small>
        <Link to="/login" className="text-dark">
          Log in
        </Link>
      </small>
    </div>
  );
};

const styles = {
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "white",
  width: "100%",
};

export default Navbar;
