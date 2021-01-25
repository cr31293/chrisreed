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
    display: "flex",
    width: "50em",
    margin: "auto",
    float: "right",
    marginRight: "25em",
    marginTop: "-15em",
  },
  itemArea: {
    borderColor: "white",
  },
  itemContainer: {
    borderColor: "white",
  },
  root: {
    height: "25em",
    width: "50em",
    marginTop: "10em",
    marginLeft: "5em",
    paddingBottom: "1em",
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
  },
  adiv: {
    width: "100%"
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
