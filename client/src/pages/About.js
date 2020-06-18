import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 5000,
    marginTop: "100px",
  },
});

const imgStyle = {
  width: '15vh',
  height: '15vh',
  display: 'flex'
}

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        For the Love of Plants
      </Typography>
      <Typography variant="h4" gutterBottom>
        Keeping plants alive is hard. That's where we come in!
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Thanks for joining <strong>PLANTHOOD!</strong> We're so happy to have you in our virtual
        greenhouse. Start adding plants to your plantkins to get started!
      </Typography>

      <Typography variant="body1" gutterBottom>
        Every time we went on vacation, our plants would suffer. No matter who we trusted with our plants, they didn't have the knowledge to keep em healthy and thriving. We created PLANTHOOD with everyone in mind - even those who don't have a green thumb!
      </Typography>
      <br/>
      <Typography variant="h4" gutterBottom>
       Who We Are:
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        <a target="_blank" href="https://github.com/skrantzz">Sydney Krantz</a><br/>
        <img style={imgStyle} src="https://avatars3.githubusercontent.com/u/51732808?s=400&u=12cfb14797c88903f86513d0b671ae1215851d3c&v=4"/>
        <br/>
        <a target="_blank" href="https://github.com/VartanyanE">Emanuil Vartanyan</a><br/>
        <img style={imgStyle} src="https://avatars1.githubusercontent.com/u/15513093?s=400&u=db39433ce07a73ad3e0b60da08b6d9c657bac5ba&v=4"/>
        <br/>
        <br/>
        <a target="_blank" href="https://github.com/mlfiii">Martin Funches</a><br/>
        <img style={imgStyle} src="https://avatars3.githubusercontent.com/u/57580332?s=460&u=42b061be70f9ac15d45d301f92261e05db2cd667&v=4"/>
        <br/>
        <br/>
        <a target="_blank" href="https://github.com/AnnaOlt">Anna Olt</a><br/>
        <img style={imgStyle} src="https://avatars2.githubusercontent.com/u/58372483?s=460&u=6616430578acc1b13dd94d4f08a53767aa11a309&v=44"/>
        <br/>
        <br/>
        <a target="_blank" href="https://github.com/stephdedios">Stephanie De Dios</a><br/>
        <img style={imgStyle} src="https://avatars1.githubusercontent.com/u/57610719?s=460&v=4"/>
        <br/>
        <br/>
        <a target="_blank" href="https://github.com/thetntm">Michael Becker</a><br/>
        <img style={imgStyle} src="https://avatars1.githubusercontent.com/u/12042483?s=460&u=78db7f86d4babc5f63258afa091ca6588bcd36fa&v=4"/>
        <br/>
        <br/>
      </Typography>
    </div>
  );
}
