import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Greeting from "../../components/Greeting/greeting";
import Description from "../../components/Description/description";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  selectedInput: {
    color: "#374952",
    marginTop: "0em",
    fontSize: "3.5rem",
    marginLeft: "1em",
    borderBottomStyle: "none",
    borderBottomColor: "#374952",
    width: "100%",
    "& .MuiListItemText-root": {
      backgroundColor: "transparent",
      width: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
      marginLeft: "0em",
    },
  },
  gridContainerGreeting: {
    display: "flex",
    width: "38%",
    marginTop: "0em",
  },
  gridContainerNav: {
    display: "flex",
    width: "30%",
    height: "100%",
    marginTop: "8em",
    marginRight: "5em",
    marginLeft: "-5em"
  },
  navItems: {
    height: "20em",
  },
  [theme.breakpoints.down("lg")]: {
    width: "20em",
  },

}));

export default function Nav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [index, setIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, value) => {
    props.setValue(value);
  };

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About", link: "/about", activeIndex: 1 },
    { name: "Portfolio", link: "/portfolio", activeIndex: 2 },
    { name: "Resume", link: "/Resume", activeIndex: 3 },
    { name: "Contact", link: "/Contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, routes, props]);

  const description = (
    <>
      <Grid
        container
        className={classes.gridContainerNav}
        direction="column"
        justify="left"
      >
        <Description style={{ height: "55em", width: "50%" }}>
          <List value={props.value} onChange={handleChange}>
            {routes.map((route) => (
              <Description style={{ height: "3em", width: "17em" }}>
                <ListItem
                  style={{
                    backgroundColor: "transparent",
                  }}
                  disableGutters
                  key={`${route}${route.activeIndex}`}
                  component={Link}
                  to={route.link}
                  label={route.name}
                  selected={props.value === route.activeIndex}
                  onClick={(index) => {
                    console.log(index);
                    props.setValue(route.activeIndex);
                  }}
                  classes={{ selected: classes.selectedInput }}
                >
                  <ListItemText disableTypography>{route.name}</ListItemText>
                </ListItem>
              </Description>
            ))}
          </List>
        </Description>
      </Grid>
    </>
  );

  const drawer = (
    <>
      <div className={classes.divDrawer}>
        <Grid
          container
          direction="row"
          justify="right"
          className={classes.gridDrawer}
        >
          <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            classes={{ paper: classes.drawer }}
          >
            <div className={classes.toolbarMargin} />
            <List disablePadding>
              {routes.map((route) => (
                <ListItem
                  divider
                  key={`${route}${route.activeIndex}`}
                  button
                  component={Link}
                  to={route.link}
                  selected={props.value === route.activeIndex}
                  onClick={() => {
                    setOpenDrawer(false);
                    props.setValue(route.activeIndex);
                  }}
                  classes={{ selected: classes.drawerItemSelected }}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                  >
                    {route.name}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
          <IconButton
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRiple
          >
            <MenuIcon className={classes.drawerIcon} />
          </IconButton>
        </Grid>
      </div>
    </>
  );

  return <>{matches ? null : description}</>;
}
