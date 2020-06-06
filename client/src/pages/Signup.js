import React, { useState, useEffect } from "react";
import { saveUser, getUsers } from "../utils/API";

const Signup = () => {
  const [user, setUser] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    getUsers()
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    saveUser({
      user_name: formObject.username,
      email: formObject.email,
      password: formObject.password,
    })
      .then((res) => setUser())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="user_name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            placeholder="Name"
            onChange={handleInputChange}
          />
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-input"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label for="password" className="text-light">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
            onChange={handleInputChange}
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
