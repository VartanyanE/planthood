import React, { useState, useEffect } from "react";
import { browsePlant } from "../../utils/API"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuListComposition from "../Menu";
import ForumIcon from "@material-ui/icons/Forum";
import EcoIcon from "@material-ui/icons/Eco";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    paddingTop: "6px",
    height: "69px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: 1100,
  },
  title: {
    flexGrow: 1,
    marginLeft: "1rem",
    fontSize: "2.25em",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  test: {
    display: "inline",
  },
}));


function Navbar() {
  const classes = useStyles();

  const [formObject, setFormObject] = useState({});
  const [plants, setPlants] = useState([]);
  useEffect(()=>{
    browsePlant().then(({data})=>setPlants(data))
 })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });

    const browsed = browsePlant(value);
    console.log('browsed', browsed)
    setPlants(browsed)
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            {" "}
            <img src="nav-logo.png" alt="logo" className={classes.logo} />
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            PLANTHOOD
          </Typography>
          <Link to="/plantkins">
          <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <EcoIcon />
            </IconButton>
            </Link>
            <Link to="/community">
          <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <ForumIcon />
            </IconButton>
            </Link>
            <Link to="/about">
          <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <InfoOutlinedIcon />
            </IconButton>
          </Link>
              <Link to="/account">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
          
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
          </div>
          <MenuListComposition />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;