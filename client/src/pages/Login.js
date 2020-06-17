import React, { useState, useContext } from "react";
import { loginUser } from "../utils/API";
import { withRouter } from "react-router-dom";
import userContext from "../utils/userContext";

function Login(props) {
  const [formObject, setFormObject] = useState({});
  const [user, setUser] = useState({});
  // console.log(user);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({
      user_id: formObject.email,
      password: formObject.password,
    }).then((res) => {
      console.log(res.data);

      // console.log(user);

      const success = res.data.success;

      if (success) {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user.user_id));
        localStorage.setItem(
          "user_name",
          JSON.stringify(res.data.user.user_name)
        );
        props.history.push({
          pathname: "/plantkins",
        });
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>

      <form class="login">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            onChange={handleChange}
            type="email"
            class="form-control"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={handleChange}
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={handleLogin}
          type="submit"
          setUser={user}
          class="btn btn-light"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default withRouter(Login);
