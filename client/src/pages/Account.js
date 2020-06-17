import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 5000,
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
  },
  style: {
    height: 200,
    width: 200,
  },
});

// function ImageAvatars() {
function Account() {
  const userName = localStorage.getItem("userName");
  const email = localStorage.getItem("user");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="picone.jpg" />

      <Typography variant="h4" gutterBottom>
        My Username : {JSON.parse(userName)}
      </Typography>
      <Typography variant="h4" gutterBottom>
        My Email : {JSON.parse(email)}
      </Typography>
    </div>
  );
}
export default Account;
