import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React from "react";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "100px",
    alignItems: "center",
    padding: "1em",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  img: {
    height: "40%",
    width: "20%",
    float: "left",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1em",
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
      <Card className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Welcome to your hood, {JSON.parse(userName)} !
        </Typography>
        <img className={classes.img} src="picfour.jpg" />
        <Typography variant="h4" gutterBottom>
          My Email : {JSON.parse(email)}{" "}
          <Button variant="outlined" color="primary">
            Change
          </Button>
        </Typography>
        <Typography variant="h4" gutterBottom>
          My Plantkins{" "}
          <Button href="/plantkins" variant="outlined" color="primary">
            Go
          </Button>
        </Typography>
        <FormControl className={classes.formControl}>
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
      </Card>
    </div>
  );
}

export default Account;
