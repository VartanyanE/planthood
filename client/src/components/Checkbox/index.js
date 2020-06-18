import React, { useContext, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import userContext from "../../utils/userContext";
import { addRemovePlant, getUser, checkUserPlant } from "../../utils/API";

let heartColorChecked = green[600]
let heartColorUnchecked = green[400]
const GreenCheckbox = withStyles({
  root: {
    color: heartColorUnchecked,
    "&$checked": {
      color: heartColorChecked,
    },
  },
  checked: {},
})((props) => <Checkbox color="green" {...props} />);

export default function CheckboxLabels({ id, isChecked }) {


  const [user, setUser] = useState([]);
  const [state, setState] = React.useState(false);
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    getUser(userId)
      .then((res) => {
        setUser(res.data[0]);
        handleCheckedLoad(id, res.data[0]._id)
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = () => {

    addRemovePlant(id, user._id, state ? "remove" : "add").then(({ data }) => {
      setUser(data)
    }
    );
    setState(!state);
  };

  const handleCheckedLoad = (pId, uId) => {

    checkUserPlant(pId, uId).then((res) => {

      if (res.data.plants.length > 0 !== null) {
        console.log('setstate:', id, res.data.plants)
        setState(true)
      }

    }).catch((err) => console.log(err));
  }



  return (
    <FormControlLabel
      control={
        <GreenCheckbox
          checked={isChecked}
          onChange={handleChange}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name="checkedH"
        />
      }
      label="Add to My Plantkins"
    />
  );
}
