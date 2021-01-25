import React, { useState, useRef } from "react";
import { render } from 'react-dom';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring';
import { makeStyles, useTheme } from "@material-ui/styles";
import data from './data.json';
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Link from "@material-ui/core/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";





const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    margin: "auto",
    marginLeft: "0em",
    marginTop: "-6em",
    marginLeft: "7.5em",
    width: "25em",
    height: "25em",
  },
  gridList: {
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: 1
    }
  },
  itemArea: {
    borderColor: "white",
  },
  itemContainer: {
    borderColor: "red",
  },
  tileBar: {
    backgroundColor: "rgba(0,0,0,.75)"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "2rem",
    display: "inline",
  }
}));

export default function Portfolio() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, set] = useState(false)
  // const colMatches = useMediaQuery(theme.breakpoints.down("sm"));
  // const gridListTileDisplay = colMatches ? "listItems" : "flex";
  // const gridListTileWidth = colMatches ? "100%" : "50%";

const springRef = useRef()
const { size, opacity, ...rest } = useSpring({
  ref: springRef,
  config: config.gentle,
  from: { size: '1%', backgroundColor: 'white' },
  to: { size: open ? '100%' : '100%', backgroundColor: '#92a1ab' }
})

const transRef = useRef()
const transitions = useTransition(open ? data : [], item => item.name, {
  ref: transRef,
  unique: true,
  trail: 400 / data.length,
  from: { opacity: 0, transform: 'scale(0)' },
  enter: { opacity: 1, transform: 'translate3d(42px, -62px, -135px)' },
  leave: { opacity: 0, transform: 'scale(0)' }
})

useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])

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
          <animated.div 
            style={{ 
              ...rest, 
              width: size, 
              height: size,
              position: 'relative',
              display: 'flex',
              padding: '25px',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.05)',
            }}
          >
            <GridList 
              cellHeight={"auto"}
              className={classes.gridList}
            >
              <GridListTile
                key="Subheader"
                cols= { 2 }
              >
                <ListSubheader component="div" />
              </GridListTile>
              {data.map((tile, key, props) => (
                <GridListTile
                  className={classes.tile}
                  key={tile.image}
                  style={{
                    width: "50%",
                    height: "10rem",
                    paddingRight: "1rem",
                    paddingLeft: "1rem",
                    paddingBottom: "2rem",
                    display: "flex",
                    margin: "auto",
                  }}
                >
                  <Link
                    href={tile.live}
                    target="_blank"
                    rel="noopener"
                  >
                    <img
                      src={process.env.PUBLIC_URL + tile.image}
                      alt={tile.tile}
                    />
                  </Link>
                  <GridListTileBar
                    className={classes.tileBar}
                    title={tile.title}
                    actionIcon={
                      <Button
                        className={classes.icon}
                        aria-label={`info about ${tile.title}`}
                      >
                        <InfoIcon className={classes.icon} />
                      </Button>
                    }
                  ></GridListTileBar>

                </GridListTile>
              ))}
            </GridList>
            
          </animated.div>
        
        </Grid>
      </Grid>
    </>
  );
}

render(<Portfolio />, document.getElementById('root'))