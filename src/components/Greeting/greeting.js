import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Divider from "../Divider/divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "transparent",
    boxShadow: 'none',
    pointerEvents: "none",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1.5em",
      padding: "1em"
    }
  },
  greeting: {
    color: "#92a1ab",
    textTransform: "uppercase",
    marginLeft: "0.75em",
    fontSize: "2.5rem",
    transitionDelay: "5000",
    fontFamily: "Roboto Mono",
    wordSpacing: -3,
    width: "25em",
    [theme.breakpoints.down("lg")]: {
      width: "20em",
      fontSize: "2rem"
    },
    [theme.breakpoints.down("md")]: {
      width: "20em",
      fontSize: "1.5rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      marginLeft: ".25em",
    }
  },
  name: {
    color: "#374952",
    textTransform: "uppercase",
    fontSize: "3.5rem",
    fontFamily: "Roboto Mono",
    [theme.breakpoints.down("lg")]: {
      fontSize: "3rem"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }

  },

  fullStackItem: {
    height: "2em",
  },
  
  fullStack: {
    color: "#374952",
    textTransform: "uppercase",
    fontSize: "2rem",
    marginLeft: "4em",
    backgroundColor: "transparent",

    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
      marginLeft: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginLeft: "0em"
    }
  },
}));

export default function Greeting() {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  

  return (
    <>
      <AppBar 
        position="fixed"
        className={classes.appbar}
      >

      <Grid 
        container 
        direction="column"
        style={{ width: "100%"}}
      >
        <Grid item style={{ width: "20em" }}>
          <Slide direction="right" in={checked} timeout={3000}>
            <Typography className={classes.greeting}>
              Hi, my name is <span className={classes.name}>Chris Reed</span>
            </Typography>
          </Slide>
        </Grid>
          <Divider />
        <Grid 
          item
          className={classes.fullStackItem}>
            <Typography 
              className={classes.fullStack}
            >
              Full-Stack Web Developer
            </Typography>
        </Grid>
        <Grid
          item
          >
        </Grid>
      </Grid>

      </AppBar>
    </>
  );
}
