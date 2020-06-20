import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Accordion from "../Accordion";
import plantContext from "../../utils/plantContext";
import Grid from '@material-ui/core/Grid';
import "./style.css";
import { getUser } from "../../utils/API";
import { Box } from "@material-ui/core";

import clickedContext from "../../utils/clickedContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  const { plants, setPlants } = useContext(plantContext);
  const [user, setUser] = useState({});
  const [selectedPlants, setSelectedPlants] = useState([]);
  const { clicked, setClicked } = useContext(clickedContext);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));
    getUser(userId)
      .then((res) => {
        setUser(res.data[0]);
        setSelectedPlants(res.data[0].plants.map((plant) => plant._id));
      })
      .catch((err) => console.log(err));
  }, [clicked]);

  return (
    // <TableContainer component={Paper} >
    //   <Table className={classes.table} aria-label="simple table">
    //     <TableHead />
    //     <TableBody>
    <Grid container className={classes.root} spacing={1}>
      {plants.map((plant, i) => (
        <Grid item xs={6}>
          <Accordion row={plant} plantId={plant._id} rowId={i} hasBeenChecked={selectedPlants.includes(plant._id)} />
        </Grid>
      ))}
    </Grid>
      
    //     </TableBody>
    //   </Table>
    // </TableContainer >
  );
}
