import React, { Component, useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "../components/TileData/TileData";
import { getPlants, getUser, getUsers, grantAccess, deletePlantsit } from "../utils/API";
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
import CheckboxLabelsPlantsit from "../../src/components/CheckboxRemovePlantsit";
import clickedContext from "../utils/clickedContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
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
    height: "500px",
  },
  card: {
    margin: "2rem",
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
        <div className={classes.root}>

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
                      onClick={() => grantAccess(a.user_id, currentPlant)}
                    >
                      {a.user_id} - Has {a.plants.length} Plantkins
                    </Button>
                  ))}
                  <h2>Remove A Sitter</h2>
                  {userList.map((a) => (
                    <Button
                      onClick={() => deletePlantsit(a._id, currentPlant)}
                    >
                      {a.user_id} - Has {a.plants.length} Plantkins
                    </Button>
                  ))}
                </div>
              </div>
            </Fade>
          </Modal>

          {user.plants ? <h1>My Plantkins</h1> : ""}
          {/* <GridList cellHeight={200} className={classes.gridList} cols={4}> */}
          {user.plants
            ? user.plants.map((plant, i) => (
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Plant Info"
                    height="300"
                    image={plant.image_url}
                    title="Plant Info"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {plant.common_name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    aria-expanded={expandedId === i}
                    aria-label="show more"
                  >
                    Learn More
                    </Button>
                  <CheckboxLabels
                    id={plant._id}
                    isChecked={true}
                  // onClick={isClicked}
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
                    <div>
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
                    </div>
                  </CardContent>
                </Collapse>
              </Card>
              // <GridListTile key={plant._id} cols={1}>
              //   <p>{plant.common_name}</p>
              //   <img src={plant.image_url} alt={plant.common_name} />
              // </GridListTile>
            ))
            : ""}

          <h1>Plantsitting</h1>
          {user.plantsit
            ? user.plantsit.map((plant, i) => (
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Plant Info"
                    height="300"
                    image={plant.image_url}
                    title="Plant Info"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {plant.common_name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <CheckboxLabelsPlantsit
                    id={plant._id}
                    isChecked={true}
                  // onClick={isClicked}
                  />
                  <Button
                    size="small"
                    color="primary"
                    aria-expanded={expandedId === i}
                    aria-label="show more"
                  >
                    Learn More
                    </Button>


                </CardActions>
                <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                  <CardContent>
                    <div>
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
                    </div>
                  </CardContent>
                </Collapse>
              </Card>
              // <GridListTile key={plant._id} cols={1}>
              //   <p>{plant.common_name}</p>
              //   <img src={plant.image_url} alt={plant.common_name} />
              // </GridListTile>
            ))

            : ""}

        </div>
      </Container>
    </>
  );
}
export default Plants;
