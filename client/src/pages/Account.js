import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React from "react";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginTop: "100px",

    alignItems: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function Account() {
  const userName = localStorage.getItem("user_name");
  const email = localStorage.getItem("user");
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <div id="accountData" className={classes.root}>
        <FormControl className={classes.formControl}>
          <Typography variant="h3" gutterBottom>
            Welcome to your hood, {JSON.parse(userName)} !
          </Typography>
          <Avatar variant="circle" alt="Remy Sharp" src="picone.jpg" />
          <Typography variant="h4" gutterBottom>
            My Email : {JSON.parse(email)}
          </Typography>
          <Typography variant="h4" gutterBottom>
            My Zone:{" "}
            <Select
              native
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: "Zone",
                id: "usda-zones",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>West Coast</option>
              <option value={20}>Farms????</option>
              <option value={30}>East Coast</option>
            </Select>
          </Typography>
        </FormControl>
      </div>
    </div>
  );
}

export default Account;
