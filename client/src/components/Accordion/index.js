import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './style.css'

//card stuff
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import userContext from "../utils/userContext";
import Collapse from "@material-ui/core/Collapse";

import CheckboxLabels from '../Checkbox'
import { getUser } from "../../utils/API";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  main: {
    marginTop: "6rem",
    marginLeft: "2px",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  image: {
    height: "500px",
  },
  card: {
    margin: "2rem",
  },
}))

export default function ControlledExpansionPanels({ row, plantId, hasBeenChecked }) {
  const theme = useTheme();
  const classes = useStyles()
  const i = plantId;
  const [expanded, setExpanded] = React.useState(false)
  const [user, setUser] = useState([]);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const [state, setState] = React.useState(false);

  const [expandedId, setExpandedId] = React.useState(-1);

  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const verySmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Plant Info"
            height="500"
            image={row.image_url}
            title="Plant Info"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {row.common_name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

          <Button size="small" color="primary">
            Share
            </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => handleExpandClick(i)}
            aria-expanded={expandedId === i}
            aria-label="show more"
          >
            Learn More
            </Button>
          <CheckboxLabels id={row._id} isChecked={hasBeenChecked} />
        </CardActions>
        <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
          <CardContent>
            <div>
              <strong>Scientific Name:</strong> {row.family_name}
              <br />
              <strong>Plant Care:</strong> {row.plant_care}
              <br />
              <strong>Foliage Color:</strong> {row.foliage_color}
              <br />
              <strong>Lighting Needs:</strong> {row.lighting_needs}
              <br />
              <strong>Watering Needs:</strong> {row.watering_needs}
              <br />
              <strong>Soil Needs:</strong> {row.soil_needs}
              <br />
              <strong>USDA Hardiness Zone:</strong> {row.USDA_zone}
              <br />
              <strong>Human Edible:</strong> {row.human_edible}
              <br />
              <strong>Pet Edible:</strong> {row.pet_edible}
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}
