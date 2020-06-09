import React, {useState} from "react";
import {loginUser} from '../utils/API'

function Login() {
  const [formObject, setFormObject] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(formObject)
    loginUser(formObject).then(data=>console.log(data))
  }

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
            name="user_id"
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

export default Login;
