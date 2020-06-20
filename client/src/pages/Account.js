import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { getUser, getZone } from "../utils/API";
import Switch from "@material-ui/core/Switch";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
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
    height: "30%",
    width: "30%",
    float: "left",
    paddingRight: "1em",
    paddingBottom: "1em",
  },
  avatar: {
    variant: "circle",
    display: "inline",
    float: "left",
    marginTop: ".5em",
  },

  text: {
    display: "flex",
    flexDirection: "colum",
    justifyContent: "flexStart",
    alignContent: "space-around",
    paddingLeft: "1em",
  },
}));
function Account() {
  const userName = localStorage.getItem("user_name");
  const email = localStorage.getItem("user");
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: "",
    name: "hai",
    checkedB: true,
  });
  const [userZone, setUserZone] = useState();
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    getUser(userId)
      .then((res) => {
        getZone(res.data[0].zipcode).then((res) => {
          // console.log(res.data.zipcode, "zone confirm");
          setUserZone(res.data.zonetitle);

          // console.log(userZone, "last confirmation");
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Card className={classes.root}>
        <Typography variant="h3" gutterBottom>
          <Avatar
            className={classes.avatar}
            src={
              "https://avatars.dicebear.com/api/initials/" + userName + ".svg"
            }
          />
          Welcome to your hood, {JSON.parse(userName)} !
        </Typography>
        <img className={classes.img} src={"picfour.jpg"} />
        <Typography className={classes.text} variant="h4" gutterBottom>
          My Email : {JSON.parse(email)}{" "}
          <Button variant="outlined" color="primary">
            Change
          </Button>
        </Typography>
        <Typography className={classes.text} variant="h4" gutterBottom>
          My Plantkins are{" "}
          <Button href="/plantkins" variant="outlined" color="primary">
            Here
          </Button>
        </Typography>

        <Typography className={classes.text} variant="h4" gutterBottom>
          My Zone: {userZone}
          {/* <Select
              native
              value={setState.age}
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
            </Select> */}
        </Typography>
        <FormGroup row>
          <Typography className={classes.text} variant="h4">
            Recieve Reminders
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleSwitch}
                name="checkedB"
                color="primary"
              />
            }
          />
        </FormGroup>
      </Card>
    </div>
  );
}

export default Account;
