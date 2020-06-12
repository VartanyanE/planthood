import React, { useState } from "react";
import { loginUser } from "../utils/API";
import { withRouter } from "react-router-dom";
import UserContext from "../utils/userContext";

function Login(props) {
  const [formObject, setFormObject] = useState({});
  const [user, setUser] = useContext(UserContext);

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
      localStorage.setItem("user", JSON.stringify(res.data.user));
      const success = res.data.success;
      console.log(props);
      if (success) {
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
        <button onClick={handleLogin} type="submit" class="btn btn-light">
          Login
        </button>
      </form>
    </div>
  );
}

export default withRouter(Login);
