import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  greeting: {
    color: "#b2bfca",
    textTransform: "uppercase",
    marginTop: "3.5em",
    marginLeft: "2em",
    fontSize: "2.75rem",
    transitionDelay: "5000",
    fontFamily: "Roboto Mono"
  },
  name: {
    color: "#374952",
    textTransform: "uppercase",
    fontSize: "3.5rem",
    fontFamily: "Roboto Mono"
  },

}));

export default function Greeting() {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  return (
    <>
      <Grid container direction="row">
        <Grid style={{ width: "60em" }}>
          <Slide direction="right" in={checked} timeout={3000}>
            <Typography className={classes.greeting}>
              Hi, my name is <span className={classes.name}>Chris Reed</span>
            </Typography>
          </Slide>
        </Grid>
      </Grid>
    </>
  );
}
