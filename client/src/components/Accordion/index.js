import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


export default function ControlledExpansionPanels({ row }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <TableRow key={row.name}>
            <TableCell align="right"><img src={row.image_url} style={{width: "12vh"}}/></TableCell>
            <TableCell component="th" scope="row" style={{fontWeight: 'bold'}}>
              {row.common_name}
            </TableCell>
            <TableCell align="right">I Love {row.lighting_needs}</TableCell>
            <TableCell align="right">Water Me {row.watering_needs}</TableCell>
            {/* <TableCell align="right"> ADD BUTTON/CHECKBOX HERE </TableCell> */}
          </TableRow>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {console.log(row)}
            <p><span style={{fontWeight: "bold"}}> Plant Care: </span>{row.plant_care}</p>
            <p><span style={{fontWeight: "bold"}}>USDA Hardiness Zone: </span>{row.USDA_zone}</p>
            <p><span style={{fontWeight: "bold"}}>Human Edible: </span> {row.human_edible}</p>
            <p><span style={{fontWeight: "bold"}}>Pet Edible: </span>{row.pet_edible}</p>
            <p><span style={{fontWeight: "bold"}}>Soil Needs: </span>{row.soil_needs}</p>
            
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
