import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/theme";
import Header from "./components/Greeting/greeting";
import Nav from "./pages/Nav/index";
import Menu from "./pages/Menu/index";
import AboutPage from "./pages/About/index";
import HomePage from "./pages/Home/index";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import ContactPage from "./pages/Contact/index";


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
      <Header />
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
                <Route 
                  exact
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={ContactPage}
                />
              </Switch>
            <Menu value={value} setValue={setValue}  />
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
