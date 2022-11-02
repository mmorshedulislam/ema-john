import React from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? <span> {user?.email}</span> : ""}
        {user?.uid ? (
          <Link onClick={logOut}>Sign Out</Link>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
