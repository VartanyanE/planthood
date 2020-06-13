import React, { useContext } from "react";
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  const { plants, setPlants } = useContext(plantContext);
  console.log(plants[0]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Plant Name</TableCell>
            <TableCell align="right">Plant Family</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Light Conditions</TableCell>
            <TableCell align="right">Thirst</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plants.map((row) => (
            <Accordion row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
