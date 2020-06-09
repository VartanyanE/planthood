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
    clearForm();
  }, []);

  function loadUsers() {
    getUsers()
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formObject)
    saveUser({
      user_id: formObject.email,
      user_name: formObject.user_name,
      password: formObject.password,
    })
      .then((res) => {
        console.log(res.data)
        clearForm()
      } )
      .catch((err) => console.log(err));
  };
  const clearForm = () => {
    setFormObject({
      user_id: "",
      user_name: "",
      password: "",
    });
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            placeholder="Name"
            onChange={handleInputChange}
            name="user_name"
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-input"
            placeholder="Email"
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-light">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
            onChange={handleInputChange}
            name="password"
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
