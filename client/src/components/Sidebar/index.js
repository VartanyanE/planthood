import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: "absolute",
    flexShrink: 0,
    zIndex: 1000,
  },
  drawerContainer: {
    width: "18vw",
    height: "80vh",
    overflow: "auto",
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={{ lg: "fixed" }}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar className={classes.spacer} />
          <div className={classes.drawerContainer}>
            <h2>Nanny Plantkins</h2>
            <p>plant Id</p>
            <p>plant pic</p>
            {/* TODO: PUT ALL THE STUFF HERE */}
          </div>
        </Drawer>
      </Box>
    </div>
  );
}
