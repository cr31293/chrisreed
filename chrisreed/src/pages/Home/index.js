import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Greeting from "../../components/Greeting/greeting";
import Trail from "../../components/Description/description";
import Divider from "../../components/Divider/divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  selectedInput: {
    color: "#374952",
    fontSize: "3.5rem",
    borderBottomStyle: "solid",
    borderBottomColor: "#374952",
    "& .MuiListItemText-root": {
      backgroundColor: "white",
    }
  }
}))

function Home(props) {
  const classes = useStyles();

  const handleChange = (e, value) => {
    props.setValue(value);
  };

  const routes = [
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
      <Greeting />
      <Divider />
      <Trail style={{ height: "55em" }}>
        <List value={props.value} onChange={handleChange}>
          <ListItem>
            <span style={{ marginLeft: "-.75em", color: "#374952" }}>
              Full-Stack Web Developer
            </span>
          </ListItem>
          {routes.map((route) => (
            <Trail style={{ height: "3.5em", width: "12em" }}>
              <ListItem
                style={{backgroundColor:"white"}}
                disableGutters
                key={`${route}${route.activeIndex}`}
                component={Link}
                to={route.link}
                label={route.name}
                selected={props.value === route.activeIndex}
                onClick={() => {
                  props.setValue(route.activeIndex)
                }}
                classes={{selected: classes.selectedInput}}
              >
                <ListItemText disableTypography>{route.name}</ListItemText>
              </ListItem>
            </Trail>
          ))}
        </List>
      </Trail>
    </>
  );
}

export default Home;
