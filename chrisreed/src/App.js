import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/index';
import About from './pages/About/index';


function App() {
  const [value, setValue] = useState(0);

  return (
    <>

      <Router>
        <Home
          value={value}
          setValue={setValue}
        />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
