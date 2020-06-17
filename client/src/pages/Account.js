import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 5000,
    marginTop: "100px",
  },
});

function Account() {
  const userName = localStorage.getItem("userName");
  const email = localStorage.getItem("user");
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          My Username : {JSON.parse(userName)}
        </Typography>
        <Typography variant="h4" gutterBottom>
          My Email : {JSON.parse(email)}
        </Typography>
      </div>
    </div>
  );
}
export default Account;
