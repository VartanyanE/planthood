import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form class="login">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email-input"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="password-input"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-light">
          Login
        </button>
      </form>
      <p>
        Or sign up{" "}
        <a class="text-danger font-weight-bolder" href="/signup">
          <strong>here</strong>
        </a>
      </p>
    </div>
  );
}

export default Login;
