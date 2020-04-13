import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AuthState from "./context/auth/AuthState";

import AuthenticationPage from "./pages/Authentication";
import NotFoundPage from "./pages/NotFound";
import TasksPage from "./pages/Tasks";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <AuthState>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={AuthenticationPage} />
          <Route exact path="/tasks" component={TasksPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </AuthState>
  );
};

export default App;
