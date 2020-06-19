import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { getZone, getUser } from "../utils/API";
import Avatar from "@material-ui/core/Avatar";
import { useEffect } from "react";

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
  let userZone = "";

  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const [zoneTitle, setZoneTitle] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleZone = (zoneData) => {
    const zone = zoneData;
    setZoneTitle({
      ...zoneTitle,
      zoneTitle: zone,
    });
    // console.log(zoneTitle, "last confirmation");
  };
  // GETS USER ZONE
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    getUser(userId)
      .then((res) => {
        getZone(res.data[0].zipCode).then((res) => {
          // console.log(res.data.zipcode, "zone confirm");
          userZone = res.data.zonetitle;
          // setZone({
          //   zonetitle: res.data.zonetitle,
          // });
          handleZone(res.data.zonetitle);
          console.log(userZone, "last confirmation");
        });
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(userZone, "user's zone");

  return (
    <div>
      <div id="accountData" className={classes.root}>
        <FormControl className={classes.formControl}>
          <Typography variant="h3" gutterBottom>
            Welcome to your hood, {JSON.parse(userName)} !
          </Typography>
          <Avatar
            variant="circle"
            alt="Remy Sharp"
            src={
              "https://avatars.dicebear.com/api/initials/" + userName + ".svg"
            }
          />
          <Typography variant="h4" gutterBottom>
            My Email : {JSON.parse(email)}
          </Typography>

          <Typography variant="h4" gutterBottom>
            My USDA Zone : {userZone}
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
