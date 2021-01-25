import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import About from './Content/About';

const useStyles = makeStyles((theme) => ({

  gridContainer: {
    display: "flex",
    margin: "auto",
    marginLeft: "-15em",
    marginTop: "-15em"
  },
  itemArea: {
    borderColor: "white",
  },
  itemContainer: {
  borderColor: "white"
  }
}))

export default function ContentContainer () {
const classes = useStyles();

  return (
    <>
        <Grid 
          container
          direction="row"
          justify="center"
          className={classes.gridContainer}
        >
          <Grid
            className={classes.itemContainer} 
            item
          >

          </Grid>
        </Grid>

    </>
  )
}

