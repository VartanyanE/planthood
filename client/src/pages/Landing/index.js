import React, { useState, useContext, useEffect } from "react";
import { Button, Container, ThemeProvider } from "@material-ui/core";
import Login from "../Login";
import SignUp from "../Signup";
import userContext from "../../utils/userContext";
import { loginUser } from "../../utils/API";
import "./style.css";

function Landing(props) {
  const [login, setLogin] = useState(0);
  const { user, setUser } = useContext(userContext);
  const [formObject, setFormObject] = useState({});

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={"landinglogo-withds.png"}
        style={{
          alignContent: "center",

          width: "60%",
          marginTop: "100px",
        }}
      />
      <div id="content">
        <Button
          color="primary"
          variant="outlined"
          onClick={() =>
            loginUser({
              user_id: "test@test.com",
              password: "123456",
            }).then((res) => {
              console.log(res.data);

              // console.log(user);

              const success = res.data.success;

              if (success) {
                setUser(res.data.user);
                localStorage.setItem(
                  "user",
                  JSON.stringify(res.data.user.user_id)
                );
                localStorage.setItem(
                  "user_name",
                  JSON.stringify(res.data.user.user_name)
                );
                props.history.push({
                  pathname: "/plantkins",
                });
              }
            })
          }
        >
          Guest Access
        </Button>
      </div>
      <Login />

      <Button
        color="primary"
        onClick={() =>
          props.history.push({
            pathname: "/signup",
          })
        }
      >
        Sign Up
      </Button>
      <br />
      
      {/* <div id="content">
        <Button
          color="primary"
          onClick={() =>
            loginUser({
              user_id: "test@test.com",
              password: "123456",
            }).then((res) => {
              console.log(res.data);

              // console.log(user);

              const success = res.data.success;

              if (success) {
                setUser(res.data.user);
                localStorage.setItem(
                  "user",
                  JSON.stringify(res.data.user.user_id)
                );
                localStorage.setItem(
                  "user_name",
                  JSON.stringify(res.data.user.user_name)
                );
                props.history.push({
                  pathname: "/plantkins",
                });
              }
            })
          }
        >
          Guest Access
        </Button>
      </div> */}
    </div>
  );
}

export default Landing;
