import React, { Component, useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "../components/TileData/TileData";
import { getPlants } from "../utils/API";
import Sidebar from "../components/Sidebar";
import Container from "@material-ui/core/Container";

//Card info
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import userContext from "../utils/userContext";
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
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
    margin: "2rem"
  }
}));

// if there's something added to plantkins page, that needs to be changed.... name, image... add, delete, favorite

function Plants() {
  // Setting our component's initial state
  const [plants, setPlants] = useState([]);
  const { user, setUser } = useContext(userContext);
  // const [user, setUser] = useState();
  // setUser(localStorage.getItem("user"));
  // Load all books and store them with setBooks
  useEffect(() => {
    const user = localStorage.getItem("user");
    loadPlants(JSON.parse(user));
  }, []);

  function loadPlants(user_id) {
    getPlants(user_id)
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  }
  const classes = useStyles();

  //expand button code

  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <>
      <Sidebar />
      <Container className={classes.main}>
        <div className={classes.root}>
          <h1>Plantkins</h1>
          {/* <GridList cellHeight={200} className={classes.gridList} cols={4}> */}
          {plants.map((plant, i) => (
            
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image={plant.image_url}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {plant.common_name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" 
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedId === i}
                  aria-label="show more">
                  Learn More
                </Button>
              </CardActions>
              <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                <CardContent>
                  <div>lorem ipsum bjkelpajdfkl;ajfdkls;jfpl;ashjkafs;hdkl;kas jfakld;s jfdsakl; fjaksld; fjkas;l hiuknmfacpio hamfluahsu  hajpklnmchsapilmkxg fh akljhjaghklmdsjk halkjsd. fjkpa;  fs; fk;</div>
                </CardContent>
              </Collapse>
            </Card>
            // <GridListTile key={plant._id} cols={1}>
            //   <p>{plant.common_name}</p>
            //   <img src={plant.image_url} alt={plant.common_name} />
            // </GridListTile>
          ))}
          {/* </GridList> */}
        </div>
      </Container>
    </>
  );
}
export default Plants;
