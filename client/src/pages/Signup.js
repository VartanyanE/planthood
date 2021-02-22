import React, { useState, useEffect, useContext } from "react";
import { saveUser, loginUser } from "../utils/API";
import { withRouter } from "react-router-dom";
import userContext from "../utils/userContext";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Container, ThemeProvider } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    backgroundColor: "none",
  },
}));

const Signup = (props) => {
  // const [user, setUser] = useState([]);
  const [formObject, setFormObject] = useState({});
  const { user, setUser } = useContext(userContext);
  const classes = useStyles();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // useEffect(() => {
  //   clearForm();
  // }, []);

  // function loadUsers() {
  //   getUsers()
  //     .then((res) => setUser(res.data))
  //     .catch((err) => console.log(err));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formObject);
    saveUser({
      user_id: formObject.email,
      user_name: formObject.user_name,
      zipcode: formObject.zipcode,
      password: formObject.password,
    })
      .then((res) => {
        // console.log(res);

        loginUser({
          user_id: formObject.email,
          password: formObject.password,
        }).then((res) => {
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
      })
      .catch((err) => toast("Oops, something went wrong!"));
  };

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
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
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
              <h1>Sign Up</h1>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="user_name"> </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    placeholder="Name"
                    onChange={handleInputChange}
                    name="user_name"
                    style={{ marginBottom: "8px" }}
                  />
                  <br></br>
                  <label htmlFor="email"> </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email-input"
                    placeholder="Email Address"
                    onChange={handleInputChange}
                    name="email"
                    style={{ marginBottom: "8px" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-light"></label>
                  <input
                    type="zipcode"
                    className="form-control"
                    id="zipcode-input"
                    placeholder="Zipcode"
                    onChange={handleInputChange}
                    name="zipcode"
                    style={{ marginBottom: "8px" }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-light"></label>
                  <input
                    type="password"
                    className="form-control"
                    id="password-input"
                    placeholder="Password"
                    onChange={handleInputChange}
                    name="password"
                    style={{ marginBottom: "8px" }}
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
                  <span className="sr-only">Error:</span>{" "}
                  <span className="msg"></span>
                </div>
                <Button type="submit" color="primary" variant="outlined">
                  Sign Up
                </Button>
                <br/>
                <Button color="primary"
                  onClick=
                  {() =>
                    props.history.push({
                      pathname: "/",
                    })
                  }>
                  Login
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
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withRouter(Signup);
