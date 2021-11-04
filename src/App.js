import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import AppointPage from './components/Appointment/AppointPage/AppointPage';
import LoginAccount from './components/Pages/LoginInformation/LoginAccount/LoginAccount';
import RegisterAccount from './components/Pages/LoginInformation/RegisterAccount/RegisterAccount';
import AuthProvider from './AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthProvider>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/appointment">
              <AppointPage></AppointPage>
            </Route>
            <Route exact path="/login">
              <LoginAccount></LoginAccount>
            </Route>
            <Route exact path="/register">
              <RegisterAccount></RegisterAccount>
            </Route>
          </AuthProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
