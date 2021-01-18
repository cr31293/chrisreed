import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/index';
import About from './pages/About/index';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
