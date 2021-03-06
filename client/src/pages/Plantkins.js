import React, { Component, useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import tileData from "../components/TileData/TileData";
import {
  getPlants,
  getUser,
  getUsers,
  grantAccess,
  deletePlantsit,
} from "../utils/API";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

//Card info
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import userContext from "../utils/userContext";
import Collapse from "@material-ui/core/Collapse";
import CheckboxLabels from "../../src/components/CheckboxRemove";
import CheckboxLabelsRemovePlantsit from "../../src/components/CheckboxRemovePlantsit";
import clickedContext from "../utils/clickedContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    textAlign: "center"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    height: "300px",
  },
  card: {
    width: '100%'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
}));

// if there's something added to plantkins page, that needs to be changed.... name, image... add, delete, favorite

function Plants() {
  // Setting our component's initial state
  // const [plants, setPlants] = useState([]);
  // const { user, setUser } = useContext(userContext);
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);
  const [currentPlant, setCurrentPlant] = useState(null);
  const [open, setOpen] = useState(false);
  const { clicked, setClicked } = useContext(clickedContext);
  const classes = useStyles();
  const handleOpen = (id) => {
    setCurrentPlant(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"));

    getUser(userId)
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((err) => console.log(err));

    getUsers().then(({ data }) =>
      setUserList(data.filter((a) => !(a.user_id === userId)))
    );
  }, [clicked]);

  //expand button code
  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };
  return (
    <>
      <Container className={classes.main}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className={classes.list}>
                <h2 id="transition-modal-title">Select A Sitter</h2>
                {userList.map((a) => (
                  <Button
                    onClick={() => {
                      grantAccess(a.user_id, currentPlant)
                      toast("Plantsitter added!")
                    }
                    }
                  >
                    {a.user_id} - Has {a.plants.length} Plantkins
                  </Button>
                ))}
                <h2>Remove A Sitter</h2>
                {userList.map((a) => (
                  <Button onClick={() => {
                    deletePlantsit(a._id, currentPlant)
                    toast("Plantsitter removed!")
                  }
                  }>
                    {a.user_id} - Has {a.plants.length} Plantkins
                  </Button>
                ))}
              </div>
            </div>
          </Fade>
        </Modal>
        <Grid container className={classes.root} spacing={4}>
          {user.plants ? <Grid item xs={12}><h1 className={classes.header}>My Plantkins</h1></Grid> : ""}
          {/* <GridList cellHeight={200} className={classes.gridList} cols={4}> */}
          {user.plants
            ? user.plants.map((plant, i) => (
              <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Plant Info"
                      height="500"
                      image={plant.image_url}
                      title="Plant Info"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {plant.common_name.includes(",") ? plant.common_name.substring(0, plant.common_name.indexOf(",")) : plant.common_name}
                      </Typography>
                      <Typography>
                        {plant.common_name.includes(",") ? "Other names:" + plant.common_name.substring(plant.common_name.indexOf(",") + 1) : "No other known names"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      aria-expanded={expandedId === i}
                      aria-label="show more"
                      onClick={() => handleExpandClick(i)}
                    >
                      Learn More
                    </Button>
                    <CheckboxLabels
                      id={plant._id}
                      isChecked={true}
                    />
                    {plant.plant_sitter ? (
                      <Button>
                        `Currently Under Care of ${plant.plant_sitter}`
                    </Button>
                    ) : (
                        <Button
                          color="primary"
                          onClick={() => handleOpen(plant._id)}
                        >
                          Assign/Remove Plant Sitter
                      </Button>
                      )}
                  </CardActions>
                  <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography>
                        <strong>Scientific Name:</strong> {plant.family_name}
                        <br />
                        <strong>Plant Care:</strong> {plant.plant_care}
                        <br />
                        <strong>Foliage Color:</strong> {plant.foliage_color}
                        <br />
                        <strong>Lighting Needs:</strong> {plant.lighting_needs}
                        <br />
                        <strong>Watering Needs:</strong> {plant.watering_needs}
                        <br />
                        <strong>Soil Needs:</strong> {plant.soil_needs}
                        <br />
                        <strong>USDA Hardiness Zone:</strong> {plant.USDA_zone}
                        <br />
                        <strong>Human Edible:</strong> {plant.human_edible}
                        <br />
                        <strong>Pet Edible:</strong> {plant.pet_edible}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))
            : ""}
          <Grid item xs={12}><h1 className={classes.header}>Plantsitting</h1></Grid>
          {user.plantsit
            ? user.plantsit.map((plant, i) => (
              <Grid item xs={12} md={6}>
                <Card className={classes.card}>

                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Plant Info"
                      height="500"
                      image={plant.image_url}
                      title="Plant Info"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {plant.common_name.includes(",") ? plant.common_name.substring(0, plant.common_name.indexOf(",")) : plant.common_name}
                      </Typography>
                      <Typography>
                        {plant.common_name.includes(",") ? "Other names:" + plant.common_name.substring(plant.common_name.indexOf(",") + 1) : "No other known names"}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <CheckboxLabelsRemovePlantsit
                      id={plant._id}
                      isChecked={true}
                    />
                    <Button
                      size="small"
                      color="primary"
                      aria-expanded={expandedId === i + user.plants.length}
                      aria-label="show more"
                      onClick={() => handleExpandClick(i + user.plants.length)}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                  <Collapse in={expandedId === i + user.plants.length} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography>
                        <strong>Scientific Name:</strong> {plant.family_name}
                        <br />
                        <strong>Plant Care:</strong> {plant.plant_care}
                        <br />
                        <strong>Foliage Color:</strong> {plant.foliage_color}
                        <br />
                        <strong>Lighting Needs:</strong> {plant.lighting_needs}
                        <br />
                        <strong>Watering Needs:</strong> {plant.watering_needs}
                        <br />
                        <strong>Soil Needs:</strong> {plant.soil_needs}
                        <br />
                        <strong>USDA Hardiness Zone:</strong> {plant.USDA_zone}
                        <br />
                        <strong>Human Edible:</strong> {plant.human_edible}
                        <br />
                        <strong>Pet Edible:</strong> {plant.pet_edible}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))
            : ""}
        </Grid>
      </Container>
    </>
  );
}
export default Plants;