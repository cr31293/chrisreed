import React from "react";
import { Link } from "react-router-dom";
import Greeting from "../../components/Greeting/greeting";
import Trail from "../../components/Description/description";
import Divider from "../../components/Divider/divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function Home() {
  const routes = [
    { name: "About", link: "/about", activeIndex: 0},
    { name: "Portfolio", link: "/portfolio", activeIndex: 1},
    { name: "Resume", link: "/Resume", activeIndex: 2},
    { name: "Contact", link: "/Contact", activeIndex: 3}
  ]
  return (
    <>
      <Greeting />
      <Divider />
      <Trail style={{height:"50em"}}>
        <List>
          <ListItem>
            <span style={{ marginLeft: ".75em", color: "#374952" }}>
              Full-Stack Web Developer
            </span>
          </ListItem>
          {routes.map((route) => (
          <Trail style={{height:"2em", width:"10em"}}>
          <ListItem
            key={`${route}${route.activeIndex}`}
            button
            component={Link}
            to={route.link}
          >
            <ListItemText
              disableTypography
            >
              {route.name}
            </ListItemText>
          </ListItem>

          </Trail>
          
          ))}
        </List>
      </Trail>
    </>
  );
}

export default Home;
