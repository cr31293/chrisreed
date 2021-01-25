import React from 'react';
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

import mobileAppsIcon from "../../../assets/mobileIcon.svg";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    margin: "auto",
    marginLeft: "50em",
    marginTop: "-8em",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "35em",
      marginTop: "-8em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-8em",
      marginLeft: "22.5em",
    
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em"
    }
  },
  responsiveContainer: {
    
  },
  header: {
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "#374952",
    marginBottom: ".5em",
    [theme.breakpoints.down("lg")]: {

    }

  },
  text: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: "#92a1ab",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem"
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    fontSize: "2rem",
    fontWeight: 300,
    color: "red",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem"
    }
  },
  mobileIcon: {
    height: "10em",
    display: "flex",
    marginBottom: "1em",
    marginRight: "5em",
    [theme.breakpoints.down("md")]: {
      height: "8em",
      marginRight: "2.5em"
    }
  }
}))

export default function HomePage () {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
        <Grid 
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.gridContainer}
        >
          <img
            className={classes.mobileIcon}
            alt="mobile device icon"
            src={mobileAppsIcon}
          />
          <Grid
            className={classes.responsiveContainer} 
            item
            sm
          >
            <Typography 
              variant="h4"
              className={classes.header}
            >
              Responsive Web Development
            </Typography>
            <Typography 
              variant="subtitle"
              className={classes.text}
            >
              Development designs with mobile-phones, tablets, and PCs in 
              {matchesSM ? <br /> : <br />} 
              mind to make user experience top-notch on 
              <span className={classes.specialText}> any device.</span>
            </Typography>
          </Grid>
        </Grid>

    </>
  )
}