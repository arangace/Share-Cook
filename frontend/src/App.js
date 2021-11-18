import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AppContext } from "./AppContextProvider";
import HomePage from './components/HomePage';
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route path="/Home">
          <HomePage />
        </Route>
        <Route path="*">
          <Redirect to="/Home" />
        </Route>
      </Switch>
    </>
  );
}

export default App;