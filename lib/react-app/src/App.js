import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./pages/Login/";
import Home from "./pages/Home/"

/**
 * 应用
 */
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
