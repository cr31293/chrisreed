import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/theme";
import Nav from "./pages/Nav/index";
import AboutPage from "./pages/About/index";
import HomePage from "./pages/Home/index";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

const useStyles = makeStyles((theme) => ({

}))

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);


  return (
    <>
    <ThemeProvider 
      theme={theme}
      
    >
      <Router>
        <Nav value={value} setValue={setValue}  />
         
           
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/" || "/home"}
                  component={HomePage}
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
                                <Route 
                  exact
                  path={process.env.PUBLIC_URL + "/resume"}
                  component={Resume}
                />
              </Switch>

      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
