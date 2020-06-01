import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    console.log("email is " + email);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label form="exampleInputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="text-light">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{ display: "none" }}
          id="alert"
          className="alert alert-danger"
          role="alert"
        >
          <span
            className="glyphicon glyphicon-exclamation-sign"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Error:</span> <span className="msg"></span>
        </div>
        <button type="submit" className="btn btn-light">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;
