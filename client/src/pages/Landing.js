import React, { useState, useContext } from "react";
import { Button, Container, ThemeProvider } from "@material-ui/core";
import Login from "./Login";
import SignUp from "./Signup";
import userContext from "../utils/userContext";

function Landing() {
  const [login, setLogin] = useState(0);
  const { user, setUser } = useContext(userContext);

  return !user ? (
    <div style={{ textAlign: "center" }}>
      <img
        src={"landinglogo-withds.png"}
        style={{
          alignContent: "center",

          width: "60%",
          marginTop: "100px",
        }}
      />
      {login ? <Login /> : <SignUp />}
      {login ? (
        <Button color="primary" onClick={() => setLogin(0)}>
          Or Sign Up
        </Button>
      ) : (
        <Button color="primary" onClick={() => setLogin(1)}>
          Or LogIn
        </Button>
      )}
    </div>
  ) : (
    <div style={{ marginTop: "100px" }}>
      <h1> Logged In</h1>
    </div>
  );
}

export default Landing;
