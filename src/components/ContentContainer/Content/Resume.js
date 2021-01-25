import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  media: {
    width: "110%",
    marginTop: "5em",
    marginLeft: "10em",
    marginRight: "-16.65em",
    display: "block",
    [theme.breakpoints.down("lg")]: {
      marginRight: "10em",
      marginTop: "5em",
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "5em",
      marginTop: "5em",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0em",
      marginTop: "7.5em",
      width: "100%"
    },
  },
  adiv: {
    width: "auto",
    pointerEvents: "none",
    padding: "0em",
    marginRight: "50em",
    [theme.breakpoints.down("lg")]: {
      marginRight: "5em"
    },
 
  }
}));

export default function Resume () {
  const classes = useStyles();
  const [show, set] = useState(false);

  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: "translate(100%, 0)"  },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 1, transform: "translate(-50%, 0)" },
    });


  return transitions.map(({ item, key, props}) =>
    <>  
      <animated.div
        className={classes.adiv}
        style={props}
        key={key}
      >
        <CardMedia
          component="img"
          alt="Resume"
          image="/images/resume.png"
          title="Resume"
          className={classes.media}
          
          >
        </CardMedia>
      </animated.div>
       
    </>
  );
}
