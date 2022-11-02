import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirmPass.value;
    console.log(email, password, confirmPass);

    if (password.length < 6) {
      setError("Your password should be 6 characters or more.");
      return;
    }
    if (password !== confirmPass) {
      setError("Password did not match!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirmPass">Confirm Password</label>
          <input type="password" name="confirmPass" id="" required />
        </div>
        <p className="text-error">{error}</p>
        <input className="btn-submit" type="submit" value="Login" />
        <p>
          Already, Have an Account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
