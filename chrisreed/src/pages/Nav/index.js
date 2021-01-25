import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Greeting from "../../components/Greeting/greeting";
import Description from "../../components/Description/description";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiGrid-root": {
      width: "38em",
      height: "10em",
      display: "inline"
    }
  },
  selectedInput: {
    color: "#374952",
    marginTop: "-.5em",
    fontSize: "3.5rem",
    marginLeft: "1.5em",
    borderBottomStyle: "none",
    borderBottomColor: "#374952",
    width: "100%",
    "& .MuiListItemText-root": {
      backgroundColor: "transparent",
    },
  },
  gridContainerGreeting: {
    display: "flex",
    width: "38%",
    height: "10%",
  },
  gridContainerNav: {
    display: "flex",
    width: "38%",
    height: "100%",
  },
  navItems: {
    width: "38em",
    height: "20em",
    marginTop: "12em"
  }
}));

export default function Nav(props) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleChange = (e, value) => {
    props.setValue(value)
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

  return (
    <>
      <div className={classes.root}>
      <Grid
        container
        className={classes.gridContainerGreeting}
        direction="column"
        justify="left"
      >
        <Grid item>
          <Greeting />
        </Grid>
      </Grid>
      <Grid 
        container 
        className={classes.gridContainerNav}
        direction="column" 
        justify="left"
      >
        <Grid 
          item
          className={classes.navItems}
        >
          <Description style={{ height: "55em", width: "50%" }}>
            <List value={props.value} onChange={handleChange}>
              {routes.map((route) => (
                <Description style={{ height: "3em", width: "17em" }}>
                  <ListItem
                    style={{ backgroundColor: "transparent" }}
                    disableGutters
                    key={`${route}${route.activeIndex}`}
                    component={Link}
                    to={route.link}
                    label={route.name}
                    selected={props.value === route.activeIndex}
                    onClick={
                      (index) => {
                      console.log(index);
                      props.setValue(route.activeIndex);
                  }}
                    classes={{ selected: classes.selectedInput }}
                  >
                    <ListItemText disableTypography >{route.name}</ListItemText>
                  </ListItem>
                </Description>
              ))}
            </List>
          </Description>
        </Grid>
      </Grid>
      </div>
    </>
  );
}

