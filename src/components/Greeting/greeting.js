import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Divider from "../Divider/divider";

const useStyles = makeStyles((theme) => ({
  greeting: {
    color: "#374952",
    textTransform: "uppercase",
    marginTop: "1em",
    marginLeft: "0.75em",
    fontSize: "2.5rem",
    transitionDelay: "5000",
    fontFamily: "Roboto Mono",
    wordSpacing: -5,
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
      marginLeft: ".25em"
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
    height: "5em",

  },
  fullStack: {
    color: "#374952",
    textTransform: "uppercase",
    fontSize: "2rem",
    marginTop: ".5em",
    marginLeft: "3em",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
      marginLeft: "2em"
    }
  }

}));

export default function Greeting() {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  return (
    <>
      <Grid 
        container 
        direction="column"
        style={{ width: "20em"}}
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
      </Grid>
    </>
  );
}
