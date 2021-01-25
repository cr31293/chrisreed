import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  media: {
    [theme.breakpoints.down("md")]: {
      width: "-webkit-fill-available",
    },
    width: "auto",
    marginLeft: "45em",
    marginTop: "-16em",
    display: "inline",
  },
}));

export default function Resume () {
  const classes = useStyles();

  return (
    <>  
        <CardMedia
          component="img"
          alt="Resume"
          image="/images/resume.png"
          title="Resume"
          className={classes.media}
          >
        </CardMedia>
       
    </>
  );
}
