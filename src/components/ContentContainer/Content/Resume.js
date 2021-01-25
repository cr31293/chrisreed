import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  media: {
    [theme.breakpoints.down("md")]: {
    },
    width: "auto",
    marginLeft: "45em",
    marginTop: "-13em",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginLeft: "12.5em",
      marginTop: "-9.25em",
      width: "80%",
    }
  },
  adiv: {
    width: "50em",
    pointerEvents: "none"
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
