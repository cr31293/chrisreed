import React, { useState, useRef } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";
import { makeStyles, useTheme } from "@material-ui/styles";
import data from "./data.json";
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
import { Autorenew } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: "12.5em",
    height: "40em",
    "& .MuiGrid-root": {
      [theme.breakpoints.down("lg")]: {
        width: "50em",
        height: "40em",
      },
      [theme.breakpoints.down("md")]: {
        marginTop: "-3em",
        width: "100%",
        height: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: '100%',
        height: 'auto',
      }
    },
  },
  gridList: {
    width: "100%",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: 1,
    },
  },
  itemArea: {
    borderColor: "transparent",
  },
  itemContainer: {
    
    [theme.breakpoints.down("md")]: {
    },
  },
  githubIcon: {
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "2rem",
    display: "inline",
    marginTop: "-0.1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      marginTop: "1em",
      marginLeft: "0em"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: ".2em"
    }
  },
  infoIcon: {
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "2rem",
    display: "inline",
    marginTop: ".125em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
      marginTop: "1em", 
      marginLeft: "-4em"
    }
  },
  tilebar: {
    marginTop: "-1em",
    "& .MuiTypography-root": {
    [theme.breakpoints.down("md")]: {
      fontSize: ".75rem",
    }
    }
  },
  gridListTile: {
    
  }
}));

export default function Portfolio() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, set] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  // const colMatches = useMediaQuery(theme.breakpoints.down("sm"));
  // const gridListTileDisplay = colMatches ? "listItems" : "flex";
  // const gridListTileWidth = colMatches ? "100%" : "50%";

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.default,
    from: { size: "1%", backgroundColor: "#f0f0f0" },
    to: { size: open ? "100%" : "100%", backgroundColor: "#c4cacf" },
  });

  const transRef = useRef();
  // const transitions = useTransition(open ? data : , tile => tile.name, {
  //   ref: transRef,
  //   unique: true,
  //   trail: 400 / data.length,
  //   from: { opacity: 0, transform: 'scale(0)' },
  //   enter: { opacity: 1, transform: 'translate3d(42px, -62px, -135px)' },
  //   leave: { opacity: 0, transform: 'scale(0)' }
  // })

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.gridContainer}
      >
        <Grid className={classes.itemContainer} item>
          <animated.div
            style={{
              ...rest,
              width: matches ? '100%' : size,
              height: size,
              padding: "25px",
              borderRadius: "5px",
              cursor: "pointer",
              boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.05)",
            }}
          >
            <GridList cellHeight={"auto"} className={classes.gridList}>
              <GridListTile key="Subheader" cols={ matches ? 0 : 2 }>
                <ListSubheader component="div" />
              </GridListTile>
              {data.map((tile, key, props) => (
                
                  <GridListTile
                    className={classes.gridListTile}
                    key={tile.image}
                    style={{
                      width:  matches ? '100%' : '40%',
                      height: "12.5rem",
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                      margin: "auto",
                      
                    }}
                  >
                    <Link href={tile.live} target="_blank" rel="noopener">
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
                        opacity: ".75",
                        color: "white",
                        height: "3.25em",
                        marginTop: "0em",
                      }}
                      action={
                        <>
                          <Button
                            aria-label={"GitHub Repo Link"}
                            component={Link}
                            href={tile.repo}
                          >
                            <GitHubIcon
                              className={classes.githubIcon}
                            />
                          </Button>
                          {/* <Button
                            className={classes.icon}
                            aria-label={`info about ${tile.title}`}
                          >
                            <InfoIcon className={classes.infoIcon} />
                          </Button> */}
                        </>
                      }
                    ></CardHeader>

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
                
              ))}
            </GridList>
          </animated.div>
        </Grid>
      </Grid>
    </>
  );
}
