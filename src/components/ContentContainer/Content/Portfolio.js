import React, { useState, useRef } from "react";
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
import GitHubIcon from "@material-ui/icons/GitHub";
import CardHeader from "@material-ui/core/CardHeader";





const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    margin: "auto",
    float: "right",
    marginTop: "-10em",
    marginRight: "25em",
    width: "40em",
    height: "40em",
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
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "2rem",
    display: "inline",
    marginTop: ".125em",
  },
  tilebar: {
    marginTop: "-1em"
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
  config: config.default,
  from: { size: '1%', backgroundColor: 'white' },
  to: { size: open ? '100%' : '100%', backgroundColor: '#c4cacf' }
})

const transRef = useRef()
// const transitions = useTransition(open ? data : , tile => tile.name, {
//   ref: transRef,
//   unique: true,
//   trail: 400 / data.length,
//   from: { opacity: 0, transform: 'scale(0)' },
//   enter: { opacity: 1, transform: 'translate3d(42px, -62px, -135px)' },
//   leave: { opacity: 0, transform: 'scale(0)' }
// })

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
              <>
                <GridListTile
                  className={classes.tile}
                  key={tile.image}
                  style={{
                    width: "50%",
                    height: "12.5rem",
                    paddingRight: "1rem",
                    paddingLeft: "1rem",
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
                  <CardHeader 
                    className={classes.tilebar}
                    title={tile.title}
                    style={{
                      backgroundColor: "black", 
                      opacity: '.75', 
                      color: "white",
                      height: "2.5em"
                    }}
                    action={
                      <>
                      <Button
                        className={classes.icon}
                        aria-label={'GitHub Repo Link'}
                      >
                        <GitHubIcon
                          className={classes.icon}
                          style={{fontSize: "1.75rem", marginBottom: ".075em"}}
                        />
                      </Button>
                      <Button
                        className={classes.icon}
                        aria-label={`info about ${tile.title}`}
                      >
                        <InfoIcon
                          className={classes.icon}
                        />
                      </Button>
                      </>
                    }
                  >

                  </CardHeader>

                  {/* <GridListTileBar
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
                  ></GridListTileBar> */}
                </GridListTile>
              </>
              ))}
            </GridList>
            
          </animated.div>
        
        </Grid>
      </Grid>
    </>
  );
}
