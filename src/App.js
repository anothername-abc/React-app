import React from "react";
import { About } from "./pages/About.js";
import { Home } from "./pages/Home.js";
import { Navbar } from "./components/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
