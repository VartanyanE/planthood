import React, { useState, useContext } from "react";
import { loginUser } from "../utils/API";
import { withRouter } from "react-router-dom";
import userContext from "../utils/userContext";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Container, ThemeProvider } from "@material-ui/core";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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
    backgroundColor: "",
  },
}));

function Login(props) {
  const [formObject, setFormObject] = useState({});
  // const [user, setUser] = useState([]);

  const { user, setUser } = useContext(userContext);

  const classes = useStyles();
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
    })  
    .catch((err) => toast.warning("Email or Password is wrong, yo!"));

  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>Login</h1>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form class="login">
              <div className="form-group">
                <label for="exampleInputEmail1"></label>
                <input
                  onChange={handleChange}
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email Address"
                  style={{ marginBottom: "8px" }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1"></label>
                <input
                  onChange={handleChange}
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  style={{ marginBottom: "8px" }}
                />
              </div>
              <Button
                type="submit"
                color="primary"
                variant="outlined"
                onClick={handleLogin}
                setUser={user}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Login);
