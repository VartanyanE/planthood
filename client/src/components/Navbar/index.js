import React, { useState, useEffect, useContext } from "react";
import { browsePlant } from "../../utils/API";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Tooltip from "@material-ui/core/Tooltip";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import MenuListComposition from "../Menu";
import ForumIcon from "@material-ui/icons/Forum";
import EcoIcon from "@material-ui/icons/Eco";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import plantContext from "../../utils/plantContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import userContext from "../../utils/userContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    paddingTop: "6px",
    height: "69px",
    display: "block",
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
  menuBox: {
    display: "flex",
    justifyContent: "end",
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
  toolTip: {
    fontSize: "2em",
    margin: "2px",
  },
  test: {
    display: "inline",
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const [formObject, setFormObject] = useState({});
  const { plants, setPlants } = useContext(plantContext);
  const [search, setSearch] = useState({});
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    browsePlant(search).then(({ data }) => setPlants(data));
    return;
  }, [search]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    setSearch(value);
    props.history.push({
      pathname: "/browse",
    });
  };

  const logOutButton = (event) => {
    setUser(null);
    localStorage.setItem("user", "");
    props.history.push({
      pathname: "/",
    });
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

          {/* Menu Item Wrapper Box */}
          <Box display={{ xs: "none", md: "block" }}>
            <Tooltip title={
                <p className={classes.toolTip}>My Plantkins</p>
              } aria-label="My Plantkins">
              <Link to="/plantkins">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <EcoIcon style={{ fill: "white" }} />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title={
              <p className={classes.toolTip}>Community</p>
            } aria-label="Community">
              <Link to="/community">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ForumIcon style={{ fill: "white" }} />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title={
              <p className={classes.toolTip}>About</p>
            } aria-label="About">
              <Link to="/about">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <InfoOutlinedIcon style={{ fill: "white" }} />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title={
              <p className={classes.toolTip}>My Account</p>
            } aria-label="My Account">
              <Link to="/account">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle style={{ fill: "white" }} />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title={
              <p className={classes.toolTip}>Browse Plants</p>
            } aria-label="Browse Plants">
              <Link to="/browse">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <SearchIcon style={{ fill: "white" }} />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>

          <div className={classes.search}>
            <div className={classes.searchIcon}>{/* <SearchIcon /> */}</div>
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
          <Box display={{ xs: "block", md: "none" }}>
            <MenuListComposition />
          </Box>
          <Tooltip title={
              <p className={classes.toolTip}>Log Out</p>
            } aria-label="Log Out">
            <Link to="/">
              <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                onClick={logOutButton}
              >
                <ExitToAppIcon style={{ fill: "white" }} />
              </IconButton>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
