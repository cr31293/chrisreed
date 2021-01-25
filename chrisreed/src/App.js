import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Nav from "./pages/Nav/index";
import AboutPage from "./pages/About/index";
import Home from "./pages/Home/index";
import Portfolio from "./pages/Portfolio";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "50%",
    float: "right"
  },
  adiv: {
    width: "100%",
    float: "left",
  }
}))

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);


  return (
    <>
      <Router>
        <Nav value={value} setValue={setValue}  />
        <main className={classes.main}>
         
           
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={Home}
                />
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/about"}
                  component={AboutPage}
                />
                <Route 
                  exact
                  path={process.env.PUBLIC_URL + "/portfolio"}
                  component={Portfolio}
                />
              </Switch>
  

        </main>
      </Router>
    </>
  );
}

export default App;
