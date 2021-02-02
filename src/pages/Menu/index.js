import React, { useEffect, useState, useCallback }  from 'react';
import { Link } from "react-router-dom";
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
  gridDrawer: {
    width: "100%",
    marginLeft: "0em",
    marginTop: "-3em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "5em"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-5em"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
      marginTop: "-3em"
    }
  },
  drawer: {
    backgroundColor: "#92a1ab",
    color: "white",
    height: "100%",
    width: "25%",
  },
  drawerItem: {
    textAlign: "center",
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0em",
    },
  },
  drawerIcon: {
    height: "1em",
  },
}));

export default function Menu(props) {
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
            anchor="right"
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

  return <>{matches ? drawer : null}</>;


};
