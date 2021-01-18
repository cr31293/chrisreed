import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  greeting: {
    color: "#b2bfca",
    textTransform: "uppercase",
    marginTop: "1.5em",
    marginLeft: "2em",
    fontSize: "42px",
    borderBottomStyle: "solid",
    borderBottomColor: "#2c73e6",
  },
  name: {
    color: "#2c73e6",
    textTransform: "uppercase",
    fontSize: "54px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  return (
    <>
      <Grid container direction="row">
        <Grid style={{ width: "45%" }}>
          <Slide direction="right" in={checked} timeout={2000}>
            <Typography className={classes.greeting}>
              Hi, my name is <span className={classes.name}>Chris Reed</span>
            </Typography>
          </Slide>
        </Grid>
      </Grid>
    </>
  );
}
