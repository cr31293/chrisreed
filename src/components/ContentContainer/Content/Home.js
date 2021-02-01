import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";

import fullStackIcon from "../../../assets/fullstack.svg";
import mobileAppsIcon from "../../../assets/mobileIcon.svg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    margin: "auto",
    marginLeft: "15em",
    marginTop: "15em",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "3em",
      marginTop: "15em",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "-2em",
      marginTop: "15em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "4em",
      marginTop: "8em",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
      lineHeight: "1.5em"
    }
  },
  responsiveContainer: {
    marginTop: "10em",
    marginLeft: "0em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "30em",
      marginTop: "7.5em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25em",
      marginTop: "10.5em",
      marginLeft: "-2em", 
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
      marginTop: "-1em",
      padding: "3em",
      lineHeight: "1.5em",
    }
  },

  fullStackContainer: {
    marginTop: "2em",
    marginLeft: "0em",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "30em",
      marginTop: "0.5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
      marginLeft: "0.5em",
      marginTop: "2.5em"
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },

  header: {
    fontSize: "1.75rem",
    fontWeight: 700,
    color: "#374952",
    marginBottom: ".5em",
    [theme.breakpoints.down("lg")]: {

    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      textAlign: "center"
    }
  },
  text: {
    fontSize: "1.25rem",
    fontWeight: 300,
    color: "#92a1ab",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    fontSize: "2rem",
    fontWeight: 300,
    color: "red",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  fullStackIcon: {
    height: "12em",
    display: "flex",
    marginRight: "0em",
    transform:'rotate(315deg)',
    [theme.breakpoints.down("md")]: {
      height: "7em",
      marginRight: "2.5em",
      marginLeft: "3em"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-8em",
      marginTop: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em"
    }

  },
  mobileIcon: {
    height: "10em",
    display: "flex",
    marginTop: "8em",
    marginRight: "0em",
    [theme.breakpoints.down("md")]: {
      height: "5em",
      marginRight: "2.5em",
      marginLeft: "3em"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "11em",
      marginLeft: "-1em"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    }
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container className={classes.gridContainer} direction="column">
        <Grid item>
    {/* full-stack block */}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
          >
            <img
              className={classes.fullStackIcon}
              alt="mobile device icon"
              src={fullStackIcon}
            />
            <Grid className={classes.fullStackContainer} item sm>
              <Typography variant="h4" className={classes.header}>
                Full-Stack Development
              </Typography>
              <Typography variant="subtitle" className={classes.text}>
                Web app creation from  server to  client focused 
                {matchesSM ? <null /> : <br />}
                on how each step best contributes to
                <span className={classes.specialText}> the product.</span>
              </Typography>
            </Grid>
          </Grid>
          {/* Responsive Design block */}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
          >
            <img
              className={classes.mobileIcon}
              alt="mobile device icon"
              src={mobileAppsIcon}
            />
            <Grid className={classes.responsiveContainer} item sm>
              <Typography variant="h4" className={classes.header}>
                Responsive Web Development
              </Typography>
              <Typography variant="subtitle" className={classes.text}>
                Development designs with mobile-phones, tablets, and PCs in
                {matchesSM ? <null /> : <br />}
                mind to make user experience top-notch on
                <span className={classes.specialText}> any device.</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
