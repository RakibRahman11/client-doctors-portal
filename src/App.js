import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import AppointPage from './components/Appointment/AppointPage/AppointPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/appointment">
          <AppointPage></AppointPage>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
