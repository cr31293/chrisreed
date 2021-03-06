import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useTransition, animated, config } from 'react-spring'
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "inline",
    width: "50em",
    margin: "auto",
    contentAlign: "center",
  },
  itemArea: {
    borderColor: "transparent",
  },
  itemContainer: {
    borderColor: "transparent",
  },
  root: {
    height: "25em",
    width: "50em",
    paddingBottom: "1em",
    [theme.breakpoints.down("md")]: {
      width: "30em",
      height: "38em"
    },
    [theme.breakpoints.down("sm")]: {
      width: "27.5em",
      height: "38.5em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
    },
  },
  imgDiv: {
    height: "8em",
    width: "100%",
    margin: "auto",
    marginBottom: "1.5em",
    backgroundColor: "#697983",
  },
  large: {
    width: "5.5em",
    height: "7em",
    margin: "auto",
  },
  text: {
    marginTop: "0em",
    color: "#374952",
    paddingLeft: "2em",
    paddingRight: "2em",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0em",
      paddingRight: "0em",
    }
  },
  adiv: {
    width: "100%",
    marginLeft: "10em",
    marginTop: "15em",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "10em",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "30%",
      marginTop: "17.5%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "25%",
      marginTop: "10em"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-6.5%",
    }
  }
}));
export default function About() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [show, set] = useState(false);

  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: "translate(100%, 0)"  },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 1, transform: "translate(-50%, 0)" },
    });


  // const transitions = useTransition(index, item, key => item.key, {
  //   config: config.gentle,
  //   from: { opacity: 0, transform: "translate(100%, 0)" },
  //   enter: { opacity: 1, transform: "translate(0%, 0)" },
  //   leave: { opacity: 0, transform: "translate(-50%, 0)" },
    
  // });

  return transitions.map(({ item, key, props}) =>
    <>
     <animated.div 
              className={classes.adiv}
              style={props}
              key={key}
              >
          
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.gridContainer}
        >
        <Grid className={classes.itemContainer} item></Grid>

        <Card className={classes.root}>
          <div className={classes.imgDiv}>
            <Avatar
              className={classes.large}
              alt="Chris Reed"
              src="/images/ContactPicture.PNG"
            />
          </div>
          <CardContent>
            <Typography
              className={classes.text}
              variant="h6"
              align="center"
              paragraph
            >
              I&apos;m a Full-Stack Web Developer with a previous background in
              business where I&apos;ve worked as an analyst supporting Sales and
              Supply and Distributions, leveraging both in-house applications
              and Tableau to help drive data-based bussiness decisions. Recently
              I&apos;ve completed a Full-Stack Web Development program at
              Vanderbilt University where I&apos;ve developed skills in HTML,
              CSS, and Javascript with focuses on <strong>M</strong>ongoDB{" "}
              <strong>E</strong>xpress <strong>R</strong>
              eact and <strong>N</strong>odeJS.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      </animated.div>
    </>
  );
}
